import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="text-3xl font-bold">Auth Layout</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
