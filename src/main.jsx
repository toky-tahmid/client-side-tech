import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MyCart from "./Components/Cart/Mycart";
import AddProduct from "./Components/AddProduct/AddProduct";
import Private from "./Private/Private";
import AuthProvider from "./Provider/AuthProvider";
import BrandsCard from "./Components/Brands/BrandsCard";
import BrandsDetails from "./Components/Brands/BrandsDetails";
import UpdateCard from "./Components/Brands/UpdateCard";
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
        
       },
       {
        path: "/addProduct",
        element: <Private><AddProduct></AddProduct></Private>,
       },
       {
        path: "/brandsCard/:brand_name",
        element: <Private><BrandsCard></BrandsCard></Private>,
        loader: () => fetch("http://localhost:5000/product")
       },
       
       {
        path:"/product/:id",
       element:<BrandsDetails></BrandsDetails>,
      loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
       {
        path:"/updateCard/:id",
       element:<UpdateCard></UpdateCard>,
      loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
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
