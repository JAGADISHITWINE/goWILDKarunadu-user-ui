import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-payment-modal',
  templateUrl: './booking-payment-modal.component.html',
  styleUrls: ['./booking-payment-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookingPaymentModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() trekName: string = 'Western Ghats Expedition';
  @Input() startDate: string | Date = '';
  @Input() participantsCount: number = 1;
  @Input() paymentPlan: string = 'full';
  @Input() payablePrice: number = 0;
  @Input() brandName: string = 'goWILD Karunadu';
  @Input() bankOptions: any[] = [];
  @Input() walletOptions: any[] = [];
  @Input() walletBalance: number = 0;

  @Output() close = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<string>();

  selectedPaymentTab: 'upi' | 'card' | 'netbanking' | 'wallet' = 'upi';
  upiOption: 'qr' | 'vpa' = 'qr';
  upiVpa: string = '';
  upiTimerSeconds: number = 720;
  private upiTimerInterval: any = null;

  cardDetails = {
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  };

  selectedBank: string = 'HDFC';
  selectedWallet: string = 'amazonpay';
  isProcessingPayment: boolean = false;
  paymentSuccessState: boolean = false;
  selectedPaymentMethodLabel: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        this.resetState();
        this.startUpiTimer();
      } else {
        this.stopUpiTimer();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopUpiTimer();
  }

  resetState(): void {
    this.isProcessingPayment = false;
    this.paymentSuccessState = false;
    this.selectedPaymentMethodLabel = '';
    this.cardDetails = { number: '', expiry: '', cvv: '', name: '' };
    this.upiVpa = '';
  }

  onClose(): void {
    if (this.isProcessingPayment) return;
    this.stopUpiTimer();
    this.close.emit();
  }

  setPaymentTab(tab: 'upi' | 'card' | 'netbanking' | 'wallet'): void {
    this.selectedPaymentTab = tab;
  }

  startUpiTimer(): void {
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

  stopUpiTimer(): void {
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

  appendVpaHandle(handle: string): void {
    const raw = (this.upiVpa || '').split('@')[0] || '';
    this.upiVpa = `${raw}${handle}`;
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = (input.value || '').replace(/\D/g, '').substring(0, 16);
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    this.cardDetails.number = formatted;
    input.value = formatted;
  }

  formatCardExpiry(event: Event): void {
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

  completePayment(methodLabel: string): void {
    if (this.isProcessingPayment) return;
    this.selectedPaymentMethodLabel = methodLabel;
    this.isProcessingPayment = true;

    // Simulate authentic bank gateway verification
    setTimeout(() => {
      this.paymentSuccessState = true;
      this.isProcessingPayment = false;
      setTimeout(() => {
        this.confirmed.emit(methodLabel);
      }, 1200);
    }, 1200);
  }
}
