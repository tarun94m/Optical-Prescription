import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrescriptionForm } from './PrescriptionForm';
import { Prescription } from '../../types/prescription';

export function NewPrescription() {
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Prescription>) => {
    // Here you would typically save the data to your backend
    console.log('New prescription:', data);
    navigate('/');
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            New Prescription
          </h2>
        </div>
      </div>
      <PrescriptionForm onSubmit={handleSubmit} />
    </div>
  );
}