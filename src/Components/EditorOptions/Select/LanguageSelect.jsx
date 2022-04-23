import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const languageData = [
  {
    language_id: 50,
    name: "c",
    label: "C",
  },
  {
    language_id: 54,
    name: "cpp",
    label: "C++",
  },
  {
    language_id: 62,
    name: "java",
    label: "Java",
  },
  {
    language_id: 51,
    name: "csp",
    label: "C#",
  },
];

export default function LanguageSelect({
  language,
  handleChange,
  handleLanguageID,
}) {
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
        {languageData.map((langs) => (
          <MenuItem
            onClick={() => handleLanguageID(langs.language_id)}
            value={langs.name}
          >
            {langs.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
