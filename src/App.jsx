import { useState } from 'react';
import './App.css';
import './index.css';
import { useDispatch } from 'react-redux';
import { saveFormData } from './slices/formSlices';
import { useNavigate } from 'react-router-dom'; // For navigation
import Input from './pages/Input';
import DataSummary from './pages/DataSumarry';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    area: '',
    city: '',
    state: '',
    postCode: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    const { fullName, phone, email, area, city, state, postCode } = formValues;

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      validationErrors.fullName = 'Full Name should contain only alphabets.';
    }

    if (!/^\d+$/.test(phone) || !(phone.length === 10 || phone.length === 11 || phone.length === 12 || phone.length === 13)) {
      validationErrors.phone = 'Phone Number should contain exactly 10, 11, 12, or 13 digits.';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    if (!area) {
      validationErrors.area = 'Area is required.';
    }

    if (!city) {
      validationErrors.city = 'City is required.';
    }

    if (!state) {
      validationErrors.state = 'State is required.';
    }

    if (!/^\d{5}$/.test(postCode)) {
      validationErrors.postCode = 'Post Code should contain exactly 5 digits.';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Aktifkan loading
      setTimeout(() => {
        dispatch(saveFormData(formValues)); 
        setLoading(false); // Matikan loading
        navigate('/DataSummary'); 
      }, 2000); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (

    // <div className="bg-indigo-300">
    
    <div className="flex items-center justify-center p-6 bg-violet-200 rounded-xl max-w-50">
    <div className="mx-auto w-full max-w-[550px] bg-transparent">
    <p className='font-bold text-2xl bg-violet-300 rounded-3xl'>Form Response</p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="Full Name"
        />

        <Input
          label="Phone Number"
          type="text"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Enter your phone number"
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />

        <Input
          label="Area"
          type="text"
          name="area"
          value={formValues.area}
          onChange={handleChange}
          error={errors.area}
          placeholder="Enter area"
        />

        <Input
          label="City"
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleChange}
          error={errors.city}
          placeholder="Enter city"
        />

        <Input
          label="State"
          type="text"
          name="state"
          value={formValues.state}
          onChange={handleChange}
          error={errors.state}
          placeholder="Enter state (e.g., NY)"
        />

        <Input
          label="Post Code"
          type="text"
          name="postCode"
          value={formValues.postCode}
          onChange={handleChange}
          error={errors.postCode}
          placeholder="Enter post code"
        />

{loading ? (
  <button
    type="button"
    className="bg-indigo-500 w-40 rounded-md py-3 px-8 text-center text-base font-semibold text-white flex items-center justify-center"
    disabled
  >
    <svg
      className="animate-spin h-5 w-5 mr-3 text-white"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
    Processing...
  </button>
) : (
  <button
    type="submit"
    className="hover:shadow-form w-40 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none flex items-center justify-center"
  >
              Save Data
            </button>
          )}
      </form>
    </div>
  </div>
  // </div>
  );
}

export default App;
