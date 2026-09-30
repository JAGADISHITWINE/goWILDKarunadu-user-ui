export function formatBookingErrorMessage(message: string): string {
  const text = String(message || '').trim();
  const lower = text.toLowerCase();

  if (lower.includes('active booking for this trek') || lower.includes('multiple simultaneous bookings')) {
    return text;
  }

  if (lower.includes('active booking for this trek in this month') || lower.includes('complete or cancel the current batch')) {
    return 'You already have an active booking for this trek. Please complete or cancel your current trip before booking again.';
  }

  if (lower.includes('completed this trek') || lower.includes('duplicate_booking')) {
    return 'You have already completed this trek. Each trek can only be booked once.';
  }

  return text || 'Something went wrong while booking. Please try again.';
}
