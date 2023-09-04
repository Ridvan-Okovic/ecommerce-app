import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'home/products',
        element: <HomePage />,
      },
      {
        path: 'home/products/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: 'home/login',
        element: <LoginPage />,
      },
      {
        path: 'home/register',
        element: <RegisterPage />,
      },

      {
        path: '/',
        element: <Navigate to="home/products" redirect />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
