import { Routes, Route } from "react-router-dom";
// import { Home } from "@/pages";
import {
  HOME,
  // SIGNUP,
  // FORGOT_PASSWORD,
  // LOGIN
} from "@/routes/CONSTANTS";

import { ProtectedRoutes, PublicRoute } from "@/components";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        {/* <Route path={HOME} element={<Home />} /> */}

        <Route path="/" element={<PublicRoute />}>
          {/* Auth pages */}
          {/* <Route path={SIGNUP} element={<Signup />} /> */}
          {/* <Route path={LOGIN} element={<Login />} /> */}
          {/* <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} /> */}
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
};

export default RouterConfig;
