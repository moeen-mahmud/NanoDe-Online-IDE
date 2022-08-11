import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";

// It can be found on /languages endpoint
const languageData = [
  {
    language_id: 63,
    name: "javascript",
    label: "JavaScript",
  },
  {
    language_id: 74,
    name: "typescript",
    label: "TypeScript",
  },
  {
    language_id: 71,
    name: "python",
    label: "Python 3",
  },
  {
    language_id: 73,
    name: "rust",
    label: "Rust",
  },
  {
    language_id: 60,
    name: "go",
    label: "Go",
  },
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

export default function LanguageSelect({ language, handleChange }) {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Language</InputLabel>
      <Autocomplete
        fullWidth
        options={languageData}
        getOptionLabel={(option) => option.label}
        size="small"
        defaultValue={languageData[0]}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={handleChange}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Typography component="p" variant="subtitle2">
              {option.label}
            </Typography>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            color="primary"
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Box>
  );
}
