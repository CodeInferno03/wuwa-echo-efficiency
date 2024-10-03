// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import colors from "../../utils/websiteColors";

import aboutMeData from "../../website_data/about_me.json";

function AboutMePageAppBar() {
  const fullUserName = `${aboutMeData.first_name} ${aboutMeData.last_name}'s`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: colors.appbarBackground,
          height: "101px",
          display: "flex",
          alignItems: "stretch",
          paddingLeft: "15%", // to put the title into the appbar correct place
          maxWidth: "2500px",
          width: "100%",
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: colors.appbarText, fontWeight: 700 }}>
            {fullUserName} Personal Website
          </Typography>
          <div className="ishaan-details">
            <Typography>

            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AboutMePageAppBar;
