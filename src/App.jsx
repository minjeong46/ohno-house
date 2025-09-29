import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/community/Home';
import Sign from './pages/signup/Signup';
import Login from './pages/login/Login';

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
        // 여기에 element
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
