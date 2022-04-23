import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export default function FontSelect({ font, handleChange }) {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Font Face</InputLabel>
      <Select
        fullWidth
        size="small"
        value={font}
        label="Font Face"
        onChange={handleChange}
      >
        <MenuItem
          sx={{ fontFamily: "'Fira Code', monospace" }}
          value="'Fira Code', monospace"
        >
          Fira Code
        </MenuItem>
        <MenuItem
          value="'Roboto Mono', monospace"
          sx={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          Roboto Mono
        </MenuItem>
        <MenuItem
          value="'Anonymous Pro', monospace"
          sx={{ fontFamily: "'Anonymous Pro', monospace" }}
        >
          Anonymous Pro
        </MenuItem>
      </Select>
    </Box>
  );
}
