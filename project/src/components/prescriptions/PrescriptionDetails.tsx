import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatDate, formatCurrency } from '../../utils/format';

// Mock data for demonstration
const mockPrescription = {
  id: '1',
  date: '2024-03-15',
  patientName: 'John Doe',
  mobileNumber: '+1234567890',
  whatsappNumber: '+1234567890',
  examinedBy: 'Dr. Smith',
  rightEye: {
    sphere: '-1.50',
    cylinder: '-0.50',
    axis: '180',
  },
  leftEye: {
    sphere: '-1.75',
    cylinder: '-0.25',
    axis: '175',
  },
  add: '+2.00',
  lensType: 'Progressive',
  lensCost: 199.99,
  frameName: 'Ray-Ban Aviator',
  frameCost: 149.99,
  totalCost: 349.98,
  status: 'pending',
  createdAt: '2024-03-15T10:00:00Z',
  updatedAt: '2024-03-15T10:00:00Z',
};

export function PrescriptionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real application, you would fetch the prescription data based on the ID
  const prescription = mockPrescription;

  return (
    <div>
      <div className="mb-8">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          icon={ArrowLeft}
        >
          Back
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Prescription Details
            </h2>
            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              {prescription.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Patient Information</h3>
              <dl className="grid grid-cols-1 gap-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date</dt>
                  <dd className="mt-1 text-sm text-gray-900">{formatDate(prescription.date)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.patientName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.mobileNumber}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">WhatsApp Number</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.whatsappNumber}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Examined By</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.examinedBy}</dd>
                </div>
              </dl>
            </div>

            {/* Prescription Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Eye Prescription</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Right Eye */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Right Eye (RE)</h4>
                  <dl className="grid grid-cols-1 gap-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Sphere</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.rightEye.sphere}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Cylinder</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.rightEye.cylinder}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Axis</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.rightEye.axis}</dd>
                    </div>
                  </dl>
                </div>

                {/* Left Eye */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Left Eye (LE)</h4>
                  <dl className="grid grid-cols-1 gap-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Sphere</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.leftEye.sphere}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Cylinder</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.leftEye.cylinder}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Axis</dt>
                      <dd className="mt-1 text-sm text-gray-900">{prescription.leftEye.axis}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">ADD</dt>
                <dd className="mt-1 text-sm text-gray-900">{prescription.add}</dd>
              </div>
            </div>

            {/* Lens and Frame Details */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900">Lens and Frame Details</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Lens Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.lensType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Lens Cost</dt>
                  <dd className="mt-1 text-sm text-gray-900">{formatCurrency(prescription.lensCost)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Frame Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{prescription.frameName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Frame Cost</dt>
                  <dd className="mt-1 text-sm text-gray-900">{formatCurrency(prescription.frameCost)}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Total Cost</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">
                    {formatCurrency(prescription.totalCost)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}