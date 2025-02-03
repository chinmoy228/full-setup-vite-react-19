import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/login",
    title: "Login",
    component: lazy(() => import("../pages/Authentication/Signin/index")),
    exact: true,
  },
  {
    path: "/signup",
    title: "Signup",
    component: lazy(() => import("../pages/Authentication/Signin/index")),
    exact: true,
  },

 

 

  // All the public routes
];

const PrivateRoutes = [
  {
    path: "/",
    title:"Dashboard",
    component: lazy(() => import("../pages/Dashboard/index")),
    exact: true,
    defaultAccess: true,
  },
  

 // All the private routes

];

export { PublicRoutes, PrivateRoutes };