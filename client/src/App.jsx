import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

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
        path: 'home/cart',
        element: <CartPage />,
      },
      {
        path: 'home/login',
        element: <LoginPage />,
      },
      {
        path: 'home/register',
        element: <RegisterPage />,
      },
      { path: '/about', element: <AboutUsPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
  { path: '/home', element: <LandingPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
