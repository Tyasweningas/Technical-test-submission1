import React from 'react';
import './App.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DataSummary from './pages/DataSumarry';
import Input from './pages/Input';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/DataSummary" element={<DataSummary />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);