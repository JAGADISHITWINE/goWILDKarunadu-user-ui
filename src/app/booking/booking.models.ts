export interface Participant {
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

export interface BookingAddOn {
  id: string | number;
  name: string;
  category?: string;
  price: number;
  selected: boolean;
  quantity: number;
}

export interface AvailableCoupon {
  id: string | number;
  code: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minBookingAmount: number;
  maxDiscountAmount: number | null;
  endDate: string | null;
  usageLimit: number | null;
  usageCount: number;
  isUsedByUser?: boolean;
}
