import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export default function ThemeSelect({ codeTheme, handleChange }) {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Code Theme</InputLabel>
      <Select
        fullWidth
        size="small"
        labelId="demo-select-small"
        id="demo-select-small"
        value={codeTheme}
        label="Code Theme"
        onChange={handleChange}
      >
        <MenuItem value="vs-dark">Dark</MenuItem>
        <MenuItem value="light">Light</MenuItem>
      </Select>
    </Box>
  );
}
