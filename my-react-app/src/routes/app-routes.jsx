import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import SignUpScreen from "../pages/auth/signup";
import VerifyOtpScreen from "../pages/auth/verifyOtp"; 
import PkiLoginScreen from "../pages/auth/PkIlogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/verifyOtp" element={<VerifyOtpScreen />} />
      <Route path="/PkiLogin" element={<PkiLoginScreen />} />
    </Routes>
  );
};

export default AppRoutes;
