import React from "react";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

const PrimaryCircularProgress = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.background.default}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="tertiary" />
    </Box>
  );
};

export default PrimaryCircularProgress;
