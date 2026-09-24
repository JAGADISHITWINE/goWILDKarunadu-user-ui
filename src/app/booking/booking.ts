import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../core/encryption.service';

export interface Participant {
  name: string;
  age: number | null;
  gender: string;
  idType: string;
  idNumber: string;
  phone: string;
  medicalInfo: string;
}

export interface BookingData {
  userId: string | null;
  trekId: string | number;
  trekName: string;
  batchId: string | number;
  startDate: string;
  endDate: string;
  price: any;
  availableSlots: any;
  participants: any;
  couponCode?: string;
  referralCode?: string;
  useReferralReward?: boolean;
  referralRewardSlots?: number;
  paymentPlan?: 'full' | 'deposit_30';
  paymentMethod?: string;
  walletAmountApplied?: number;
  selectedAddOns: any[];
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    emergencyContact: string;
    specialRequests: string;
  };
  participantDetails?: Participant[]; // NEW: Add this field
  referralReward?: {
    useFreeSlot?: boolean;
    slots?: number;
  };
}

export interface ReferralSummary {
  referralCode: string;
  successfulReferrals: number;
  totalDiscountEarned: number;
  freeSlotsAvailable: number;
  freeSlotsRedeemed: number;
  nextRewardIn: number;
  freeSlotThreshold: number;
  freeSlotValue: number;
  discountTiers?: {
    base?: number;
    bonus?: number;
    bonusParticipantThreshold?: number;
  };
  recentReferrals?: Array<{
    booking_reference?: string;
    booking_id?: string | number;
    discount_amount?: number;
    status?: string;
    created_at?: string;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class Booking {
  private bookingDataSubject = new BehaviorSubject<BookingData | null>(null);
  public bookingData$ = this.bookingDataSubject.asObservable();

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private API = `${environment.baseUrl}`;

  // Set booking data
  setBookingData(data: BookingData) {
    const encryptedPayload = this.crypto.encrypt(data);


    return this.http.post<any>(`${this.API}/booking`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            // Decrypt the response
            const decrypted = this.crypto.decrypt(res.data);
            return {
              ...res,
              data: decrypted
            }
          }
          catch (error) {
            console.error('Decryption error:', error);
            throw error;
          }
        }),

      );
  }

  validateCoupon(payload: {
    userId: string | null;
    trekId: string | number;
    participants: number;
    price: number;
    couponCode: string;
    selectedAddOns: any[];
  }) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post<any>(`${this.API}/coupon/validate`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            const decrypted = this.crypto.decrypt(res.data);
            return {
              ...res,
              data: decrypted
            };
          } catch (error) {
            console.error('Coupon validation decrypt error:', error);
            throw error;
          }
        }),
      );
  }

  getAvailableCoupons(trekId: string | number, userId?: string | null) {
    const query = userId ? `?userId=${encodeURIComponent(String(userId))}` : "";
    return this.http.get<{ success: boolean; data: any[] }>(
      `${this.API}/coupons/trek/${trekId}${query}`
    );
  }

  validateReferralCode(payload: {
    referralCode: string;
    userId: string | null;
    participants: number;
  }) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post<any>(`${this.API}/referrals/validate`, { encryptedPayload }).pipe(
      map((res: any) => {
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return { ...res, data: decrypted };
        } catch (error) {
          console.error('Referral validation decrypt error:', error);
          throw error;
        }
      })
    );
  }

  getReferralSummary(userId: string | number) {
    return this.http.get<any>(`${this.API}/referrals/${userId}/summary`).pipe(
      map((res: any) => {
        if (res?.data) {
          try {
            const decrypted = this.crypto.decrypt(res.data);
            return { ...res, data: decrypted };
          } catch (error) {
            console.error('Referral summary decrypt error:', error);
          }
        }
        return res;
      })
    );
  }

  // Get current booking data
  getBookingData(): BookingData | null {
    return this.bookingDataSubject.value;
  }

  // Clear booking data
  clearBookingData() {
    this.bookingDataSubject.next(null);
  }

  // Calculate total price
  calculateTotal(basePrice: number, participants: number, addOns: any[]): number {
    const baseTotal = basePrice * participants;
    const addOnsTotal = addOns
      .filter(addon => addon.selected || Number(addon.quantity) > 0)
      .reduce((sum, addon) => {
        const quantity = Number(addon.quantity) > 0 ? Number(addon.quantity) : 0;
        return sum + (Number(addon.price) * quantity);
      }, 0);
    return baseTotal + addOnsTotal;
  }
}
