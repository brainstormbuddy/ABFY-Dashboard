import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// pages
import Login from './pages/Login';
import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Buy from './pages/Buy';
import Offset from './pages/Offset';
import Transfer from './pages/Transfer';
import Setting from './pages/Setting';
import Blog from './pages/Blog';
import User from './pages/User';
import Products from './pages/Products';
import NotFound from './pages/Page404';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/home" /> },
        { path: 'home', element: <Home /> },
        { path: 'calculate', element: <Calculate /> },
        { path: 'buy', element: <Buy /> },
        { path: 'offset', element: <Offset /> },
        { path: 'transfer', element: <Transfer /> },
        { path: 'settings', element: <Setting /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
