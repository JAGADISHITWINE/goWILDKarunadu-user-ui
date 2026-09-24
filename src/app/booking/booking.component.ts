import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TourDetails } from "../tour-details/tour-details";
import { Booking, BookingData, ReferralSummary } from "./booking";
import { Auth } from "../core/auth";
import { TokenService } from 'src/app/core/token.service';
import { AuthModalService } from "../auth/auth-modal.service";
import { Sessionexpired } from "../auth/sessionexpired/sessionexpired";
import { OnlyNumberDirective } from "../shared/Only number.directive";
import { DropdownOption, DropdownService } from "../core/dropdown.service";
import { PublicRouteIdService } from "../core/public-route-id.service";
import { environment } from "src/environments/environment";
import { MediaService } from '../core/media.service';
import { TrekOperationsService, WalletData } from "../core/trek-operations.service";
import { SiteSettingsService } from "../core/site-settings.service";

// Participant interface
interface Participant {
  name: string;
  age: number | null;
  gender: string;
  idType: string;
  idNumber: string;
  phone: string;
  bloodGroup?: string;
  dietaryPreference?: string;
  medicalCondition?: string;
  medicalInfo: string;
  idError?: string;
  ageError?: string;
  phoneError?: string;
}

interface BookingAddOn {
  id: string | number;
  name: string;
  category?: string;
  price: number;
  selected: boolean;
  quantity: number;
}

interface AvailableCoupon {
  id: string | number;
  code: string;
  discountType: "percentage" | "flat";
  discountValue: number;
  minBookingAmount: number;
  maxDiscountAmount: number | null;
  endDate: string | null;
  usageLimit: number | null;
  usageCount: number;
  isUsedByUser?: boolean;
}

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterLink,
    OnlyNumberDirective
  ],
})
export class BookingComponent implements OnInit, OnDestroy {
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  readonly fallbackImage = "assets/default-trek.jpg";
  trekId: string = "";
  routeRef: string = "";
  currentStep: number = 1;
  isLoading: boolean = true;
  termsAccepted: boolean = true;
  couponCode: string = "";
  couponValidationError: string = "";
  couponValidationSuccess: string = "";
  couponDiscountAmount: number = 0;
  isCouponValidating: boolean = false;
  availableCoupons: AvailableCoupon[] = [];
  couponListError: string = "";
  private hasLoadedCoupons: boolean = false;
  private couponValidationTimer: ReturnType<typeof setTimeout> | null = null;
  private referralSummaryLoadedForUser: string | null = null;

  referralCodeInput: string = "";
  referralValidationError: string = "";
  referralValidationSuccess: string = "";
  referralDiscountAmount: number = 0;
  referralRewardDiscountAmount: number = 0;
  isReferralValidating: boolean = false;
  useReferralReward: boolean = false;
  referralRewardSlotsToUse: number = 1;
  referralSummary: ReferralSummary | null = null;
  referralSummaryError: string = "";
  isReferralSummaryLoading: boolean = false;
  readonly termsPdfUrl = 'assets/legal/terms-and-conditions.pdf';

  // Trek data from API
  trek: any = null;
  batches: any[] = [];
  selectedBatch: any = null;

  // Booking form data
  booking = {
    batchId: "",
    date: "",
    participants: 1,
    name: "",
    email: "",
    phone: "",
    emergencyContact: "",
    specialRequests: "",
  };

  // Participants array
  participants: Participant[] = [];

  // Add-ons
  addOns: BookingAddOn[] = [];

  userId: string | null = null;
  successMessage: any;
  errorMessage: any;
  isSubmitting: boolean = false;
  private successMessageTimer: ReturnType<typeof setTimeout> | null = null;
  private errorMessageTimer: ReturnType<typeof setTimeout> | null = null;
  genderOptions: DropdownOption[] = [];
  idTypeOptions: DropdownOption[] = [];
  bloodGroupOptions: DropdownOption[] = [];
  dietaryOptions: DropdownOption[] = [];
  medicalOptions: DropdownOption[] = [];

  // Payment Plan & GoWild Wallet
  paymentPlan: 'full' | 'deposit_30' = 'full';
  applyWalletBalance: boolean = false;
  userWallet: WalletData | null = null;
  isWalletLoading: boolean = false;

  // ── Payment Modal State ──
  showPaymentModal: boolean = false;
  selectedPaymentTab: 'upi' | 'card' | 'netbanking' | 'wallet' = 'upi';
  upiOption: 'qr' | 'vpa' = 'qr';
  upiVpa: string = '';
  upiTimerSeconds: number = 720;
  upiTimerInterval: any = null;
  cardDetails = {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    saveCard: true
  };
  selectedBank: string = 'HDFC';
  selectedWallet: string = 'amazonpay';
  isProcessingPayment: boolean = false;
  paymentSuccessState: boolean = false;
  selectedPaymentMethodLabel: string = 'Instant UPI / QR Code';

  constructor(
    private route: ActivatedRoute,
    private bookingService: Booking,
    private trekService: TourDetails,
    private auth: Auth,
    private authModal: AuthModalService,
    private router: Router,
    private tokenService: TokenService,
    private sessionService: Sessionexpired,
    private dropdownService: DropdownService,
    private publicRouteId: PublicRouteIdService,
    private media: MediaService,
    private operationsService: TrekOperationsService,
    public siteSettings: SiteSettingsService,
  ) { }

  ngOnInit() {
    this.loadDropdownOptions();
    this.loadUserWallet();

    // Get trek ID from route
    this.route.params.subscribe((params) => {
      const ref = String(params["id"] || "");
      this.routeRef = ref;
      const resolvedId = this.publicRouteId.resolve(ref);
      this.trekId = String(resolvedId || "");
      this.hasLoadedCoupons = false;
      this.availableCoupons = [];
      this.couponListError = "";
      if (this.routeRef) {
        this.loadTrekData();
      }
    });
    if (!this.booking.participants) {
      this.booking.participants = 1;
    }

    if (this.tokenService.getUserId()) {
      this.loadReferralSummary();
      this.loadUserWallet();
    }
  }

  loadUserWallet() {
    const uid = this.tokenService.getUserId();
    if (!uid) return;
    this.isWalletLoading = true;
    this.operationsService.getWallet(uid).subscribe({
      next: (wallet) => {
        this.userWallet = wallet;
        this.isWalletLoading = false;
      },
      error: () => {
        this.isWalletLoading = false;
      }
    });
  }

  get forestPermitFeeTotal(): number {
    return (this.booking.participants || 1) * 250;
  }

  get ecoCessTotal(): number {
    return (this.booking.participants || 1) * 50;
  }

  get advanceDepositPayable(): number {
    return parseFloat((this.payablePrice * 0.30).toFixed(2));
  }

  get remainderPayable(): number {
    return parseFloat((this.payablePrice - this.advanceDepositPayable).toFixed(2));
  }

  get grossAmountBeforeWallet(): number {
    return this.paymentPlan === 'deposit_30' ? this.advanceDepositPayable : this.payablePrice;
  }

  get walletDeductionAmount(): number {
    if (!this.applyWalletBalance || !this.userWallet) return 0;
    const available = Number(this.userWallet.totalUsableBalance || 0);
    return Math.min(available, this.grossAmountBeforeWallet);
  }

  get effectivePayableNow(): number {
    return Math.max(0, this.grossAmountBeforeWallet - this.walletDeductionAmount);
  }

  ngOnDestroy() {
    this.stopUpiTimer();
    if (this.couponValidationTimer) {
      clearTimeout(this.couponValidationTimer);
      this.couponValidationTimer = null;
    }
    if (this.successMessageTimer) {
      clearTimeout(this.successMessageTimer);
      this.successMessageTimer = null;
    }
    if (this.errorMessageTimer) {
      clearTimeout(this.errorMessageTimer);
      this.errorMessageTimer = null;
    }
  }

  private loadDropdownOptions() {
    const genderFallback: DropdownOption[] = [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'Other', label: 'Other' },
    ];

    const idTypeFallback: DropdownOption[] = [
      { value: 'Aadhaar Card', label: 'Aadhaar Card' },
      { value: 'PAN Card', label: 'PAN Card' },
      { value: 'Passport', label: 'Passport' },
      { value: 'Driving License', label: 'Driving License' },
      { value: 'Voter ID Card', label: 'Voter ID Card' },
    ];

    const bloodGroupFallback: DropdownOption[] = [
      { value: 'A+', label: 'A+' },
      { value: 'A-', label: 'A-' },
      { value: 'B+', label: 'B+' },
      { value: 'B-', label: 'B-' },
      { value: 'O+', label: 'O+' },
      { value: 'O-', label: 'O-' },
      { value: 'AB+', label: 'AB+' },
      { value: 'AB-', label: 'AB-' },
    ];

    const dietaryFallback: DropdownOption[] = [
      { value: 'Vegetarian', label: 'Vegetarian' },
      { value: 'Non-Vegetarian', label: 'Non-Vegetarian' },
      { value: 'Jain (No Onion/Garlic)', label: 'Jain (No Onion/Garlic)' },
      { value: 'Vegan', label: 'Vegan' },
      { value: 'Eggitarian', label: 'Eggitarian' },
    ];

    const medicalFallback: DropdownOption[] = [
      { value: 'None / Fit to Trek', label: 'None / Fit to Trek' },
      { value: 'Asthma / Respiratory', label: 'Asthma / Respiratory' },
      { value: 'Hypertension / High BP', label: 'Hypertension / High BP' },
      { value: 'Cardiac History', label: 'Cardiac History' },
      { value: 'Diabetes', label: 'Diabetes' },
      { value: 'Dust & Pollen Allergy', label: 'Dust & Pollen Allergy' },
      { value: 'Recent Knee/Ankle Surgery', label: 'Recent Knee/Ankle Surgery' },
      { value: 'Vertigo / Acrophobia', label: 'Vertigo / Acrophobia' },
    ];

    this.dropdownService.getOptions('gender', genderFallback).subscribe((options) => {
      this.genderOptions = options;
    });

    this.dropdownService.getOptions('id-types', idTypeFallback).subscribe((options) => {
      this.idTypeOptions = options;
    });

    this.dropdownService.getOptions('blood-groups', bloodGroupFallback).subscribe((options) => {
      this.bloodGroupOptions = options;
    });

    this.dropdownService.getOptions('dietary', dietaryFallback).subscribe((options) => {
      this.dietaryOptions = options;
    });

    this.dropdownService.getOptions('medical-conditions', medicalFallback).subscribe((options) => {
      this.medicalOptions = options;
    });
  }


  loadTrekData() {
    this.isLoading = true;

    this.trekService.getTrekById(this.routeRef || this.trekId).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.trek = response.data || [];
          // Convert single batch to array for consistent handling
          if (this.trek.batch && !Array.isArray(this.trek.batch)) {
            this.batches = [this.trek.batch];
          } else if (this.trek.batches) {
            this.batches = this.trek.batches;
          } else {
            this.batches = [];
          }

          // Find available batch
          const availableBatch = this.batches.find(
            (b: any) => b.status === "active" && b.availableSlots > 0,
          );

          if (availableBatch) {
            const batchIdValue = String(availableBatch.batchId || availableBatch.id || "");
            this.booking.batchId = batchIdValue;
            this.onBatchSelect(batchIdValue);
          }

          // Pre-fill user data from token (centralized)
          const decoded = this.tokenService.decode();
          this.booking.name = decoded?.name || "";
          this.booking.email = decoded?.email || "";
          this.booking.phone = decoded?.phone || "";
          this.userId = this.tokenService.getUserId();

          this.initializeAddOns();
          // Initialize participants array
          this.initializeParticipants();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Load trek error:', error);
        this.isLoading = false;
      },
    });
  }

  private loadAvailableCoupons() {
    if (!this.trekId || this.hasLoadedCoupons) return;

    this.bookingService.getAvailableCoupons(this.trekId, this.userId).subscribe({
      next: (res: any) => {
        this.availableCoupons = Array.isArray(res?.data) ? res.data : [];
        this.couponListError = "";
        this.hasLoadedCoupons = true;
      },
      error: () => {
        this.availableCoupons = [];
        this.couponListError = "Unable to load coupons right now";
      }
    });
  }

  onBatchSelect(batchId: string | number | null | undefined) {
    const batchRef = String(batchId ?? "").trim();
    this.selectedBatch = this.batches.find(
      (b) => String(b.batchId || b.id || "") === batchRef,
    );

    if (this.selectedBatch) {
      this.booking.date = this.selectedBatch.startDate;
      this.booking.batchId = String(this.selectedBatch.batchId || this.selectedBatch.id || "");
      this.initializeAddOns();
      this.scheduleCouponValidation();
    }
  }

  /**
   * Initialize participants array based on number of participants
   */
  initializeParticipants() {
    this.participants = [];

    for (let i = 0; i < this.booking.participants; i++) {
      if (i === 0) {
        // First participant is the primary contact
        this.participants.push({
          name: this.booking.name,
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: this.booking.phone,
          bloodGroup: "O+",
          dietaryPreference: "Vegetarian",
          medicalCondition: "None / Fit to Trek",
          medicalInfo: "",
        });
      } else {
        // Additional participants
        this.participants.push({
          name: "",
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: "",
          bloodGroup: "O+",
          dietaryPreference: "Vegetarian",
          medicalCondition: "None / Fit to Trek",
          medicalInfo: "",
        });
      }
    }
  }

  initializeAddOns() {
    const rawAddOns =
      this.selectedBatch?.addOns ||
      this.selectedBatch?.addons ||
      this.selectedBatch?.add_ons ||
      this.trek?.addOns ||
      this.trek?.addons ||
      this.trek?.add_ons ||
      [];

    if (Array.isArray(rawAddOns) && rawAddOns.length > 0) {
      this.addOns = rawAddOns
        .map((item: any, index: number) => ({
          id: Number(item.id || item.addon_id || index + 1),
          name: String(item.name || item.addon_name || item.title || "").trim(),
          price: Number(item.price || item.unit_price || 0),
          selected: false,
          quantity: 0,
        }))
        .filter((addon: BookingAddOn) => addon.name && addon.price > 0);
      return;
    }

    // Load dynamic gear inventory from backend
    this.dropdownService.getGearRentals().subscribe({
      next: (gearItems) => {
        if (Array.isArray(gearItems) && gearItems.length > 0) {
          this.addOns = gearItems.map((gear, idx) => ({
            id: gear.id || idx + 1,
            name: gear.name || `${gear.item_name || 'Gear Item'}`,
            category: gear.category || '',
            price: Number(gear.price ?? gear.rental_rate_per_day ?? 150),
            selected: false,
            quantity: 0,
          }));
        } else {
          this.addOns = [
            { id: 1, name: "Anti-Shock Carbon Trekking Poles (Pair)", category: "Trekking Poles & Sticks", price: 150, selected: false, quantity: 0 },
            { id: 2, name: "Quechua -5°C Expedition Sleeping Bag", category: "Sleeping Bags & Mats", price: 200, selected: false, quantity: 0 },
            { id: 3, name: "Waterproof Monsoon Poncho & Rain Cover", category: "Waterproof Ponchos & Rain Covers", price: 80, selected: false, quantity: 0 },
            { id: 4, name: "450 Lumens Rechargeable LED Headlamp", category: "Headlamps & Torches", price: 100, selected: false, quantity: 0 },
            { id: 5, name: "Wildcraft 60L Rucksack + Rain Cover", category: "Expedition Rucksacks (50L-60L)", price: 250, selected: false, quantity: 0 },
          ];
        }
      },
      error: () => {
        this.addOns = [
          { id: 1, name: "Anti-Shock Carbon Trekking Poles (Pair)", category: "Trekking Poles & Sticks", price: 150, selected: false, quantity: 0 },
          { id: 2, name: "Quechua -5°C Expedition Sleeping Bag", category: "Sleeping Bags & Mats", price: 200, selected: false, quantity: 0 },
          { id: 3, name: "Waterproof Monsoon Poncho & Rain Cover", category: "Waterproof Ponchos & Rain Covers", price: 80, selected: false, quantity: 0 },
        ];
      }
    });
  }

  /**
   * Update participants array when number changes
   */
  onParticipantsInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);

    if (!this.selectedBatch) return;

    const max = this.selectedBatch.availableSlots;

    // Clamp to max available
    if (value > max) value = max;
    if (value < 1) value = 1;

    // Update model
    this.booking.participants = value;
    input.value = value.toString();

    // Reinitialize participants array
    this.initializeParticipants();
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
  }

  /**
   * Sync primary contact data to first participant
   */
  syncPrimaryContactToParticipant() {
    if (this.participants.length > 0) {
      this.participants[0].name = this.booking.name;
      this.participants[0].phone = this.booking.phone;
    }
  }

  /**
   * Check if all participants have required fields filled
   */
  areAllParticipantsValid(): boolean {
    return this.participants.every((participant, index) =>
      participant.name.trim() !== '' &&
      participant.age !== null &&
      participant.age > 0 &&
      participant.gender !== '' &&
      participant.idType !== '' &&
      participant.idNumber.trim() !== '' &&
      !participant.idError &&
      !participant.ageError &&
      (index === 0 || this.isValidPhone(participant.phone))
    );
  }

  /**
   * Check if can proceed to next step
   */
  canProceedToNextStep(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.booking.batchId &&
          this.booking.participants >= 1 &&
          this.selectedBatch !== null;

      case 2:
        return this.booking.name.trim() !== '' &&
          this.booking.email.trim() !== '' &&
          this.booking.phone.length === 10 &&
          this.booking.emergencyContact.length === 10;

      case 3:
        return this.areAllParticipantsValid();

      default:
        return true;
    }
  }

  get basePrice(): number {
    if (!this.selectedBatch) return 0;
    return (this.selectedBatch.price || 0) * this.booking.participants;
  }

  get addOnsPrice(): number {
    return this.addOns.reduce(
      (sum, addon) => sum + addon.price * (addon.quantity || 0),
      0
    );
  }

  get totalPrice(): number {
    return this.basePrice + this.addOnsPrice;
  }

  get payablePrice(): number {
    const discounts =
      this.couponDiscountAmount +
      this.referralDiscountAmount +
      this.referralRewardDiscountAmount;
    return Math.max(0, this.totalPrice - discounts);
  }

  get isUserLoggedIn(): boolean {
    return !!this.tokenService.getUserId();
  }

  get canUseReferralReward(): boolean {
    if (!this.isUserLoggedIn || !this.referralSummary) {
      return false;
    }
    return this.referralSummary.freeSlotsAvailable > 0 && this.referralDiscountAmount === 0;
  }

  get referralCodeForShare(): string {
    return this.referralSummary?.referralCode || this.referralCodeInput || "";
  }

  nextStep() {
    // Validate current step
    if (!this.canProceedToNextStep()) {
      if (this.currentStep === 1) {
        alert("Please select a batch and number of participants");
      } else if (this.currentStep === 2) {
        alert("Please fill all required contact information");
      } else if (this.currentStep === 3) {
        alert("Please fill all required participant details");
      }
      return;
    }

    // Check authentication before step 3
    if (this.currentStep === 2) {
      // Sync primary contact to first participant before moving forward
      this.syncPrimaryContactToParticipant();

      const hasToken = !!this.tokenService.getToken();     // token exists (even if expired)
      const isValid = this.tokenService.isValid();         // token exists AND not expired

      if (hasToken && !isValid) {
        // Token exists but is expired → show session expired modal
        this.sessionService.notifyExpired();
        return;
      }

      if (!hasToken) {
        // No token at all → fresh login flow
        this.authModal
          .openLogin()
          .then((result: any) => {
            if (result && result.success) {
              this.currentStep++;
            }
          })
          .catch(() => {
            // User cancelled login
          });
        return;
      }
    }

    if (this.currentStep < 4) {
      this.currentStep++;
      if (this.currentStep === 4) {
        this.loadAvailableCoupons();
        this.scheduleCouponValidation();
        this.loadReferralSummary();
        this.updateReferralRewardDiscount();
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  proceedToPayment() {
    this.openPaymentModal();
  }

  getNextStepButtonText(): string {
    switch (this.currentStep) {
      case 1:
        return 'Continue to Contact Details';
      case 2:
        return 'Continue to Trekkers Manifest';
      case 3:
        return 'Review & Confirm Booking';
      default:
        return 'Continue';
    }
  }

  getStepIncompleteHint(): string {
    switch (this.currentStep) {
      case 1:
        if (!this.selectedBatch) return 'Select a departure batch above';
        if (this.booking.participants < 1) return 'Select at least 1 participant';
        return '';
      case 2:
        if (!this.booking.name?.trim() || !this.booking.email?.trim()) return 'Fill primary contact name & email';
        if (String(this.booking.phone || '').length !== 10) return 'Valid 10-digit mobile number required';
        if (String(this.booking.emergencyContact || '').length !== 10) return '10-digit emergency contact required';
        return '';
      case 3:
        if (!this.areAllParticipantsValid()) return 'Complete all trekker details (ID & Blood group)';
        return '';
      default:
        return '';
    }
  }

  openPaymentModal() {
    if (this.currentStep !== 4) return;

    if (!this.termsAccepted) {
      this.showTransientMessage("error", "Please accept the Terms & Conditions and Cancellation Policy to proceed.", 2500);
      return;
    }

    if (this.isCouponValidating) {
      this.showTransientMessage("error", "Please wait, validating coupon...", 1800);
      return;
    }

    if (this.couponCode.trim() && this.couponValidationError) {
      this.showTransientMessage("error", this.couponValidationError, 2200);
      return;
    }

    this.showPaymentModal = true;
    this.paymentSuccessState = false;
    this.isProcessingPayment = false;
    this.startUpiTimer();
  }

  closePaymentModal() {
    if (this.isProcessingPayment) return;
    this.showPaymentModal = false;
    this.stopUpiTimer();
  }

  setPaymentTab(tab: 'upi' | 'card' | 'netbanking' | 'wallet') {
    this.selectedPaymentTab = tab;
  }

  startUpiTimer() {
    this.stopUpiTimer();
    this.upiTimerSeconds = 720;
    this.upiTimerInterval = setInterval(() => {
      if (this.upiTimerSeconds > 0) {
        this.upiTimerSeconds--;
      } else {
        this.stopUpiTimer();
      }
    }, 1000);
  }

  stopUpiTimer() {
    if (this.upiTimerInterval) {
      clearInterval(this.upiTimerInterval);
      this.upiTimerInterval = null;
    }
  }

  formatUpiTimer(): string {
    const mins = Math.floor(this.upiTimerSeconds / 60);
    const secs = this.upiTimerSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  appendVpaHandle(handle: string) {
    const raw = (this.upiVpa || '').split('@')[0] || '';
    this.upiVpa = `${raw}${handle}`;
  }

  formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = (input.value || '').replace(/\D/g, '').substring(0, 16);
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    this.cardDetails.number = formatted;
    input.value = formatted;
  }

  formatCardExpiry(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = (input.value || '').replace(/\D/g, '').substring(0, 4);
    if (value.length >= 2) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }
    this.cardDetails.expiry = value;
    input.value = value;
  }

  getCardType(num: string): string {
    const clean = String(num || '').replace(/\D/g, '');
    if (clean.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(clean)) return 'Mastercard';
    if (/^6(0|5)/.test(clean) || /^35/.test(clean)) return 'RuPay';
    if (/^3[47]/.test(clean)) return 'Amex';
    return 'Card';
  }

  completePayment(paymentMethodLabel: string) {
    if (this.isProcessingPayment) return;
    this.selectedPaymentMethodLabel = paymentMethodLabel;
    this.isProcessingPayment = true;

    // Simulate authentic bank gateway verification
    setTimeout(() => {
      this.executeBooking(paymentMethodLabel);
    }, 1200);
  }

  private executeBooking(paymentMethodLabel: string) {
    this.successMessage = "";
    this.errorMessage = "";
    this.isSubmitting = true;

    // Centralized token handling
    this.userId = this.tokenService.getUserId();
    this.updateReferralRewardDiscount();

    const bookingData: BookingData = {
      userId: this.userId,
      trekId: this.trekId,
      trekName: this.trek.name,
      batchId: this.selectedBatch.batchId || this.selectedBatch.id,
      startDate: this.selectedBatch.startDate,
      endDate: this.selectedBatch.endDate,
      price: this.selectedBatch.price,
      availableSlots: this.selectedBatch.availableSlots,
      participants: this.booking.participants,
      couponCode: this.couponCode.trim() ? this.couponCode.trim().toUpperCase() : undefined,
      referralCode: this.referralDiscountAmount > 0
        ? this.referralCodeInput.trim().toUpperCase()
        : undefined,
      useReferralReward: this.useReferralReward && this.referralRewardDiscountAmount > 0,
      referralRewardSlots: this.useReferralReward && this.referralRewardDiscountAmount > 0
        ? this.referralRewardSlotsToUse
        : undefined,
      paymentMethod: paymentMethodLabel,
      selectedAddOns: this.addOns
        .filter((addon) => addon.quantity > 0)
        .map((addon) => ({
          id: addon.id,
          name: addon.name,
          category: addon.category,
          price: addon.price,
          quantity: addon.quantity,
          selected: true,
        })),
      personalInfo: {
        name: this.booking.name,
        email: this.booking.email,
        phone: this.booking.phone,
        emergencyContact: this.booking.emergencyContact,
        specialRequests: this.booking.specialRequests,
      },
      participantDetails: this.participants,
      paymentPlan: this.paymentPlan,
      walletAmountApplied: this.walletDeductionAmount,
      referralReward: this.useReferralReward && this.referralRewardDiscountAmount > 0
        ? { useFreeSlot: true, slots: this.referralRewardSlotsToUse }
        : undefined,
    };

    // Save to service
    this.bookingService.setBookingData(bookingData).subscribe({
      next: async (res: any) => {
        this.isProcessingPayment = false;
        if (res.success == true) {
          this.paymentSuccessState = true;
          this.stopUpiTimer();

          setTimeout(() => {
            this.showPaymentModal = false;
            this.resetBooking();
            this.successMessage = "";
            this.isSubmitting = false;
            this.router.navigateByUrl("/my-bookings");
          }, 2000);
          return;
        }

        const message = this.formatBookingErrorMessage(
          String(res?.message || res?.data?.message || "Booking failed")
        );
        this.showTransientMessage("error", message, 2500);
        this.isSubmitting = false;
        this.isProcessingPayment = false;
      },
      error: async (error) => {
        this.isSubmitting = false;
        this.isProcessingPayment = false;
        const message = this.formatBookingErrorMessage(
          String(error?.error?.message || error?.message || "Something went wrong while booking. Please try again.")
        );
        this.showTransientMessage(
          "error",
          message,
          2500
        );
      }
    });
  }

  private formatBookingErrorMessage(message: string): string {
    const text = String(message || "").trim();
    const lower = text.toLowerCase();

    if (lower.includes("active booking for this trek") || lower.includes("multiple simultaneous bookings")) {
      return text;
    }

    if (lower.includes("active booking for this trek in this month") || lower.includes("complete or cancel the current batch")) {
      return "You already have an active booking for this trek. Please complete or cancel your current trip before booking again.";
    }

    if (lower.includes("completed this trek") || lower.includes("duplicate_booking")) {
      return "You have already completed this trek. Each trek can only be booked once.";
    }

    return text || "Something went wrong while booking. Please try again.";
  }

  private showTransientMessage(
    type: "success" | "error",
    message: string,
    durationMs: number = 2500
  ) {
    if (type === "success") {
      this.successMessage = message;
      this.errorMessage = "";
      if (this.successMessageTimer) clearTimeout(this.successMessageTimer);
      this.successMessageTimer = setTimeout(() => {
        this.successMessage = "";
      }, durationMs);
      return;
    }

    this.errorMessage = message;
    this.successMessage = "";
    if (this.errorMessageTimer) clearTimeout(this.errorMessageTimer);
    this.errorMessageTimer = setTimeout(() => {
      this.errorMessage = "";
    }, durationMs);
  }

  resetBooking() {
    this.currentStep = 1;
    this.booking = {
      batchId: "",
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: "",
    };
    this.participants = [];
    this.initializeParticipants();
    this.addOns = this.addOns.map((addon) => ({
      ...addon,
      selected: false,
      quantity: 0,
    }));
    this.couponCode = "";
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    this.couponDiscountAmount = 0;
    this.isCouponValidating = false;
    this.referralCodeInput = "";
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    this.referralDiscountAmount = 0;
    this.referralRewardDiscountAmount = 0;
    this.isReferralValidating = false;
    this.useReferralReward = false;
    this.referralRewardSlotsToUse = 1;
  }

decrementParticipants() {
  if (!this.selectedBatch) return;
  if (this.booking.participants > 1) {
    this.booking.participants--;
    this.handleParticipantCountChange();
  }
}

incrementParticipants() {
  if (!this.selectedBatch) return;
  if (this.booking.participants < this.selectedBatch.availableSlots) {
    this.booking.participants++;
    this.handleParticipantCountChange();
  }
}

private handleParticipantCountChange() {
  this.initializeParticipants();
  this.syncAddOnQuantitiesWithParticipants();
  this.scheduleCouponValidation();
  this.onParticipantContextChange();
}

private onParticipantContextChange() {
  if (this.referralCodeInput.trim()) {
    this.referralDiscountAmount = 0;
    this.referralValidationSuccess = "";
    this.referralValidationError = "Participant count changed. Tap Apply to refresh referral savings.";
  }
  this.updateReferralRewardDiscount();
}

get participantCountOptions(): number[] {
  return Array.from(
    { length: (this.booking.participants || 1) + 1 },
    (_, index) => index
  );
}

resolveImageUrl(imagePath: string | null | undefined): string {
  return this.media.resolve(imagePath || null);
}

get tourDetailsRouteRef(): string {
  return this.routeRef || (this.publicRouteId.encode(this.trekId) || String(this.trekId || ''));
}

onAddonQuantityChange(addon: BookingAddOn, value: string | number) {
  const numericValue = Math.max(0, Math.min(this.booking.participants, Number(value) || 0));
  addon.quantity = numericValue;
  addon.selected = numericValue > 0;
  this.scheduleCouponValidation();
  this.updateReferralRewardDiscount();
}

private syncAddOnQuantitiesWithParticipants() {
  this.addOns.forEach((addon) => {
    if (addon.quantity > this.booking.participants) {
      addon.quantity = this.booking.participants;
    }
    addon.selected = addon.quantity > 0;
  });
  this.scheduleCouponValidation();
  this.updateReferralRewardDiscount();
}

private isValidPhone(phone: string): boolean {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length === 10;
}

validateParticipantPhone(participant: Participant, isPrimary: boolean = false) {
  participant.phoneError = "";

  // Primary participant phone is auto-filled from contact info in Step 2.
  if (isPrimary) return;

  if (!this.isValidPhone(participant.phone)) {
    participant.phoneError = "Phone number must be exactly 10 digits";
  }
}

onCouponCodeInput(value: string) {
  this.couponCode = String(value || "").toUpperCase().replace(/\s+/g, "");
  this.couponValidationError = "";
  this.couponValidationSuccess = "";
  this.couponDiscountAmount = 0;
  this.scheduleCouponValidation();
  this.updateReferralRewardDiscount();
}

private scheduleCouponValidation() {
  if (this.couponValidationTimer) {
    clearTimeout(this.couponValidationTimer);
    this.couponValidationTimer = null;
  }

  if (this.currentStep !== 4 || !this.couponCode.trim()) {
    this.isCouponValidating = false;
    if (!this.couponCode.trim()) {
      this.couponValidationError = "";
      this.couponValidationSuccess = "";
      this.couponDiscountAmount = 0;
    }
    return;
  }

  this.couponValidationTimer = setTimeout(() => {
    this.validateCouponRealtime();
  }, 450);
}

async copyCouponCode(code: string) {
  const value = String(code || "").trim().toUpperCase();
  if (!value) return;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    this.onCouponCodeInput(value);
    this.showTransientMessage("success", `Coupon ${value} copied`, 1800);
  } catch {
    this.showTransientMessage("error", "Unable to copy coupon", 1800);
  }
}

getCouponLabel(coupon: AvailableCoupon): string {
  if (coupon.discountType === "percentage") {
    return `${Number(coupon.discountValue)}% OFF`;
  }
  return `₹${Number(coupon.discountValue)} OFF`;
}

  private validateCouponRealtime() {
    if (!this.selectedBatch || !this.couponCode.trim()) return;

    this.isCouponValidating = true;
  this.couponValidationError = "";
  this.couponValidationSuccess = "";

  const userId = this.tokenService.getUserId();
  const payload = {
    userId,
    trekId: this.trekId,
    participants: this.booking.participants,
    price: Number(this.selectedBatch.price || 0),
    couponCode: this.couponCode.trim().toUpperCase(),
    selectedAddOns: this.addOns
      .filter((addon) => addon.quantity > 0)
      .map((addon) => ({
        id: addon.id,
        price: addon.price,
        quantity: addon.quantity,
        selected: addon.quantity > 0,
      })),
  };

  this.bookingService.validateCoupon(payload).subscribe({
    next: (res: any) => {
      this.isCouponValidating = false;
      const valid = !!res?.data?.valid;
      if (!res?.success || !valid) {
        this.couponDiscountAmount = 0;
        this.couponValidationError = String(res?.data?.message || res?.message || "Invalid coupon");
        return;
      }

      this.couponDiscountAmount = Number(res?.data?.discountAmount || 0);
      this.couponValidationSuccess = this.couponDiscountAmount > 0
        ? `Coupon applied. You save ₹${this.couponDiscountAmount.toFixed(0)}`
        : String(res?.data?.message || "Coupon applied");
      this.couponValidationError = "";
      this.updateReferralRewardDiscount();
    },
    error: () => {
      this.isCouponValidating = false;
      this.couponDiscountAmount = 0;
      this.couponValidationError = "Unable to validate coupon right now";
    }
  });
}

  private ensureUserLoggedInForReferral(): boolean {
    if (this.isUserLoggedIn) {
      return true;
    }
    this.showTransientMessage("error", "Please log in to access referral benefits.", 2500);
    return false;
  }

  loadReferralSummary(force: boolean = false) {
    const userId = this.tokenService.getUserId();
    if (!userId) {
      this.referralSummary = null;
      this.referralSummaryError = "";
      this.referralSummaryLoadedForUser = null;
      return;
    }

    if (!force && this.referralSummary && this.referralSummaryLoadedForUser === userId) {
      return;
    }

    this.isReferralSummaryLoading = true;
    this.referralSummaryError = "";
    this.bookingService.getReferralSummary(userId).subscribe({
      next: (res) => {
        this.isReferralSummaryLoading = false;
        if (res?.success && res?.data) {
          this.referralSummary = res.data as ReferralSummary;
          this.referralSummaryLoadedForUser = userId;
          const available = Math.max(0, this.referralSummary?.freeSlotsAvailable || 0);
          if (available > 0) {
            this.referralRewardSlotsToUse = Math.min(Math.max(1, this.referralRewardSlotsToUse || 1), available);
          } else {
            this.referralRewardSlotsToUse = 1;
          }
          this.updateReferralRewardDiscount();
          return;
        }
        this.referralSummaryError = String(res?.message || "Unable to load referral details");
      },
      error: () => {
        this.isReferralSummaryLoading = false;
        this.referralSummaryError = "Unable to load referral details right now";
      },
    });
  }

  onReferralCodeInputChange(value: string) {
    this.referralCodeInput = String(value || "").toUpperCase().replace(/\s+/g, "");
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    this.referralDiscountAmount = 0;
  }

  applyReferralCode() {
    if (!this.ensureUserLoggedInForReferral() || !this.selectedBatch) {
      return;
    }

    const code = this.referralCodeInput.trim().toUpperCase();
    if (!code) {
      this.referralValidationError = "Enter a referral code to apply.";
      return;
    }

    this.isReferralValidating = true;
    this.referralValidationError = "";
    this.referralValidationSuccess = "";

    const payload = {
      referralCode: code,
      userId: this.tokenService.getUserId(),
      participants: this.booking.participants,
    };

    this.bookingService.validateReferralCode(payload).subscribe({
      next: (res) => {
        this.isReferralValidating = false;
        if (!res?.success || !res?.data?.valid) {
          const message = String(res?.data?.message || res?.message || "Invalid referral code");
          this.handleReferralCodeFailure(message);
          return;
        }

        this.referralDiscountAmount = Number(res?.data?.discountAmount || 0);
        this.referralValidationSuccess = this.referralDiscountAmount > 0
          ? `Referral applied. You save ₹${this.referralDiscountAmount.toFixed(0)}`
          : String(res?.data?.message || "Referral applied");
        this.referralValidationError = "";
        if (this.useReferralReward) {
          this.useReferralReward = false;
          this.referralRewardDiscountAmount = 0;
        }
        this.updateReferralRewardDiscount();
      },
      error: () => {
        this.isReferralValidating = false;
        this.handleReferralCodeFailure("Unable to validate referral code right now");
      }
    });
  }

  clearReferralCode(silent: boolean = false) {
    this.referralCodeInput = "";
    this.referralDiscountAmount = 0;
    this.referralValidationSuccess = "";
    if (!silent) {
      this.referralValidationError = "";
    }
    this.updateReferralRewardDiscount();
  }

  private handleReferralCodeFailure(message: string) {
    this.referralDiscountAmount = 0;
    this.referralValidationSuccess = "";
    this.referralValidationError = message;
    this.updateReferralRewardDiscount();
  }

  onReferralRewardToggle() {
    if (!this.useReferralReward) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    if (!this.ensureUserLoggedInForReferral()) {
      this.useReferralReward = false;
      return;
    }
    if (!this.canUseReferralReward) {
      this.useReferralReward = false;
      if (this.referralDiscountAmount > 0) {
        this.showTransientMessage("error", "Remove referral code to use a free slot.", 2500);
      }
      return;
    }
    if (this.referralDiscountAmount > 0) {
      this.clearReferralCode(true);
    }
    this.updateReferralRewardDiscount();
  }

  adjustReferralRewardSlots(delta: number) {
    if (!this.canUseReferralReward) return;
    this.setReferralRewardSlots(this.referralRewardSlotsToUse + delta);
  }

  setReferralRewardSlots(value: number) {
    if (!this.referralSummary) return;
    const available = Math.max(0, this.referralSummary.freeSlotsAvailable || 0);
    if (available === 0) {
      this.referralRewardSlotsToUse = 1;
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const normalized = Math.max(1, Math.min(available, Number(value) || 1));
    this.referralRewardSlotsToUse = normalized;
    this.updateReferralRewardDiscount();
  }

  private updateReferralRewardDiscount() {
    if (!this.useReferralReward || !this.referralSummary || !this.selectedBatch || !this.canUseReferralReward) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const unitPrice = Number(this.selectedBatch?.price || 0);
    if (!unitPrice) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const available = Math.max(0, this.referralSummary.freeSlotsAvailable || 0);
    this.referralRewardSlotsToUse = Math.min(Math.max(1, this.referralRewardSlotsToUse || 1), available || 1);
    const rawDiscount = unitPrice * this.referralRewardSlotsToUse;
    const remaining = Math.max(this.totalPrice - this.couponDiscountAmount - this.referralDiscountAmount, 0);
    this.referralRewardDiscountAmount = Math.min(rawDiscount, remaining);
  }

  async copyReferralCode(code?: string) {
    const value = String(code || this.referralCodeForShare || "").trim();
    if (!value) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("input");
        input.value = value;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      this.showTransientMessage("success", `Referral code ${value} copied`, 1800);
    } catch {
      this.showTransientMessage("error", "Unable to copy referral code", 2000);
    }
  }

validateId(participant: Participant) {
  participant.idError = '';
  if (!participant.idType || !participant.idNumber) return;

  const raw = participant.idNumber.replace(/\s/g, '');
  const idType = this.normalizeIdType(participant.idType);

  switch (idType) {
    case 'Aadhar':
      if (!/^\d{12}$/.test(raw))
        participant.idError = 'Aadhaar must be exactly 12 digits';
      break;

    case 'PAN':
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(raw))
        participant.idError = 'Invalid PAN format (e.g. ABCDE1234F)';
      break;

    case 'Passport':
      if (!/^[A-Z][0-9]{7}$/.test(raw))
        participant.idError = 'Invalid Passport format (e.g. A1234567)';
      break;

    case 'Driving License':
      if (raw.length < 10)
        participant.idError = 'Driving License must be at least 10 characters';
      break;

    case 'Voter ID':
      if (!/^[A-Z]{3}[0-9]{7}$/.test(raw))
        participant.idError = 'Invalid Voter ID format (e.g. ABC1234567)';
      break;
  }
}

formatIdInput(participant: Participant) {
  if (!participant.idType) return;
  let value = participant.idNumber || '';
  const idType = this.normalizeIdType(participant.idType);

  switch (idType) {
    case 'Aadhar':
      // Keep only digits, max 12, format as XXXX XXXX XXXX
      const digits = value.replace(/\D/g, '').substring(0, 12);
      participant.idNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
      break;

    case 'PAN':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;

    case 'Passport':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
      break;

    case 'Driving License':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 15);
      break;

    case 'Voter ID':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;
  }

  this.validateId(participant);
}

getIdMaxLength(idType: string): number {
  switch (this.normalizeIdType(idType)) {
    case 'Aadhar':          return 14; // 12 digits + 2 spaces
    case 'PAN':             return 10;
    case 'Passport':        return 8;
    case 'Driving License': return 15;
    case 'Voter ID':        return 10;
    default:                return 20;
  }
}

private normalizeIdType(idType: string): string {
  const value = (idType || '').trim().toLowerCase();

  if (value === 'aadhar' || value === 'aadhaar') return 'Aadhar';
  if (value === 'pan' || value === 'pan card') return 'PAN';
  if (value === 'passport') return 'Passport';
  if (value === 'driving license' || value === 'driving licence') return 'Driving License';
  if (value === 'voter id' || value === 'voterid') return 'Voter ID';

  return idType;
}

validateAge(participant: Participant) {

  participant.ageError = '';

  if (participant.age === null) return;

  if (participant.age < 12) {
    participant.ageError = 'Minimum age is 12 years';
  }
}


}
