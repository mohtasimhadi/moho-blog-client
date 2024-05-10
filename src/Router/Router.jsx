import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Outlet/MainLayout";
import HeroSection from "../AllPages/Landing/HeroSection";
import LandingPage from "../AllPages/Landing/LandingPage";
import Authentication from "../AllPages/Authentication/Authentication";
import ManagementLayout from "../Outlet/ManagementLayout";
import user_router from "./user_router";
import admin_router from "./admin_router";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: user_router
    },
    {
        path: "/admin",
        element: <ManagementLayout />,
        children: admin_router
    }
]);

export default router;