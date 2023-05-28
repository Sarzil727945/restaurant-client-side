import {
     createBrowserRouter,
   } from "react-router-dom";
import Main from "../Laout/Main";
import Home from "../components/Home/Home";
import OurMenu from "../components/OurMenu/OurMenu";

   export const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children:[
          {
               path: "/",
               element: <Home></Home>
          },
          {
            path: "ourMenu",
            element: <OurMenu></OurMenu>
          },
       ]
     },
   ]);