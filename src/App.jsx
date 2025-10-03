import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/community/Home';
import Shop from './pages/shopping/Home';

import Sign from './pages/signup/Signup';
import Login from './pages/login/Login';
import PasswordReset from './pages/login/ResetLayout';
import Cart from './pages/shoppingCart/cart';

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
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/sign',
    element: <Sign />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/password-reset',
    element: <PasswordReset />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
