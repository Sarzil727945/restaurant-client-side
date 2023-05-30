import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Laout/Main";
import Home from "../components/Home/Home";
import OurMenu from "../components/OurMenu/OurMenu";
import Orders from "../components/Orders/Orders";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "ourMenu",
        element: <OurMenu></OurMenu>
      },
      {
        path: 'order/:category',
        element: <Orders></Orders>
      },
      {
        path: 'order',
        element: <Orders></Orders>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
    ]
  },
]);