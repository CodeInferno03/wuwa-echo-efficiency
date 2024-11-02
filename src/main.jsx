import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// All Pages
import RootPage from "./pages/rootPage";
import AboutMePage from "./pages/aboutMePage";
import ResumePage from "./pages/resumePage";
import ClassesPage from "./pages/classesPage";
import EducationPage from "./pages/educationPage";
import SkillsPage from "./pages/skillsPage";
import WorkExperiencePage from "./pages/workExperiencePage";
import ProjectsPage from "./pages/projectsPage";

const base_url = "/ishaan-singh-website";

const router = createBrowserRouter([
  {
    path: `${base_url}/`,
    element: <RootPage />,
  },
  {
    path: `${base_url}/about-me`,
    element: <AboutMePage />,
  },
  {
    path: `${base_url}/classes`,
    element: <ClassesPage />,
  },
  {
    path: `${base_url}/education`,
    element: <EducationPage />,
  },
  {
    path: `${base_url}/skills`,
    element: <SkillsPage />,
  },
  {
    path: `${base_url}/work-experience`,
    element: <WorkExperiencePage />,
  },
  {
    path: `${base_url}/projects`,
    element: <ProjectsPage />,
  },
  {
    path: `${base_url}/resume`,
    element: <ResumePage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
