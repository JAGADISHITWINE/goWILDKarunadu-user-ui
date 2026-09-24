import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Location } from '@angular/common';
import { MyBookings } from "./my-bookings";
import { AuthModalService } from "../auth/auth-modal.service";
import { TokenService } from 'src/app/core/token.service';
import { PublicRouteIdService } from '../core/public-route-id.service';
import { environment } from 'src/environments/environment';
import { MediaService } from '../core/media.service';
import { TrekOperationsService, TaxInvoiceData, SummitCertificateData, CarpoolRide } from '../core/trek-operations.service';
import { SiteSettingsService } from '../core/site-settings.service';

interface Booking {
  id: string;
  booking_reference: any;
  trek_name: string;
  location: string;
  start_date: string;
  end_date: string;
  participants: number;
  total_amount: number;
  amount_paid: number;
  balance_due: number;
  booking_status: "pending" | "confirmed" | "cancelled" | "completed";
  payment_status: "pending" | "partial" | "paid" | "refunded";
  created_at: string;
  cover_image: string;
  addons: any[];
  can_cancel: boolean;
  days_until_trek: number;
  user_rating?: number | null;
  user_review?: string | null;
  rated_at?: string | null;
  admin_reply?: string | null;
  admin_replied_at?: string | null;
  participants_details?: any[];
  user_id?: string;
  customer_name?: string;
  customer_phone?: string;
  customer_email?: string;
}

@Component({
  selector: "app-my-bookings",
  templateUrl: "./my-bookings.component.html",
  styleUrls: ["./my-bookings.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, FormsModule],
})
export class MyBookingsComponent implements OnInit {
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  readonly fallbackImage = "assets/default-trek.jpg";
  activeTab: "upcoming" | "past" | "cancelled" | "invoices" = "upcoming";

  allBookings: Booking[] = [];
  upcomingBookings: Booking[] = [];
  pastBookings: Booking[] = [];
  cancelledBookings: Booking[] = [];
  booking_reference: any;

  isLoading = false;
  errorMessage = "";

  // Stats
  totalBookings = 0;
  totalSpent = 0;
  upcomingTrips = 0;
  completedTrips = 0;
  userId: string | null = null;
  ratingModalOpen = false;
  isSubmittingRating = false;
  ratingErrorMessage = "";
  selectedBookingForRating: Booking | null = null;
  selectedRating = 0;
  selectedReview = "";

  // Digital Basecamp Trek Pass
  showPassModal = false;
  selectedPassBooking: Booking | null = null;

  // GST Tax Invoice Modal
  showInvoiceModal = false;
  selectedInvoiceData: TaxInvoiceData | null = null;
  isLoadingInvoice = false;

  // Summit Completion Certificate Modal
  showCertModal = false;
  selectedCertData: SummitCertificateData | null = null;
  isLoadingCert = false;

  // Settle Remainder Modal
  showRemainderModal = false;
  selectedRemainderBooking: Booking | null = null;
  isSettlingRemainder = false;
  remainderPaymentSuccess = false;

  // Basecamp Carpool Hub Modal
  showCarpoolModal = false;
  carpoolList: CarpoolRide[] = [];
  isLoadingCarpools = false;
  newRideOffer: Partial<CarpoolRide> = {
    departure_city: 'Bengaluru',
    departure_location: 'Silk Board / Koramangala',
    available_seats: 3,
    price_per_seat: 650,
    vehicle_model: 'SUV / Sedan',
    notes: 'Leaving Friday night. 2 backpack slots.'
  };

  constructor(
    private bookingService: MyBookings,
    private authModal: AuthModalService,
    private router: Router,
    private tokenService: TokenService,
    private location: Location,
    private publicRouteId: PublicRouteIdService,
    private media: MediaService,
    private operationsService: TrekOperationsService,
    public siteSettings: SiteSettingsService
  ) { }

  get brandName(): string {
    return this.siteSettings?.currentSettings?.brandName || 'goWILD Karunadu';
  }

  get hasBookings(): boolean {
    return this.allBookings.length > 0 || this.upcomingBookings.length > 0 || this.pastBookings.length > 0 || this.cancelledBookings.length > 0;
  }

  get nextTrip(): Booking | null {
    return this.upcomingBookings[0] || null;
  }

  get cancellationRate(): number {
    const total = this.allBookings.length;
    if (total <= 0) return 0;
    return Math.round((this.cancelledBookings.length / total) * 100);
  }

  get sectionTitle(): string {
    return `${this.activeTab.charAt(0).toUpperCase()}${this.activeTab.slice(1)} Trips`;
  }

  get sectionCountLabel(): string {
    return 'bookings';
  }

  ngOnInit() {
    // Use TokenService to read and decode the token in a single place
    try {
      this.userId = this.tokenService.getUserId();
      console.log("Decoded userId from token:", this.userId);
    } catch (e) {
      this.userId = null;
    }
    if (!this.userId) {
      this.errorMessage = "Please log in to view your bookings.";
      return;
    }
    this.loadBookings();
  }

  /**
   * Load all user bookings
   */
  loadBookings() {
    this.isLoading = true;
    this.errorMessage = "";

    this.bookingService.getMyBookings(this.userId).subscribe((response: any) => {
      if (response.success == true) {
        this.allBookings = response.data.bookings || [];
        this.categorizeBookings(this.allBookings);
        this.calculateStats(this.allBookings);
      } else {
        this.errorMessage = response?.message || "Failed to load bookings.";
      }
      this.isLoading = false;
    }, () => {
      this.errorMessage = "Failed to load bookings.";
      this.isLoading = false;
    });
  }

  /**
   * Categorize bookings into upcoming, past, and cancelled
   */
  categorizeBookings(bookings: Booking[]) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.upcomingBookings = bookings.filter((b) => {
      const trekDate = new Date(b.start_date);
      return (
        b.booking_status !== "cancelled" &&
        b.booking_status !== "completed" &&
        trekDate >= today
      );
    });

    this.pastBookings = bookings.filter((b) => {
      const trekDate = new Date(b.start_date);
      return (
        b.booking_status === "completed" ||
        (b.booking_status !== "cancelled" && trekDate < today)
      );
    });

    this.cancelledBookings = bookings.filter(
      (b) => b.booking_status === "cancelled",
    );

    // Sort by date
    this.upcomingBookings.sort(
      (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
    );

    this.pastBookings.sort(
      (a, b) =>
        new Date(b.start_date).getTime() - new Date(a.start_date).getTime(),
    );
  }

  /**
   * Calculate statistics
   */
  calculateStats(bookings: Booking[]) {
    this.totalBookings = bookings.filter(
      (b) => b.booking_status !== "cancelled",
    ).length;

    this.totalSpent = bookings
      .filter((b) => b.booking_status !== "cancelled")
      .reduce((sum, b) => sum + parseFloat(b.total_amount.toString()), 0);

    this.upcomingTrips = this.upcomingBookings.length;
    this.completedTrips = bookings.filter(
      (b) => b.booking_status === "completed",
    ).length;
  }

  /**
   * Get current bookings based on active tab
   */
  get currentBookings(): Booking[] {
    switch (this.activeTab) {
      case "upcoming":
        return this.upcomingBookings;
      case "past":
        return this.pastBookings;
      case "cancelled":
        return this.cancelledBookings;
      default:
        return [];
    }
  }

  /**
   * Switch tab
   */
  switchTab(tab: "upcoming" | "past" | "cancelled") {
    this.activeTab = tab;
  }

  viewBookingDetails(booking: any) {
    const rawId = String(booking?.public_ref || booking?.trek_uuid || booking?.trek_id || '');
    const publicRef = this.publicRouteId.encode(rawId) || rawId;
    this.router.navigate(['/tour-details', publicRef]);
  }


  downloadReceipt(booking: any) {
    const bookingId = booking.id;
    this.booking_reference = booking.booking_reference
    this.bookingService.downloadReceipt(bookingId, this.userId).subscribe({
      next: (response: any) => {
        const blob = new Blob([response.body], {
          type: 'application/pdf'
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = `Receipt_${this.booking_reference}.pdf`; // Default fallback

        if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }

        link.download = filename;
        link.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Download failed:', error);
      }
    });
  }

  /**
   * Get status badge class
   */
  getStatusClass(status: string): string {
    switch (status) {
      case "confirmed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "cancelled":
        return "badge-danger";
      case "completed":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }

  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status: string): string {
    switch (status) {
      case "paid":
        return "badge-success";
      case "partial":
        return "badge-info";
      case "pending":
        return "badge-warning";
      case "refunded":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }

  /**
   * Format date
   */
  formatDate(dateString?: string | null): string {
    if (!dateString) return '--';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '--';
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  /**
   * Calculate days until trek
   */
  getDaysUntilTrek(startDate: string): number {
    const today = new Date();
    const trek = new Date(startDate);
    const diffTime = trek.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Check if booking can be cancelled
   */
  canCancel(booking: Booking): boolean {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    return (
      (booking.booking_status === "pending" ||
        booking.booking_status === "confirmed") &&
      daysUntil >= 7
    );
  }

  /**
   * Get cancellation fee message
   */
  getCancellationFeeMessage(booking: Booking): string {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);

    if (daysUntil >= 30) {
      return "100% refund (No cancellation fee)";
    } else if (daysUntil >= 15) {
      return "75% refund (25% cancellation fee)";
    } else if (daysUntil >= 7) {
      return "50% refund (50% cancellation fee)";
    } else {
      return "No refund (Cannot cancel within 7 days)";
    }
  }

  async openCancelModal(booking: any) {
    // attach userId to the booking payload so the cancel modal and service have context
    const payload = { ...booking, userId: this.userId };
    console.log("Opening cancel modal with payload:", payload);
    try {
      const result: any = await this.authModal.openCancle(payload);
      // If modal resolved with cancellation, refresh bookings (keeps UI in sync)
      if (result?.cancelled) {
        this.loadBookings();
      }
    } catch (e) {
      // modal dismissed/cancelled — no action
    }
  }

  hasUserRated(booking: Booking): boolean {
    const rating = Number(booking.user_rating || 0);
    return rating >= 1 && rating <= 5;
  }

  canRateBooking(booking: Booking): boolean {
    if (booking.booking_status !== "completed") return false;
    const endDate = new Date(booking.end_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return endDate <= today;
  }

  openRatingModal(booking: Booking) {
    this.selectedBookingForRating = booking;
    this.selectedRating = Number(booking.user_rating || 0);
    this.selectedReview = booking.user_review || "";
    this.ratingErrorMessage = "";
    this.ratingModalOpen = true;
  }

  closeRatingModal() {
    if (this.isSubmittingRating) return;
    this.ratingModalOpen = false;
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
    this.ratingErrorMessage = "";
  }

  setRating(stars: number) {
    this.selectedRating = stars;
  }

  submitRating() {
    if (!this.selectedBookingForRating) return;
    if (this.selectedRating < 1 || this.selectedRating > 5) {
      this.ratingErrorMessage = "Please select a star rating.";
      return;
    }

    this.isSubmittingRating = true;
    this.ratingErrorMessage = "";

    const payload = {
      rating: this.selectedRating,
      review: this.selectedReview?.trim() || "",
    };

    this.bookingService
      .submitTrekRating(this.selectedBookingForRating.id, this.userId, payload)
      .subscribe({
        next: () => {
          if (!this.selectedBookingForRating) return;
          this.selectedBookingForRating.user_rating = this.selectedRating;
          this.selectedBookingForRating.user_review = payload.review;
          this.selectedBookingForRating.rated_at = new Date().toISOString();
          this.isSubmittingRating = false;
          this.closeRatingModal();
          this.loadBookings();
        },
        error: () => {
          this.isSubmittingRating = false;
          this.ratingErrorMessage = "Could not submit rating. Please try again.";
        },
      });
  }


  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  resolveImageUrl(imagePath: string | null | undefined): string {
    return this.media.resolve(imagePath || null);
  }

  isInvoiceSettled(booking: Booking): boolean {
    return booking.payment_status === "paid" || Number(booking.balance_due || 0) <= 0;
  }

  getInvoiceStatusLabel(booking: Booking): string {
    if (booking.payment_status === "refunded") return "Refunded";
    if (this.isInvoiceSettled(booking)) return "Paid";
    if (booking.payment_status === "partial") return "Partially Paid";
    return "Payment Due";
  }

  // ──────────────── GST Tax Invoice ────────────────
  openTaxInvoice(booking: Booking) {
    this.isLoadingInvoice = true;
    this.showInvoiceModal = true;
    this.operationsService.getTaxInvoice(booking.id).subscribe({
      next: (invoice) => {
        this.selectedInvoiceData = invoice;
        this.isLoadingInvoice = false;
      },
      error: () => {
        this.isLoadingInvoice = false;
      }
    });
  }

  closeTaxInvoice() {
    this.showInvoiceModal = false;
    this.selectedInvoiceData = null;
  }

  printInvoice() {
    if (!this.selectedInvoiceData) {
      window.print();
      return;
    }
    const inv = this.selectedInvoiceData;
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      window.print();
      return;
    }

    const itemsHtml = (inv.lineItems || []).map(item => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0;">${item.description}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">${item.sac}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">₹${Number(item.amount).toFixed(2)}</td>
      </tr>
    `).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Tax Invoice - ${inv.invoiceNumber}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f766e; padding-bottom: 16px; margin-bottom: 20px; }
          .brand { font-size: 24px; font-weight: 800; color: #0f766e; letter-spacing: 1px; }
          .sub { font-size: 13px; color: #64748b; }
          .badge { background: #ecfdf5; color: #047857; font-weight: 700; padding: 4px 10px; border-radius: 4px; font-size: 12px; display: inline-block; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 13px; }
          .box strong { color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
          th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
          .total-row { background: #ecfdf5; color: #065f46; font-size: 15px; font-weight: 800; }
          .total-row td { padding: 12px; border-top: 2px solid #059669; }
          .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">${inv.company.brandName || this.brandName}</div>
            <div class="sub">${inv.company.legalName} · Eco-Tourism Operator</div>
            <div class="sub">GSTIN: ${inv.company.gstin} | License: ${inv.company.kedbLicense}</div>
          </div>
          <div style="text-align: right;">
            <div class="badge">TAX INVOICE</div>
            <div style="font-size: 16px; font-weight: 700; margin-top: 6px;">#${inv.invoiceNumber}</div>
            <div style="font-size: 12px; color: #64748b;">Date: ${new Date(inv.invoiceDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div style="font-weight: 700; color: #64748b; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">Billed To</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a;">${inv.customer.name}</div>
            <div>${inv.customer.email}</div>
            <div>${inv.customer.phone}</div>
          </div>
          <div class="box">
            <div style="font-weight: 700; color: #64748b; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">Operator Details</div>
            <div><strong>Registered Address:</strong> ${inv.company.address}</div>
            <div><strong>Service Category:</strong> SAC 998555 (Eco-Tour Operations)</div>
            <div><strong>Payment Mode:</strong> Online Clearance (Settled)</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Service / Item Description</th>
              <th>SAC Code</th>
              <th style="text-align: right;">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
            <tr style="background: #f8fafc; font-weight: 600;">
              <td colspan="2" style="padding: 10px 12px;">Subtotal</td>
              <td style="padding: 10px 12px; text-align: right;">₹${Number(inv.financials.subtotal).toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px 12px;">CGST (2.5%) + SGST (2.5%)</td>
              <td style="padding: 10px 12px; text-align: right;">₹${Number(inv.financials.totalTax).toFixed(2)}</td>
            </tr>
            <tr class="total-row">
              <td colspan="2">Total Invoice Value (INR)</td>
              <td style="text-align: right;">₹${Number(inv.financials.totalAmount).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div class="footer">
          This is a computer-generated tax invoice issued under Karnataka GST & Eco-Tourism Development Board (KEDB) guidelines. No physical signature required.
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }

  // ──────────────── Digital Summit Certificate ────────────────
  openSummitCertificate(booking: Booking) {
    const tName = booking.trek_name || 'Western Ghats Summit';
    let elevation = '1,894 MASL';
    if (tName.includes('Kudremukha')) elevation = '1,894m (6,214 ft)';
    else if (tName.includes('Kumara')) elevation = '1,712m (5,617 ft)';
    else if (tName.includes('Mullayanagiri')) elevation = '1,930m (6,332 ft)';
    else if (tName.includes('Tadiandamol')) elevation = '1,748m (5,735 ft)';
    else if (tName.includes('Netravati')) elevation = '1,520m (4,986 ft)';

    this.selectedCertData = {
      certificateId: `GWK-CERT-2026-${String(booking.id).slice(0, 8).toUpperCase()}`,
      recipientName: booking.customer_name || 'Adventure Trekker',
      trekName: tName,
      location: booking.location || 'Western Ghats, Karnataka',
      elevation: elevation,
      completionDate: booking.end_date || booking.start_date || new Date().toISOString(),
      bookingReference: booking.booking_reference,
      leadTrekMaster: 'Capt. Raghu Varma (IMF Certified Lead)',
      verificationUrl: `https://gowildkarunadu.in/verify/cert/${String(booking.id).slice(0, 8)}`,
      badgeTitle: 'Certified Western Ghats Explorer',
      sealText: 'GO WILD KARUNADU OFFICIAL EXPEDITION SEAL'
    };

    this.isLoadingCert = true;
    this.showCertModal = true;
    this.operationsService.getSummitCertificate(booking.id).subscribe({
      next: (cert) => {
        if (cert) this.selectedCertData = cert;
        this.isLoadingCert = false;
      },
      error: () => {
        this.isLoadingCert = false;
      }
    });
  }

  closeSummitCertificate() {
    this.showCertModal = false;
    this.selectedCertData = null;
  }

  printSummitCertificate() {
    if (!this.selectedCertData) {
      window.print();
      return;
    }
    const cert = this.selectedCertData;
    const printWindow = window.open('', '_blank', 'width=960,height=750');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Official Summit Certificate - ${cert.recipientName}</title>
        <style>
          @page { size: A4 landscape; margin: 8mm; }
          * { box-sizing: border-box; }
          body { font-family: 'Georgia', serif; text-align: center; color: #1e293b; background: #fffcf2; margin: 0; padding: 20px; }
          .cert-outer { border: 4px solid #b45309; padding: 6px; background: #ffffff; }
          .cert-container { border: 2px dashed #d97706; padding: 24px 30px; background: linear-gradient(180deg, #ffffff 0%, #fffdfa 100%); }
          .icon { font-size: 36px; margin-bottom: 4px; }
          .title { font-size: 26px; font-weight: 900; color: #78350f; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 2px; }
          .org { font-size: 11px; color: #92400e; text-transform: uppercase; letter-spacing: 1.5px; font-family: sans-serif; font-weight: 700; margin-bottom: 16px; }
          .presented { font-size: 14px; color: #78350f; font-style: italic; margin-bottom: 4px; }
          .name { font-size: 28px; font-weight: 900; color: #0f172a; margin: 6px 0; border-bottom: 2px solid #d97706; display: inline-block; padding: 0 20px 4px; }
          .desc { font-size: 14px; color: #334155; max-width: 650px; margin: 12px auto; line-height: 1.5; }
          .trek-highlight { color: #0f3d35; font-weight: 800; font-size: 18px; }
          .meta { display: flex; justify-content: space-around; margin-top: 24px; padding-top: 14px; border-top: 1px dashed #d97706; font-family: sans-serif; }
          .meta-item { text-align: center; }
          .meta-label { font-size: 10px; color: #92400e; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }
          .meta-val { font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 2px; }
          .seal-wrap { margin-top: 10px; font-size: 10px; color: #64748b; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <div class="cert-outer">
          <div class="cert-container">
            <div class="icon" style="color: #15803d; font-size: 28px; letter-spacing: 4px;">GO-WILD KARUNADU</div>
            <div class="title">Summit Completion Certificate</div>
            <div class="org">Karnataka Eco-Tourism & Wilderness Explorer Council</div>
            <div class="presented">This certificate is proudly awarded to</div>
            <div class="name">${cert.recipientName}</div>
            <div class="desc">
              for successfully conquering the high-altitude wilderness trail of<br>
              <span class="trek-highlight">${cert.trekName}</span><br>
              at an official peak elevation of <strong>${cert.elevation}</strong>.
            </div>
            <div class="meta">
              <div class="meta-item">
                <div class="meta-label">Certificate ID</div>
                <div class="meta-val">${cert.certificateId}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Expedition Date</div>
                <div class="meta-val">${new Date(cert.completionDate || Date.now()).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Expedition Leader</div>
                <div class="meta-val">${cert.leadTrekMaster}</div>
              </div>
            </div>
            <div class="seal-wrap">
              Verified by ${this.brandName} Expedition Authority · Authentic Electronic Achievement Record
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }

  shareCertificate(cert: SummitCertificateData | null) {
    if (!cert) return;
    const text = `I proudly completed the ${cert.trekName} (${cert.elevation}) with @${this.brandName}! Check out my official Summit Certificate: ${cert.certificateId}`;
    if (navigator.share) {
      navigator.share({
        title: `${cert.trekName} Summit Certificate`,
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('Certificate achievement details copied to clipboard for sharing!');
    }
  }

  // ──────────────── Remainder 70% Payment ────────────────
  getBalanceDue(booking: Booking | null): number {
    if (!booking) return 0;
    if (booking.payment_status === 'paid' || booking.booking_status === 'cancelled') return 0;
    const balance = parseFloat(String(booking.balance_due || 0));
    if (balance > 0) return balance;
    if (booking.payment_status === 'partial') {
      const total = parseFloat(String(booking.total_amount || 0));
      const paid = parseFloat(String(booking.amount_paid || 0));
      return Math.max(0, total - paid);
    }
    return 0;
  }

  hasPendingBalance(booking: Booking): boolean {
    return this.getBalanceDue(booking) > 0 && booking.booking_status !== 'cancelled';
  }

  openRemainderModal(booking: Booking) {
    this.selectedRemainderBooking = booking;
    this.remainderPaymentSuccess = false;
    this.showRemainderModal = true;
  }

  closeRemainderModal() {
    this.showRemainderModal = false;
    this.selectedRemainderBooking = null;
  }

  settleRemainderPayment() {
    if (!this.selectedRemainderBooking) return;
    this.isSettlingRemainder = true;
    const pendingAmount = this.getBalanceDue(this.selectedRemainderBooking);

    this.operationsService.payRemainder(this.selectedRemainderBooking.id, {
      amount: pendingAmount,
      paymentMethod: 'Instant UPI / Card Payment',
      transactionId: 'REM-ONLINE-' + Date.now()
    }).subscribe({
      next: () => {
        this.isSettlingRemainder = false;
        this.remainderPaymentSuccess = true;
        if (this.selectedRemainderBooking) {
          this.selectedRemainderBooking.balance_due = 0;
          this.selectedRemainderBooking.amount_paid = this.selectedRemainderBooking.total_amount;
          this.selectedRemainderBooking.payment_status = 'paid';
          this.selectedRemainderBooking.booking_status = 'confirmed';
        }
        setTimeout(() => {
          this.closeRemainderModal();
          this.loadBookings();
        }, 1600);
      },
      error: (err) => {
        this.isSettlingRemainder = false;
        console.error('Pay remainder error:', err);
        alert(err?.error?.message || 'Could not process remainder payment. Please try again.');
      }
    });
  }

  // ──────────────── Basecamp Carpool Hub ────────────────
  selectedCarpoolTrekName = '';
  carpoolFilterType: 'all' | 'trek' = 'all';
  isPublishingRide = false;
  carpoolPublishSuccess = false;
  carpoolErrorMessage = '';

  openCarpoolHub(trekName?: string) {
    this.selectedCarpoolTrekName = trekName || '';
    this.carpoolFilterType = trekName ? 'trek' : 'all';
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
    this.showCarpoolModal = true;
    const currentBooking = this.allBookings.find(b => b.trek_name === trekName) || this.allBookings[0];
    if (trekName) {
      this.newRideOffer.trek_name = trekName;
    }
    if (!this.newRideOffer.departure_location) {
      this.newRideOffer.departure_location = 'Silk Board & Marathahalli';
    }
    if (!this.newRideOffer.user_name && currentBooking?.customer_name) {
      this.newRideOffer.user_name = currentBooking.customer_name;
    }
    if (!this.newRideOffer.user_phone && currentBooking?.customer_phone) {
      this.newRideOffer.user_phone = currentBooking.customer_phone;
    }
    this.fetchCarpoolRides();
  }

  setPickupLocation(loc: string) {
    this.newRideOffer.departure_location = loc;
  }

  fetchCarpoolRides() {
    this.isLoadingCarpools = true;
    const filter = (this.carpoolFilterType === 'trek' && this.selectedCarpoolTrekName)
      ? { trekName: this.selectedCarpoolTrekName }
      : {};

    this.operationsService.getCarpools(filter).subscribe({
      next: (rides) => {
        if (rides.length === 0 && this.carpoolFilterType === 'trek') {
          // If no rides specifically for this trek, fetch all community rides so the user has options
          this.operationsService.getCarpools().subscribe({
            next: (allRides) => {
              this.carpoolList = allRides;
              this.isLoadingCarpools = false;
            },
            error: () => { this.isLoadingCarpools = false; }
          });
        } else {
          this.carpoolList = rides;
          this.isLoadingCarpools = false;
        }
      },
      error: () => {
        this.isLoadingCarpools = false;
      }
    });
  }

  toggleCarpoolFilter(type: 'all' | 'trek') {
    this.carpoolFilterType = type;
    this.fetchCarpoolRides();
  }

  closeCarpoolHub() {
    this.showCarpoolModal = false;
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
  }

  publishCarpoolRide() {
    this.isPublishingRide = true;
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
    const currentBooking = this.allBookings.find(b => b.trek_name === this.selectedCarpoolTrekName) || this.allBookings[0];
    const payload = {
      userId: this.userId || currentBooking?.user_id || 'community-trekker',
      userName: this.newRideOffer.user_name || currentBooking?.customer_name || 'Solo Trekker',
      userPhone: this.newRideOffer.user_phone || currentBooking?.customer_phone || '+91 98860 12345',
      trekName: this.newRideOffer.trek_name || this.selectedCarpoolTrekName || 'Brahmagiri Monsoon Trek',
      departureCity: this.newRideOffer.departure_city || 'Bengaluru',
      departureLocation: this.newRideOffer.departure_location || 'Silk Board & Marathahalli',
      availableSeats: Number(this.newRideOffer.available_seats) || 3,
      pricePerSeat: Number(this.newRideOffer.price_per_seat) || 600,
      vehicleModel: this.newRideOffer.vehicle_model || 'Car / SUV',
      notes: this.newRideOffer.notes || 'Leaving Friday evening.'
    };

    this.operationsService.createCarpoolOffer(payload).subscribe({
      next: () => {
        this.isPublishingRide = false;
        this.carpoolPublishSuccess = true;
        this.carpoolErrorMessage = '';
        this.fetchCarpoolRides();
        this.newRideOffer.notes = '';
        setTimeout(() => {
          this.closeCarpoolHub();
        }, 1200);
      },
      error: (err) => {
        this.isPublishingRide = false;
        console.error('Carpool publish error:', err);
        this.carpoolErrorMessage = err?.error?.message || 'Could not publish carpool offer. Please try again.';
      }
    });
  }

  getWhatsAppCarpoolLink(ride: CarpoolRide): string {
    const text = `Hi ${ride.user_name}, I saw your carpool offer on ${this.brandName} for ${ride.trek_name} from ${ride.departure_city} (${ride.departure_location}). Can I join you?`;
    const cleanPhone = String(ride.user_phone || '').replace(/\D/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  }

  // ──────────────── Digital Basecamp Trek Pass ────────────────
  openTrekPass(booking: Booking) {
    this.selectedPassBooking = booking;
    this.showPassModal = true;
  }

  closeTrekPass() {
    this.showPassModal = false;
    this.selectedPassBooking = null;
  }

  printTrekPass() {
    if (!this.selectedPassBooking) {
      window.print();
      return;
    }
    const b = this.selectedPassBooking;
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      window.print();
      return;
    }

    const rosterRows = (b.participants_details || []).map((p: any, idx: number) => `
      <tr>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${idx + 1}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;"><strong>${p.name || p.full_name}</strong></td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.age || '--'} / ${p.gender || '--'}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;"><span style="background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${p.blood_group || 'O+'}</span></td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.id_type || 'Aadhaar'}: ${p.id_number || 'Verified'}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.medical_condition || 'Fit to Trek'}</td>
      </tr>
    `).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Expedition Pass - ${b.booking_reference}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; line-height: 1.4; }
          .header { background: #0b2b26; color: #fff; padding: 18px 24px; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center; }
          .org { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #86efac; }
          .title { font-size: 20px; font-weight: 800; margin: 2px 0; }
          .qr-section { display: flex; gap: 20px; background: #f8fafc; border: 1px dashed #cbd5e1; padding: 16px; align-items: center; margin: 16px 0; border-radius: 8px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
          .field { background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 12px; border-radius: 6px; font-size: 13px; }
          .field-label { font-size: 10px; color: #64748b; text-transform: uppercase; font-weight: 700; margin-bottom: 2px; }
          .field-val { font-size: 14px; font-weight: 700; color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 12px; border: 1px solid #e2e8f0; }
          th { background: #f1f5f9; text-align: left; padding: 8px 10px; font-weight: 700; }
          .guidelines { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px; border-radius: 6px; font-size: 12px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="org">Karnataka Eco-Tourism Development Board (KEDB)</div>
            <div class="title">OFFICIAL BASECAMP TREK PASS</div>
            <div style="font-size: 12px; opacity: 0.85;">Pass Ref: ${b.booking_reference}</div>
          </div>
          <div style="text-align: right;">
            <div style="background: #22c55e; color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">
              ${b.payment_status === 'paid' ? 'PERMIT CLEARED' : 'PAYMENT PENDING'}
            </div>
          </div>
        </div>

        <div class="qr-section">
          <img src="${this.getQrCodeUrl(b)}" width="110" height="110" style="background:#fff; padding:4px; border-radius:6px; border:1px solid #e2e8f0;" />
          <div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a;">Digital Checkpoint Verification QR</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Present this pass upon arrival at the Forest Department basecamp checkpost.</div>
            <div style="font-family: monospace; font-size: 12px; font-weight: 700; color: #0f766e; margin-top: 6px;">AUTH-HASH: GWK-${(b.id || '').slice(0, 8).toUpperCase()}</div>
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <div class="field-label">Trek Expedition</div>
            <div class="field-val">${b.trek_name}</div>
          </div>
          <div class="field">
            <div class="field-label">Expedition Dates</div>
            <div class="field-val">${this.formatDate(b.start_date)} – ${this.formatDate(b.end_date)}</div>
          </div>
          <div class="field">
            <div class="field-label">Lead Booker</div>
            <div class="field-val">${b.customer_name || 'Primary Trekker'}</div>
          </div>
          <div class="field">
            <div class="field-label">Permitted Group Size</div>
            <div class="field-val">${b.participants} Trekker${b.participants > 1 ? 's' : ''}</div>
          </div>
          <div class="field">
            <div class="field-label">Reporting Basecamp</div>
            <div class="field-val">${b.location}</div>
          </div>
          <div class="field">
            <div class="field-label">Reporting Time</div>
            <div class="field-val">05:30 AM IST (Ascent Day)</div>
          </div>
        </div>

        ${b.participants_details?.length ? `
          <div style="margin-top: 14px;">
            <div style="font-weight: 700; font-size: 13px; text-transform: uppercase; color: #334155;">Authorized Expedition Roster</div>
            <table>
              <thead>
                <tr>
                  <th style="text-align: center;">#</th>
                  <th>Name</th>
                  <th>Age/Sex</th>
                  <th style="text-align: center;">Blood</th>
                  <th>Govt ID</th>
                  <th>Medical Notes</th>
                </tr>
              </thead>
              <tbody>
                ${rosterRows}
              </tbody>
            </table>
          </div>
        ` : ''}

        <div class="guidelines">
          <strong>Mandatory Wilderness Regulations:</strong><br>
          1. Original Govt ID document required for each trekker at checkpost entry.<br>
          2. Single-use plastic bottles, alcohol, and campfires strictly prohibited.<br>
          3. Follow instructions of the designated Certified Wilderness Trek Master at all times.
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }

  getQrCodeUrl(booking: Booking | null): string {
    if (!booking) return '';
    const payload = JSON.stringify({
      bookingId: booking.id,
      ref: booking.booking_reference,
      trek: booking.trek_name,
      participants: booking.participants,
      startDate: booking.start_date,
      paymentStatus: booking.payment_status,
      timestamp: Date.now()
    });
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(payload)}&color=0f3d35&bgcolor=ffffff&margin=4`;
  }
}


