import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/community/Home";
import Cart from "./pages/shoppingCart/Cart";

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
                path: "shop",
                // 여기에 element
            },
            {
                path: "login",
                // 여기에 element
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
