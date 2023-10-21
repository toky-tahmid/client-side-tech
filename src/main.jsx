import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AddProduct from "./Components/AddProduct/AddProduct";
import Private from "./Private/Private";
import AuthProvider from "./Provider/AuthProvider";
import BrandsCard from "./Components/Brands/BrandsCard";
import BrandsDetails from "./Components/Brands/BrandsDetails";
import UpdateCard from "./Components/Brands/UpdateCard";
import MyCart from "./Components/Cart/MyCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/brands.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
       {
        path: "/myCart",
        element: <Private><MyCart></MyCart></Private>,
        loader: () => fetch("https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/carts")
        
       },
       {
        path: "/addProduct",
        element: <Private><AddProduct></AddProduct></Private>,
       },
       {
        path: "/brandsCard/:brand_name",
        element: <BrandsCard></BrandsCard>,
        loader: () => fetch("https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/product")
       },
       
       {
        path:"/product/:id",
       element:<Private><BrandsDetails></BrandsDetails></Private>,
      loader:({params})=>fetch(`https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/product/${params.id}`)
      },
       {
        path:"/updateCard/:id",
       element:<Private><UpdateCard></UpdateCard></Private>,
      loader:({params})=>fetch(`https://server-side-pybun2ziy-tahmids-projects-090073b6.vercel.app/product/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
