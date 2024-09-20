import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Views/Home.jsx";
import { Products } from "./assets/Views/Products.jsx";
import { NotFound } from "./assets/Views/NotFound.jsx";

import { ProductDetails } from "./assets/Views/ProductDetails.jsx";

import { NotFound } from "./assets/Views/NotFound.jsx";
import AboutUs from "./assets/Views/AboutUs.jsx";
import { Pay } from "./assets/Views/Pay.jsx";
import { Checkout } from "./assets/Views/CheckOut.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import App from "./App.jsx";
import RegistrationForm from "./assets/Views/RegistrationForm.jsx";
import Navbar from "./assets/components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/pay",
    element: <Pay />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/*",
    element: <NotFound/>,
  }
  {
    path: "/productdetails/",
    element: <ProductDetails />,
  },
  {
    path: "/registrationform/",
    element: <RegistrationForm />
  },
  {
    path: "/*",

    element: <NotFound />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/navbar",
    element: <Navbar/>
  },


]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
