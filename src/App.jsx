import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Community/Home";
import Shop from "./pages/shopping/Home";
import Sign from "./pages/Signup/Signup";
import Login from "./pages/login/Login";
import PasswordReset from "./pages/login/ResetLayout";
import Cart from "./pages/ShoppingCart/Cart";
import UnderConstruction from "./pages/UnderConstruction";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, // 기본페이지
                element: <Home />,
            },
            {
                path: "home/none/:id",
                element: <UnderConstruction />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "shop/none/:id",
                element: <UnderConstruction />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "none",
                element: <UnderConstruction />,
            },
        ],
    },
    {
        path: "/sign",
        element: <Sign />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/password-reset",
        element: <PasswordReset />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
