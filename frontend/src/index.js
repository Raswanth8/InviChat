import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SellerView from "./components/sellerView/sellerView";
import AdminDashboard from "./components/sellerView/AdminPanel";
// import Products from "./components/sellerView/Products";
// import Orders from "./components/sellerView/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/seller",
    element: <SellerView />,
  },
  {
    path: "/admin-panel",
    element: <AdminDashboard />,
  },
  // {
  //   path: "/admin-panel/orders",
  //   element: <Orders />,
  // },
  // {
  //   path: "/admin-panel/products",
  //   element: <Products />,
  // },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
