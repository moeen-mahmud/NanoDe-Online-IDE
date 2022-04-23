import { InputLabel, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FontSize = ({ fontSize, handleChange }) => {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Font Size</InputLabel>
      <OutlinedInput
        size="small"
        type="number"
        fullWidth
        defaultValue={fontSize}
        onChange={handleChange}
      />
    </Box>
  );
};

export default FontSize;
