import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ThemeSelect from "../EditorOptions/Select/ThemeSelect";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Stack } from "@mui/material";
import FontSelect from "../EditorOptions/Select/FontSelect";
import FontSize from "../EditorOptions/FontSize/FontSize";
import LanguageSelect from "../EditorOptions/Select/LanguageSelect";

const drawerWidth = 240;

const Layout = ({ children, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Stack
        p={2}
        direction="row"
        justifyContent="flext-start"
        alignItems="center"
        width={"100%"}
        gap={1}
      >
        <DashboardIcon /> <Typography variant="subtitle1">Settings</Typography>
      </Stack>
      <Divider />
      <ListItem>
        <LanguageSelect
          language={props.codeLanguage}
          handleChange={props.handleLanguageChange}
        />
      </ListItem>
      <Divider />
      <List>
        <ListItem>
          <ThemeSelect
            codeTheme={props.themeSelect}
            handleChange={props.handleThemeSelect}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <FontSelect
            font={props.codeFont}
            handleChange={props.handleFontFamilyChange}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <FontSize
            fontSize={props.codeFontSize}
            handleChange={props.handleChangeFontSize}
          />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <DashboardIcon />
          </IconButton>
          <Typography noWrap component="div">
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CodeOffIcon /> NanoDE
            </Typography>
            <Typography variant="subtitle2" color="text.muted">
              Write nano code snippets effeciently
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
