import { BookingAddOn } from './booking.models';

export function calculateBasePrice(unitPrice: number, participants: number): number {
  return (Number(unitPrice) || 0) * Math.max(1, Number(participants) || 1);
}

export function calculateAddOnsPrice(addOns: BookingAddOn[]): number {
  if (!Array.isArray(addOns)) return 0;
  return addOns.reduce(
    (sum, addon) => sum + (Number(addon.price) || 0) * (Number(addon.quantity) || 0),
    0
  );
}

export function calculateTotalPrice(basePrice: number, addOnsPrice: number): number {
  return (Number(basePrice) || 0) + (Number(addOnsPrice) || 0);
}

export function calculatePayablePrice(
  totalPrice: number,
  discounts: number
): number {
  return Math.max(0, (Number(totalPrice) || 0) - (Number(discounts) || 0));
}

export function calculateForestPermitFee(participants: number): number {
  return Math.max(1, Number(participants) || 1) * 250;
}

export function calculateEcoCess(participants: number): number {
  return Math.max(1, Number(participants) || 1) * 50;
}

export function calculateAdvanceDeposit(payablePrice: number): number {
  return parseFloat(((Number(payablePrice) || 0) * 0.30).toFixed(2));
}

export function calculateRemainder(payablePrice: number, advanceDeposit: number): number {
  return parseFloat(((Number(payablePrice) || 0) - (Number(advanceDeposit) || 0)).toFixed(2));
}

export function calculateWalletDeduction(
  applyWallet: boolean,
  usableBalance: number,
  grossAmount: number
): number {
  if (!applyWallet || usableBalance <= 0) return 0;
  return Math.min(Number(usableBalance) || 0, Math.max(0, Number(grossAmount) || 0));
}

export function calculateEffectivePayableNow(
  grossAmount: number,
  walletDeduction: number
): number {
  return Math.max(0, (Number(grossAmount) || 0) - (Number(walletDeduction) || 0));
}
