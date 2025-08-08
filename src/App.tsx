import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SellerRegistrationPage from './pages/SellerRegistrationPage';
import SellerLandingPage from './pages/SellerLandingPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import SellerLoginPage from './pages/SellerLoginPage';
import SellerProfileFormPage from './pages/SellerProfileFormPage';
import SellerProfileSuccessPage from './pages/SellerProfileSuccessPage';
import SellerDashboardPage from './pages/SellerDashboardPage';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/seller-landing" element={<SellerLandingPage />} />
          <Route path="/seller-register" element={<SellerRegistrationPage />} />
          <Route path="/seller-login" element={<SellerLoginPage />} />
          <Route path="/seller-profile-form" element={<SellerProfileFormPage />} />
          <Route path="/seller-profile-success" element={<SellerProfileSuccessPage />} />
          <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}