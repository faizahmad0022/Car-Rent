import RentLayout from "../layout";
import Login from "../pages/auth/login";
import ZvCarRcent from "../pages/ZVCarRcent";
import SignUpScreen from "../pages/auth/signup";
import DashboardRcentCar from "../pages/dashboard";
import PkiLoginScreen from "../pages/auth/PkIlogin";
import DetailCrentCar from "../pages/DetailCrentCar";
import VerifyOtpScreen from "../pages/auth/verifyOtp"; 
import PaymentCarRcent from "../pages/paymentCarRcent";
import PopularCarsCrent from "../pages/popularCarsCrent";
import BookingConfirmation from "../pages/bookingConfirmation";
import { Routes, Route, Navigate } from "react-router-dom";
import ContinueAsGuestScreen from "../pages/auth/continueAsGuest";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/Pkilogin" element={<PkiLoginScreen />} />
      <Route path="/verifyOtp" element={<VerifyOtpScreen />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/continueasguest" element={<ContinueAsGuestScreen />} />

      <Route element={<RentLayout />}>
        <Route path="/zvCarRcent" element={<ZvCarRcent />} />
        <Route path="/dashboard" element={<DashboardRcentCar />} />
        <Route path="/popularCars" element={<PopularCarsCrent />} />
        <Route path="/detailCrentCar" element={<DetailCrentCar />} />
        <Route path="/paymentCarRcent" element={<PaymentCarRcent />} />
        <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
