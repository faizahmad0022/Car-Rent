import RentLayout from "../layout";
import Login from "../pages/auth/login";
import SignUpScreen from "../pages/auth/signup";
import DashboardRcentCar from "../pages/dashboard";
import PkiLoginScreen from "../pages/auth/PkIlogin";
import VerifyOtpScreen from "../pages/auth/verifyOtp"; 
import { Routes, Route, Navigate } from "react-router-dom";
import ContinueAsGuestScreen from "../pages/auth/continueAsGuest";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/verifyOtp" element={<VerifyOtpScreen />} />
      <Route path="/Pkilogin" element={<PkiLoginScreen />} />
      <Route path="/continueasguest" element={<ContinueAsGuestScreen />} />
      
      <Route element={<RentLayout />}>
        <Route path="/dashboard" element={<DashboardRcentCar />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
