import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import SignUpScreen from "../pages/auth/signup";
import VerifyOtpScreen from "../pages/auth/verifyOtp"; // <-- Make sure the path is correct

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/verifyOtp" element={<VerifyOtpScreen />} />
    </Routes>
  );
};

export default AppRoutes;
