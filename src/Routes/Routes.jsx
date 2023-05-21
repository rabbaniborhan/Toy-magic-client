import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/addtoys',
        element:<AddToys></AddToys>
      },
      {
        path:'/mytoys',
        element:<MyToys></MyToys>
      },
      {
        path:'/alltoys',
        element:<AllToys></AllToys>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/toy/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:'/updatetoy/:id',
        element:<UpdateToy></UpdateToy>

      }
    ],
  },
]);

export default router;
