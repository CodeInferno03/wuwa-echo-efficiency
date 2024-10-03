import * as React from "react";
import NavigateToPage from "../../utils/navigationHandler";
import { Navigate } from "react-router-dom";

const RedirectToAboutMe = () => {
  const destinationPage = "/about-me";
  
  return (
    <>
        <Navigate to={`/ishaan-singh-website${destinationPage}`} />
    </>
  )
};

export default RedirectToAboutMe;
