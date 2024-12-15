export interface Prescription {
  id: string;
  date: string;
  patientName: string;
  mobileNumber: string;
  whatsappNumber: string;
  examinedBy: string;
  rightEye: EyeDetails;
  leftEye: EyeDetails;
  add: string;
  lensType: string;
  lensCost: number;
  frameName: string;
  frameCost: number;
  totalCost: number;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface EyeDetails {
  sphere: string;
  cylinder: string;
  axis: string;
}