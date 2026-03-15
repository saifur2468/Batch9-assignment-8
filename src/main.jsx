import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import AllApps from "./Component/AllApps";
import CardDetailes from "./Component/CardDetailes";
import ErrorPage from "./Component/Error";
import Installation from "./Component/Installation";
import Layout from "./Component/Layout";
import Home from "./Component/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AllApps",
        element: <AllApps />,
      },
      {
        path: "card-details/:id",
        element: <CardDetailes />,
        loader: async () => {
          const response = await fetch("/card.json");
          return response.json();
        },
      },
      {
        path: "Installation",
        element: <Installation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);