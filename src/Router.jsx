import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Outlet/MainLayout";
import HeroSection from "./AllPages/Landing/HeroSection";
import LandingPage from "./AllPages/Landing/LandingPage";
import Authentication from "./AllPages/Authentication/Authentication";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/sign-in",
                element: <Authentication />,
            },
        ],
    },
]);

export default router;