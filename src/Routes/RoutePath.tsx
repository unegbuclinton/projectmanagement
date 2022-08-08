import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';
import ProjectsPage from '../pages/projects';
import SignUp from '../pages/SignUp';
import Test from '../pages/test/test';

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
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: 'dash/*',

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
