import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/addCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/updateCoffee/UpdateCoffee.jsx";
import Main from "./layout/Main.jsx";
import Home from "./components/home/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>
      },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
