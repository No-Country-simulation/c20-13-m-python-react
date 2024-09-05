import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Views/Home.jsx";
import { Products } from "./assets/Views/Products.jsx";
import { NotFound } from "./assets/Views/NotFound.jsx";
import AboutUs from "./assets/Views/AboutUs.jsx";
import { Pay } from "./assets/Views/Pay.jsx";
import { Checkout } from "./assets/Views/CheckOut.jsx";
import "./index.css";
import "bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path:"/pay",
    element: <Pay/>
  },
  {
    path:"/checkout",
    element: <Checkout/>
  },
  {
    path: "/*",
    element: <NotFound/>
  },
  

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
