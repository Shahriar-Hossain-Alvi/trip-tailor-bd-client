import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/Community/Community";
import Login from "../Pages/Authentication/Login/Login";
import Signup from "../Pages/Authentication/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TouristProfile from "../Pages/Dashboard/TouristDashboardRoutes/TouristProfile";
import PrivateRoute from "./PrivateRoute";
import TouristStoryDetails from "../Pages/TouristStoryDetails/TouristStoryDetails";
import AllStories from "../Pages/AllStories/AllStories";
import TourGuideProfile from "../Pages/Dashboard/TourGuideDashboardRoutes/TourGuideProfile";
import AdminProfile from "../Pages/Dashboard/AdminDashboardRoutes/AdminProfile";
// import MyProfile from "../Pages/Dashboard/MyProfile";


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
        path: '/storyDetails/:id',
        element: <TouristStoryDetails></TouristStoryDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/story/${params.id}`)
      },
      {
        path: '/allStories',
        element: <AllStories></AllStories>
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //for tourist
      {
        path: "touristProfile",
        element: <TouristProfile></TouristProfile>
      },



      //for tour guide
      {
        path: "tourGuideProfile",
        element: <TourGuideProfile></TourGuideProfile>
      },



      //for admin
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>
      }
    ]
  },

  // authentication routes
  { path: '/login', element: <Login></Login> },
  { path: '/signup', element: <Signup></Signup> }
]);

export default router