import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';

// import App from "./App.js";
import Layout from "./components/Layout/Layout.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router = { router } />
  </React.StrictMode>
);