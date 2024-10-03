import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootPage from "./pages/rootPage";
import AboutMePage from "./pages/aboutMePage";

const base_url = "/ishaan-singh-website";

const router = createBrowserRouter([
  {
    path: `${base_url}/`,
    element: <RootPage />,
  },
  {
    path: `${base_url}/about-me`,
    element: <AboutMePage />
  },
  {
    path: `${base_url}/classes`,
    element: <div>Classes</div>,
  },
  {
    path: `${base_url}/education`,
    element: <div>Education</div>,
  },
  {
    path: `${base_url}/skills`,
    element: <div>Skills</div>,
  },
  {
    path: `${base_url}/work-experience`,
    element: <div>Work Experience</div>,
  },
  {
    path: `${base_url}/projects`,
    element: <div>Projects</div>
  },
  {
    path: `${base_url}/resume`,
    element: <div>Resume</div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
