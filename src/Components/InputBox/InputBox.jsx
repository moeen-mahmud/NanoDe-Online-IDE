import React, { useRef } from "react";
import { Box } from "@mui/system";
import { FilledInput, OutlinedInput, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const InputBox = ({ userInput, handleChange, handleAddNewLine }) => {
  // Focus ref
  const inputFocusRef = useRef();

  return (
    <Box>
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <PersonIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Input
        </Typography>
      </Stack>
      {userInput?.map((input, index) => (
        <Box
          bgcolor="background.secondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            p: 1,
            borderTopLeftRadius: index === 0 ? "4px" : "0px",
            borderTopRightRadius: index === 0 ? "4px" : "0px",
            borderBottomLeftRadius: index === userInput.length - 1 ? "4px" : 0,
            borderBottomRightRadius: index === userInput.length - 1 ? "4px" : 0,
          }}
          key={index}
        >
          <Typography color="text.muted" variant="body1">
            {input?.line + 1}
          </Typography>
          <OutlinedInput
            autoFocus={true}
            autoComplete="off"
            value={userInput?.stdin}
            onChange={(event) => handleChange(event, index)}
            fullWidth
            size="small"
            onKeyDown={(event) => {
              handleAddNewLine(event, input?.stdin);
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default InputBox;
