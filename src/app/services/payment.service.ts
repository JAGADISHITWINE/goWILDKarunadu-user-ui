import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).Razorpay) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  createOrder(payload: { amount: number; bookingId?: string; userId?: string; receipt?: string }) {
    return this.http.post(`${environment.baseUrl}/payments/create-order`, payload);
  }

  verifyPayment(payload: { order_id: string; payment_id: string; signature: string; bookingId?: string }) {
    return this.http.post(`${environment.baseUrl}/payments/verify`, payload);
  }

  async openCheckout(orderId: string, amount: number, options: { name?: string; description?: string; image?: string; prefill?: any } = {}) {
    await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    const key = (window as any).__env?.RAZORPAY_KEY_ID || (environment as any).RAZORPAY_KEY_ID || '';
    if (!key) throw new Error('Razorpay key not configured in environment');

    return new Promise<{ payment_id: string; order_id: string; signature: string }>((resolve, reject) => {
      const rzp = new (window as any).Razorpay({
        key,
        amount: Math.round(amount * 100),
        order_id: orderId,
        name: options.name || 'goWILD Karunadu',
        description: options.description || '',
        image: options.image || '',
        prefill: options.prefill || {},
        handler: (resp: any) => {
          resolve({ payment_id: resp.razorpay_payment_id, order_id: resp.razorpay_order_id, signature: resp.razorpay_signature });
        },
        modal: { ondismiss: () => reject(new Error('Checkout dismissed')) },
      });
      rzp.open();
    });
  }
}
