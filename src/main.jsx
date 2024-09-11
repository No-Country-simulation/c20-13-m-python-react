import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Views/Home.jsx";
import { Products } from "./assets/Views/Products.jsx";
import { NotFound } from "./assets/Views/NotFound.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./assets/components/Cart.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Sidebar from "./assets/components/sidebar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/*",
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

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
