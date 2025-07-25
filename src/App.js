import React from 'react';
import LoginPage from './pages/LoginPage'; 
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
