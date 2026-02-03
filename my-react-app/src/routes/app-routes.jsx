import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUpScreen from "../pages/login/signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
    
  );
};

export default AppRoutes;
