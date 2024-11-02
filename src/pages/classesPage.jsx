import DataAccordion from "../components/dataAccordion";
import GeneralPage from "./totalGeneralPage";
import courseData from "./../website_data/courses.json";

function ClassesPage() {
  const convertToKey = (courseNum) => {
    return courseNum.toLowerCase().replace(/\s+/g, "");
  };

  return (
    <>
      <GeneralPage>
        {courseData.map((courseDetails) => (
          <DataAccordion
            key={convertToKey(courseDetails.courseNumber)}
            accordionTitle={[
              `${courseDetails.courseNumber}: ${courseDetails.courseName}`,
              `${courseDetails.courseTakenQuarter}, ${courseDetails.courseTakenYear}`,
            ]}
            accordionData={`${courseDetails.courseDescription}`}
          />
        ))}
      </GeneralPage>
    </>
  );
}

export default ClassesPage;
