// import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ConstructionIcon from "@mui/icons-material/Construction";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

// utils
import NavigateToPage from "../utils/navigationHandler";
import colors from "../utils/websiteColors";
import aboutMeData from "../website_data/about_me.json";

const drawerWidth = 240;

function GeneralDrawer() {
  const drawerElements = [
    { name: "About Me", icon: <AccountBoxIcon />, redirect: null },
    { name: "Classes", icon: <AutoStoriesIcon />, redirect: null },
    { name: "Resume", icon: <ArticleIcon />, redirect: null },
    { name: "Education", icon: <SchoolIcon />, redirect: null },
    { name: "Skills", icon: <BookmarksIcon />, redirect: null },
    { name: "Work Experience", icon: <WorkIcon />, redirect: null },
    { name: "Projects", icon: <ConstructionIcon />, redirect: null },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      redirect: aboutMeData.links.linkedin,
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      redirect: aboutMeData.links.github,
    },
  ];

  const handleNavigation = (targetRoute) => {
    const specialRoutes = ["LinkedIn", "GitHub"];

    if (!specialRoutes.includes(targetRoute)) {
      return NavigateToPage(targetRoute);
    }
  };

  const drawer = (
    <div>
      <Toolbar sx={{ height: "100px" }} />
      <Divider />
      <List>
        {drawerElements.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={handleNavigation(item.name)}
              href={item.redirect}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ color: colors.drawerText }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              backgroundColor: colors.drawerBackground,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default GeneralDrawer;
