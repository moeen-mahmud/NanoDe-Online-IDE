import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ThemeSelect({ codeTheme, handleChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Code Theme</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={codeTheme}
        label="Code Theme"
        onChange={handleChange}
      >
        <MenuItem value="vs-dark">Dark</MenuItem>
        <MenuItem value="light">Light</MenuItem>
      </Select>
    </FormControl>
  );
}
