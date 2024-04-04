import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Outlet/MainLayout";
import HeroSection from "./AllPages/Landing/HeroSection";
import LandingPage from "./AllPages/Landing/LandingPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
        ],
    },
]);

export default router;