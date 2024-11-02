// import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function DataAccordion(props) {
  return (
    <div
    style={{
      paddingBottom: "15px"
    }}>
      <Accordion
      sx={{
        // paddingBottom: "10px",
        border: "1px solid black"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: 'flex',
            fontSize: "22px",
            fontWeight: "medium",
            // paddingBottom: "5px",
            backgroundColor: "#ACD1F5",
            border: "1px solid black",
            justifyContent: 'space-between'
          }}
        >
          <p
          style={{'backgroundColor': 'red'}}
          >{props.accordionTitle[0]}</p> 
          <p
          style={{'backgroundColor': 'green'}}
          >{props.accordionTitle[1]}</p>
          
        </AccordionSummary>
        <AccordionDetails>
          {props.accordionData}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

DataAccordion.propTypes = {
  accordionTitle: PropTypes.array.isRequired,
  accordionData: PropTypes.string.isRequired
}


export default DataAccordion;

// function DataAccordion() {
//     return (
//       <div>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1-content"
//             id="panel1-header"
//           >
//             Accordion 1
//           </AccordionSummary>
//           <AccordionDetails>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2-content"
//             id="panel2-header"
//           >
//             Accordion 2
//           </AccordionSummary>
//           <AccordionDetails>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </AccordionDetails>
//         </Accordion>
//         <Accordion defaultExpanded>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3-content"
//             id="panel3-header"
//           >
//             Accordion Actions
//           </AccordionSummary>
//           <AccordionDetails>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </AccordionDetails>
//           <AccordionActions>
//             <Button>Cancel</Button>
//             <Button>Agree</Button>
//           </AccordionActions>
//         </Accordion>
//       </div>
//     );
//   }
