import GeneralPage from "./totalGeneralPage";
import AboutMePageData from "../components/aboutMePage/aboutMePageData";

function AboutMePage() {
  const pageData = <AboutMePageData />;

  return (
    <>
      <GeneralPage>{pageData}</GeneralPage>
    </>
  );
}

export default AboutMePage;
