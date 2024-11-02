/**
 * This page's contents form the background of every page on the site
 */

import { Box } from "@mui/material";
import GeneralAppBar from "../components/allPagesAppBar";
import GeneralDrawer from "../components/allPagesDrawer";

// eslint-disable-next-line react/prop-types
function GeneralPage({ children }) {
  const drawerWidth = 240;

  return (
    <>
      <GeneralAppBar />
      <Box sx={{ display: "flex" }}>
        <GeneralDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
            {children}
        </Box>
        
      </Box>
    </>
  );
}

export default GeneralPage;
