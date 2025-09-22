import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/community/Home';
import Signup from './pages/signup/Signup';

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
      {
        path: 'login',
        // 여기에 element
      },
    ],
  },
  {
    path: 'signup',
    element: <Signup/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
