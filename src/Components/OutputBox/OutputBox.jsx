import React from "react";
import { Box } from "@mui/system";
import { FilledInput, Stack, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const OutputBox = () => {
  return (
    <Box width="100%">
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <SmartToyIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Output
        </Typography>
      </Stack>
      <FilledInput multiline rows={5} fullWidth />
    </Box>
  );
};

export default OutputBox;
