import React from 'react';
import { Layout } from './components/layout/Layout';
import { PrescriptionList } from './components/prescriptions/PrescriptionList';
import { Routes, Route } from 'react-router-dom';
import { NewPrescription } from './components/prescriptions/NewPrescription';
import { PrescriptionDetails } from './components/prescriptions/PrescriptionDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PrescriptionList />} />
        <Route path="/new" element={<NewPrescription />} />
        <Route path="/prescription/:id" element={<PrescriptionDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;