import { Outlet } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';

const routePaths = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: 'dashboard/*',

    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <div> Hello World</div>,
      },
      {
        path: 'smart',
        element: <div> Hello World</div>,
      },
      {
        path: 'contact',
        element: <div> Hello World</div>,
      },
      {
        path: 'fundraising',
        element: <div> Hello World</div>,
      },
    ],
  },
];

export default routePaths;
