import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px] bg-violet-300 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-2xl font-bold mb-5 text-violet-900">Summary Data</h1>
      <div>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Phone Number:</strong> {formData.phone}</p>
        <p><strong>Email Address:</strong> {formData.email}</p>
        <p><strong>Area:</strong> {formData.area}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Post Code:</strong> {formData.postCode}</p>
      </div>
    </div>
  </div>
  
  );
};

export default Summary;
