import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/community/Home";
import Shop from './pages/shopping/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // 기본페이지
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'login',
        // 여기에 element
      },
    ],
  },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
