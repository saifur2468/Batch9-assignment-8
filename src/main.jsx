import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AllApps from "./Component/AllApps";
import CardDetailes from "./Component/CardDetailes";
import ErrorPage from "./Component/Error";
import Installation from "./Component/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>
  },

  {
    path:"AllApps",
    element:<AllApps></AllApps>
  },
{
        path: "/card-details/:id", 
        element: <CardDetailes />,
        loader: async () => {
          const response = await fetch('/card.json'); 
          return response.json();
        },
}
,
{
  path:"/Installation",
  element:<Installation></Installation>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
