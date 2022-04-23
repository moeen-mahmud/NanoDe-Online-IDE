import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export default function LanguageSelect({ language, handleChange }) {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Language</InputLabel>
      <Select
        fullWidth
        size="small"
        value={language}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value="c">C</MenuItem>
        <MenuItem value="cpp">C++</MenuItem>
        <MenuItem value="java">Java</MenuItem>
        <MenuItem value="csp">C#</MenuItem>
      </Select>
    </Box>
  );
}
