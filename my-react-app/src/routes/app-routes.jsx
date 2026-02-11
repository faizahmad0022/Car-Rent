import RentLayout from "../layout";
import Login from "../pages/auth/login";
import ZvCarRcent from "../pages/ZVCarRcent";
import SignUpScreen from "../pages/auth/signup";
import DashboardRcentCar from "../pages/dashboard";
import PkiLoginScreen from "../pages/auth/PkIlogin";
import DetailCrentCar from "../pages/DetailCrentCar";
import VerifyOtpScreen from "../pages/auth/verifyOtp"; 
import PopularCarsCrent from "../pages/popularCarsCrent";
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
        <Route path="/zvCarRcent" element={<ZvCarRcent />} />
        <Route path="/dashboard" element={<DashboardRcentCar />} />
        <Route path="/popularCars" element={<PopularCarsCrent />} />
        <Route path="/detailCrentCar" element={<DetailCrentCar />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
