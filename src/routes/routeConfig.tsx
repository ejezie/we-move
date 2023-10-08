import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "@/pages";
import {
  // HOME,
  REGISTER,
  // FORGOT_PASSWORD,
  LOGIN,
} from "./CONSTANTS";

import { ProtectedRoute, PublicRoute } from "@/components";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        {/* <Route path={HOME} element={<Home />} /> */}

        <Route path="/" element={<PublicRoute />}>
          {/* Auth pages */}
          <Route path={REGISTER} element={<RegisterPage />} />
          <Route path={LOGIN} element={<LoginPage />} />
          {/* <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} /> */}
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
};

export default RouterConfig;
