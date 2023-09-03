import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "base", element: <Base /> },
      { path: "toppings", element: <Toppings /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
