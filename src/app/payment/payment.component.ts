import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="payment-card">
      <h3>Test Payment</h3>
      <label>Amount (INR)
        <input type="number" [(ngModel)]="amount" />
      </label>
      <button (click)="pay()">Pay</button>
      <div *ngIf="status">Status: {{status}}</div>
    </div>
  `,
  styles: [`.payment-card{padding:1rem;border:1px solid #ddd;border-radius:6px;max-width:320px}`]
})
export class PaymentComponent {
  amount = 1;
  status = '';

  constructor(private ps: PaymentService) {}

  async pay() {
    try {
      this.status = 'Creating order...';
      const resp: any = await this.ps.createOrder({ amount: this.amount }).toPromise();
      const order = resp?.data?.order || resp?.order;
      if (!order) throw new Error('No order returned');
      this.status = 'Opening checkout...';
      const result = await this.ps.openCheckout(order.id, this.amount);
      this.status = 'Verifying payment...';
      await this.ps.verifyPayment({ order_id: result.order_id, payment_id: result.payment_id, signature: result.signature }).toPromise();
      this.status = 'Payment successful';
    } catch (err: any) {
      console.error(err);
      this.status = 'Error: ' + (err?.message || err);
    }
  }
}
