import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ThemeSelect from "../EditorOptions/Select/ThemeSelect";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, Stack } from "@mui/material";
import FontSelect from "../EditorOptions/Select/FontSelect";
import FontSize from "../EditorOptions/FontSize/FontSize";
import LanguageSelect from "../EditorOptions/Select/LanguageSelect";

// Drawer width
const drawerWidth = 240;

// Layout
const Layout = ({ children, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer component
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
          handleLanguageID={props.handleLanguageID}
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
      <Box sx={{ position: "absolute", bottom: 0, width: "100%", p: 2 }}>
        <Typography
          component="p"
          variant="caption"
          color="text.muted"
          textAlign="center"
        >
          Made with ❤️ by{" "}
          <Typography variant="caption" component="span">
            <Link
              href="https://github.com/moeen-mahmud/"
              target="_blank"
              sx={{ cursor: "pointer" }}
              color="text.tertiary"
            >
              Moeen Mahmud
            </Link>
          </Typography>
        </Typography>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Appbar */}
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
          <Typography noWrap component="div" color="text.tertiary">
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
              Write nano code snippets efficiently
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Main drawers */}
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
          mb: 5,
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
