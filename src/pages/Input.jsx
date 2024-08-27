import React from 'react';

const Input = ({ label, type, name, value, onChange, error, placeholder }) => {
  return (
    <div className="mb-5">
      <label className="mb-3 block text-base font-medium text-[#07074D]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border ${
          error ? 'border-red-500' : 'border-[#e0e0e0]'
        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
