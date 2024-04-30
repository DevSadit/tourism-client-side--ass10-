import { createBrowserRouter } from "react-router-dom";
import Root from "../src/Root";
import Home from "../src/Components/Home/Home";
import Register from "../src/Register/Register";
import Login from "../src/Login/Login";
import ErrorElement from "../src/ErrorElement/ErrorElement";
import AddTourist from "../src/Components/AddTourist/AddTourist";
import UpdateCard from "../src/Components/TouristSpots/UpdateCard";
import AllTouristSpot from "../src/Components/AlltouristSpot/AllTouristSpot";
import ViewDetailsCard from "../src/Components/ViewDetailsCard/ViewDetailsCard";
import PrivateRoute from "./PrivateRoute";
import MyList from "../src/Components/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://tourism-server-site.vercel.app/spotDetails`),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/alltouristspot",
        element: <AllTouristSpot></AllTouristSpot>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/addtouristspot",
        element: (
          <PrivateRoute>
            <AddTourist></AddTourist>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsCard></ViewDetailsCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-server-site.vercel.app/spotDetails/${params.id}`
          ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/updateCard/:id",
        element: (
          <PrivateRoute>
            <UpdateCard></UpdateCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-server-site.vercel.app/spotDetails/${params.id}`
          ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://tourism-server-site.vercel.app/spotDetails`),
        errorElement: <ErrorElement></ErrorElement>,
      },
    ],
  },
]);

export default router;
