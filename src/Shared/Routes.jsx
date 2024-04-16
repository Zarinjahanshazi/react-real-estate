import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import LOgin from "../Pages/Login/LOgin";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import Estate from "../Pages/Estate";
import About from "../Pages/About/About";
import Property from "../Pages/Property/Property";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('/estate.json') 

        },
        // {
        //     path:'/estate',
        //     element:<Estate></Estate>,
        //     loader:() => fetch('/estate.json') 

        // },
        {
            path:'/updateProfile',
            element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/estate/:id',
          element:<PrivateRoute><Estate></Estate></PrivateRoute>,
          loader:() => fetch('/estate.json')
      },
        {
            path:'/login',
            element:<LOgin></LOgin>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/property',
          element:<Property></Property>
        },

      ]
    },
  ]);

  export default router;