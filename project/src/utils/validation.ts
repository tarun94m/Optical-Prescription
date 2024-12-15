export const validatePhoneNumber = (number: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{9,14}$/;
  return phoneRegex.test(number);
};

export const validatePrescriptionData = (data: Partial<Prescription>): string[] => {
  const errors: string[] = [];

  if (!data.patientName?.trim()) {
    errors.push('Patient name is required');
  }

  if (!validatePhoneNumber(data.mobileNumber || '')) {
    errors.push('Invalid mobile number');
  }

  if (data.whatsappNumber && !validatePhoneNumber(data.whatsappNumber)) {
    errors.push('Invalid WhatsApp number');
  }

  return errors;
};