import { Participant } from './booking.models';

export function normalizeIdType(idType: string): string {
  const value = (idType || '').trim().toLowerCase();

  if (value === 'aadhar' || value === 'aadhaar') return 'Aadhar';
  if (value === 'pan' || value === 'pan card') return 'PAN';
  if (value === 'passport') return 'Passport';
  if (value === 'driving license' || value === 'driving licence') return 'Driving License';
  if (value === 'voter id' || value === 'voterid') return 'Voter ID';

  return idType;
}

export function getIdMaxLength(idType: string): number {
  switch (normalizeIdType(idType)) {
    case 'Aadhar':          return 14; // 12 digits + 2 spaces
    case 'PAN':             return 10;
    case 'Passport':        return 8;
    case 'Driving License': return 15;
    case 'Voter ID':        return 10;
    default:                return 20;
  }
}

export function validateParticipantId(participant: Participant): void {
  participant.idError = '';
  if (!participant.idType || !participant.idNumber) return;

  const raw = participant.idNumber.replace(/\s/g, '');
  const idType = normalizeIdType(participant.idType);

  switch (idType) {
    case 'Aadhar':
      if (!/^\d{12}$/.test(raw)) {
        participant.idError = 'Aadhaar must be exactly 12 digits';
      }
      break;

    case 'PAN':
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(raw)) {
        participant.idError = 'Invalid PAN format (e.g. ABCDE1234F)';
      }
      break;

    case 'Passport':
      if (!/^[A-Z][0-9]{7}$/.test(raw)) {
        participant.idError = 'Invalid Passport format (e.g. A1234567)';
      }
      break;

    case 'Driving License':
      if (raw.length < 10) {
        participant.idError = 'Driving License must be at least 10 characters';
      }
      break;

    case 'Voter ID':
      if (!/^[A-Z]{3}[0-9]{7}$/.test(raw)) {
        participant.idError = 'Invalid Voter ID format (e.g. ABC1234567)';
      }
      break;
  }
}

export function formatParticipantIdInput(participant: Participant): void {
  if (!participant.idType) return;
  const value = participant.idNumber || '';
  const idType = normalizeIdType(participant.idType);

  switch (idType) {
    case 'Aadhar': {
      const digits = value.replace(/\D/g, '').substring(0, 12);
      participant.idNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
      break;
    }

    case 'PAN':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;

    case 'Passport':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
      break;

    case 'Driving License':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 15);
      break;

    case 'Voter ID':
      participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
      break;
  }

  validateParticipantId(participant);
}

export function validateParticipantAge(participant: Participant): void {
  participant.ageError = '';
  if (participant.age === null) return;

  if (participant.age < 12) {
    participant.ageError = 'Minimum age is 12 years';
  }
}

export function isValidPhone(phone: string): boolean {
  const digits = String(phone || '').replace(/\D/g, '');
  return digits.length === 10;
}

export function validateParticipantPhone(participant: Participant, isPrimary: boolean = false): void {
  participant.phoneError = '';
  if (isPrimary) return;

  if (!isValidPhone(participant.phone)) {
    participant.phoneError = 'Phone number must be exactly 10 digits';
  }
}

export function areAllParticipantsValid(participants: Participant[]): boolean {
  return participants.every((participant, index) =>
    participant.name.trim() !== '' &&
    participant.age !== null &&
    participant.age > 0 &&
    participant.gender !== '' &&
    participant.idType !== '' &&
    participant.idNumber.trim() !== '' &&
    !participant.idError &&
    !participant.ageError &&
    (index === 0 || isValidPhone(participant.phone))
  );
}

export function createInitialParticipants(
  count: number,
  primaryName: string = '',
  primaryPhone: string = ''
): Participant[] {
  const list: Participant[] = [];
  const safeCount = Math.max(1, count || 1);

  for (let i = 0; i < safeCount; i++) {
    list.push({
      name: i === 0 ? primaryName : '',
      age: null,
      gender: '',
      idType: '',
      idNumber: '',
      phone: i === 0 ? primaryPhone : '',
      bloodGroup: 'O+',
      dietaryPreference: 'Vegetarian',
      medicalCondition: 'None / Fit to Trek',
      medicalInfo: '',
    });
  }

  return list;
}
