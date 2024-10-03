import { useNavigate } from "react-router-dom";

function NavigateToPage(targetRoute) {
  const navigate = useNavigate();

  const parsedRouteName = targetRoute.replaceAll(" ", "-").toLowerCase();

  return () => {
    navigate(`/ishaan-singh-website/${parsedRouteName}`);
  };
}

export default NavigateToPage;
