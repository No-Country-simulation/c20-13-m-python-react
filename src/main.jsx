import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Views/Home.jsx";
import { Products } from "./assets/Views/Products.jsx";
import { ProductDetails } from "./assets/Views/ProductDetails.jsx"

import { NotFound } from "./assets/Views/NotFound.jsx";
import AboutUs from "./assets/Views/AboutUs.jsx";
import { Pay } from "./assets/Views/Pay.jsx";
import { Checkout } from "./assets/Views/CheckOut.jsx";
import "./index.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./assets/components/Cart.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Sidebar from "./assets/components/sidebar.jsx";
=======
import "bootstrap";
>>>>>>> 79ed973a913ac5c977d2b6fbbcbc11c27e2819c2

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

    element: <Pay />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/productdetails/",
    element: <ProductDetails />
  },
  {
    path: "/*",
<<<<<<< HEAD
    element: <NotFound/>
  },
  {
    path: "/navbar",
    element: <Navbar/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/sidebar",
    element: <Sidebar/>
  },

=======
    element: <NotFound />

  },
>>>>>>> 79ed973a913ac5c977d2b6fbbcbc11c27e2819c2
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
