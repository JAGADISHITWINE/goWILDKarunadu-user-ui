import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from './encryption.service';

export interface ReferralDiscountTiers {
  base: number;
  bonus: number;
  bonusParticipantThreshold: number;
}

export interface ReferralSummary {
  referralCode: string;
  successfulReferrals: number;
  totalDiscountEarned: number;
  freeSlotsAvailable: number;
  freeSlotsRedeemed: number;
  nextRewardIn: number;
  programActive: boolean;
  freeSlotThreshold: number;
  freeSlotValue: number;
  discountTiers: ReferralDiscountTiers;
  recentReferrals?: Array<{
    booking_id: string | number;
    booking_reference?: string;
    created_at: string;
    discount_amount: number;
    status: string;
  }>;
}

interface ReferralResponse<T> {
  success: boolean;
  data: T | null;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ReferralService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  getSummary(userId: string | number) {
    return this.http.get<ReferralResponse<string>>(`${this.API}/referrals/${userId}/summary`).pipe(
      map((res: any) => {
        if (!res?.data) {
          return {
            success: res?.success !== false,
            data: null,
            message: res?.message,
          } as ReferralResponse<ReferralSummary>;
        }
        const decrypted = this.crypto.decrypt(res.data) as ReferralSummary | null;
        return {
          success: res?.success !== false,
          data: decrypted,
          message: res?.message,
        } as ReferralResponse<ReferralSummary>;
      })
    );
  }
}
