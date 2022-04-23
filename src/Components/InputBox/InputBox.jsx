import React from "react";
import { Box } from "@mui/system";
import { FilledInput, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const InputBox = ({ userInput, handleChange }) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <PersonIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Input
        </Typography>
      </Stack>
      <FilledInput
        value={userInput}
        onChange={handleChange}
        multiline
        rows={6}
        fullWidth
      />
    </Box>
  );
};

export default InputBox;
