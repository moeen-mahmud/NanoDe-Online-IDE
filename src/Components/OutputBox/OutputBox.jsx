import React from "react";
import { Box } from "@mui/system";
import { Paper, Stack, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const OutputBox = ({ status, outputData }) => {
  return (
    <Box width="100%">
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <SmartToyIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Output
        </Typography>
      </Stack>
      <Paper sx={{ borderRadius: "3px", height: 300, p: 3 }}>
        <Typography
          color={status === "Accepted" ? "text.tertiary" : "text.secondary"}
          sx={{ fontFamily: "'Fira Code', monospace" }}
          variant="caption"
        >
          {outputData ? (
            <>{outputData}</>
          ) : (
            <Typography color="text.tertiary">
              Write some code, grab some coffee ☕ then hit the run to see the
              OUTPUT!
            </Typography>
          )}
        </Typography>
      </Paper>
    </Box>
  );
};

export default OutputBox;
