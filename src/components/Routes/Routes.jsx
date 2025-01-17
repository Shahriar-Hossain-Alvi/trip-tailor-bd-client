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
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import AllPackages from "../Pages/AllPackages/AllPackages";
import MyBookings from "../Pages/Dashboard/TouristDashboardRoutes/MyBookings";
import MyWishlist from "../Pages/Dashboard/TouristDashboardRoutes/MyWishlist";
import RequestToaAdmin from "../Pages/Dashboard/TouristDashboardRoutes/RequestToaAdmin";
import AdminRoute from "./AdminRoute";
import TourGuideRoute from "./TourGuideRoute";
import AddPackage from "../Pages/Dashboard/AdminDashboardRoutes/AddPackage";
import ManageUsers from "../Pages/Dashboard/AdminDashboardRoutes/ManageUsers";
import TourGuideDetails from "../Pages/TourGuideDetails/TourGuideDetails";
import MyAssignedTours from "../Pages/Dashboard/TourGuideDashboardRoutes/MyAssignedTours";
import TourTypesByCategory from "../Pages/TourTypesByCategory/TourTypesByCategory";
import AboutUs from "../Pages/About Us/AboutUs";
import ContactUs from "../Pages/Contact Us/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import PaymentGateway from "../Pages/Dashboard/TouristDashboardRoutes/PaymentGateway";


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
        loader: ({ params }) => fetch(`https://trip-tailor-bd-server.vercel.app/story/${params.id}`)
      },
      {
        path: '/allStories',
        element: <AllStories></AllStories>
      },
      {
        path: '/packageDetails/:id',
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) => fetch(`https://trip-tailor-bd-server.vercel.app/package/${params.id}`)
      },
      {
        path: '/allPackages',
        element: <AllPackages></AllPackages>
      },
      {
        path: '/tourGuideDetails/:id',
        element: <TourGuideDetails></TourGuideDetails>,
        loader: ({ params }) => fetch(`https://trip-tailor-bd-server.vercel.app/tourGuide/${params.id}`)
      },
      {
        path: '/packages/:tourTypes',
        element: <TourTypesByCategory></TourTypesByCategory>,
        loader: ({ params }) => {
          const encodedTourTypes = encodeURIComponent(params.tourTypes);
          return fetch(`https://trip-tailor-bd-server.vercel.app/tour-types/${encodedTourTypes}`);
        }
      },
      {
        path: '/community',
        element: <Community></Community>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      }
    ]
  },

  // dashboard routes
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      // ======== for tourist ========
      {
        path: "touristProfile",
        element: <TouristProfile></TouristProfile>
      },
      {
        path: 'myBookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: "myWishlist",
        element: <MyWishlist></MyWishlist>
      },
      {
        path: "requestToAdmin",
        element: <RequestToaAdmin></RequestToaAdmin>
      },
      {
        path: "myBookings/payment/:id",
        element: <PaymentGateway></PaymentGateway>
      },



      // =========== for tour guide ========
      {
        path: "tourGuideProfile",
        element: <TourGuideRoute><TourGuideProfile></TourGuideProfile></TourGuideRoute>
      },
      {
        path: 'assignedTours',
        element: <TourGuideRoute><MyAssignedTours></MyAssignedTours></TourGuideRoute>
      },



      // ============= for admin =============
      {
        path: "adminProfile",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: "addPackage",
        element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
    ]
  },

  // authentication routes
  { path: '/login', element: <Login></Login> },
  { path: '/signup', element: <Signup></Signup> }
]);

export default router