import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy,Suspense } from "react";
import UserShimmer from "./components/AboutShimmer";
import Shimmer from "./components/shimmer";


const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));


const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<UserShimmer />}> <About /> </Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer />}> <Contact /> </Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<UserShimmer />}> <Cart /> </Suspense>,
      },
      {
        path: "/Restaurant/:resId",
        element: <RestrauntMenu />,
      }
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("Parent"));
root.render(<RouterProvider router={appRouter} />);
