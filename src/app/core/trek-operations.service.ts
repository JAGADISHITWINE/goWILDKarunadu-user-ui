import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface WalletData {
  balance: number;
  bonusBalance: number;
  totalUsableBalance: number;
  currency: string;
  transactions: any[];
}

export interface TaxInvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  company: {
    legalName: string;
    brandName: string;
    gstin: string;
    sacCode: string;
    kedbLicense: string;
    address: string;
    supportEmail: string;
    supportPhone: string;
  };
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  trek: {
    name: string;
    location: string;
    bookingReference: string;
    startDate: string;
    endDate: string;
    participants: number;
  };
  lineItems: Array<{ description: string; sac: string; amount: number }>;
  financials: {
    subtotal: number;
    cgst: number;
    sgst: number;
    totalTax: number;
    discount: number;
    totalAmount: number;
    amountPaid: number;
    balanceDue: number;
    paymentStatus: string;
    paymentPlan: string;
  };
}

export interface SummitCertificateData {
  certificateId: string;
  recipientName: string;
  trekName: string;
  location: string;
  elevation: string;
  completionDate: string;
  bookingReference: string;
  leadTrekMaster: string;
  verificationUrl: string;
  badgeTitle: string;
  sealText: string;
}

export interface CarpoolRide {
  id: string;
  user_id: string;
  user_name: string;
  user_phone: string;
  trek_name: string;
  departure_city: string;
  departure_location: string;
  departure_datetime: string;
  available_seats: number;
  price_per_seat: number;
  vehicle_model: string;
  notes: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrekOperationsService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getWallet(userId?: string): Observable<WalletData> {
    const url = userId ? `${this.API}/wallet/${userId}` : `${this.API}/wallet`;
    return this.http.get<{ success: boolean; data: WalletData }>(url).pipe(
      map((res) => res?.data || { balance: 0, bonusBalance: 0, totalUsableBalance: 0, currency: 'INR', transactions: [] }),
      catchError(() => of({ balance: 0, bonusBalance: 0, totalUsableBalance: 0, currency: 'INR', transactions: [] }))
    );
  }

  getTaxInvoice(bookingId: string): Observable<TaxInvoiceData | null> {
    return this.http.get<{ success: boolean; data: TaxInvoiceData }>(`${this.API}/bookings/${bookingId}/tax-invoice`).pipe(
      map((res) => res?.data || null),
      catchError(() => of(null))
    );
  }

  getSummitCertificate(bookingId: string): Observable<SummitCertificateData | null> {
    return this.http.get<{ success: boolean; data: SummitCertificateData }>(`${this.API}/bookings/${bookingId}/summit-certificate`).pipe(
      map((res) => res?.data || null),
      catchError(() => of(null))
    );
  }

  payRemainder(bookingId: string, payload: { amount?: number; paymentMethod: string; transactionId?: string }): Observable<any> {
    return this.http.post<{ success: boolean; message: string; data: any }>(
      `${this.API}/bookings/${bookingId}/pay-remainder`,
      payload
    );
  }

  getCarpools(filter?: { departureCity?: string; trekName?: string }): Observable<CarpoolRide[]> {
    let params: any = {};
    if (filter?.departureCity) params.departureCity = filter.departureCity;
    if (filter?.trekName) params.trekName = filter.trekName;

    return this.http.get<{ success: boolean; data: CarpoolRide[] }>(`${this.API}/community/carpools`, { params }).pipe(
      map((res) => res?.data || []),
      catchError(() => of([]))
    );
  }

  createCarpoolOffer(ride: Partial<CarpoolRide>): Observable<any> {
    return this.http.post<{ success: boolean; message: string; data: any }>(
      `${this.API}/community/carpools`,
      ride
    );
  }
}
