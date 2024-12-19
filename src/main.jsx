import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// All Pages
import RootPage from "./pages/rootPage";

const base_url = "/ishaan-singh-website";

const router = createBrowserRouter([
  {
    path: `${base_url}/`,
    element: <RootPage />,
    errorElement: <div />
  },
  {
    path: `${base_url}/echo-efficiency`,
    element: <RootPage />,
    errorElement: <div />
  },
  {
    path: `${base_url}/build-efficiency`,
    element: <RootPage />,
    errorElement: <div />
  },
  {
    path: `${base_url}/mock-build`,
    element: <RootPage />,
    errorElement: <div />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
