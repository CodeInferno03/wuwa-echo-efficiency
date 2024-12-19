// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import "./fillerElement.css"

function FillerElement() {
  return (
    <Box
      sx={{
        display: 'flex',
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -60%)",
        '& > :not(style)': {
          backgroundColor: "#0e0447",
          m: 1,
          width: 600,
          height: 350,
        },
      }}
    >
      <Paper elevation={2}>
        <div className="filler-text">
            PAGE COMING SOON!
        </div>
      </Paper>
    </Box>
  );
}

export default FillerElement;