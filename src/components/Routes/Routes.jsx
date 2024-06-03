import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/Community/Community";
import Login from "../Pages/Authentication/Login/Login";
import Signup from "../Pages/Authentication/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  // Main routes
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/community',
        element: <Community></Community>
      }
    ]
  },

  // dashboard routes
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  },

  // authentication routes
  { path: '/login', element: <Login></Login> },
  { path: '/signup', element: <Signup></Signup> }
]);

export default router