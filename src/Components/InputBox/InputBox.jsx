import React, { useRef, useState } from "react";
import { Box } from "@mui/system";
import { FilledInput, OutlinedInput, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HelpPopper from "../Utility/helpPopper";

const InputBox = ({ userInput, handleChange, handleAddNewLine }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  // Handle show popper
  const handleHelpPopper = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" mb={2} gap={1}>
          <PersonIcon sx={{ color: "#00E0C4" }} />
          <Typography variant="subtitle1" color="text.secondary">
            Input
          </Typography>
        </Stack>
        <Box>
          <HelpOutlineIcon
            onClick={handleHelpPopper("right-start")}
            sx={{ cursor: "pointer", color: "#00E0C4", mt: -1 }}
          />
        </Box>
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
      <HelpPopper anchorEl={anchorEl} open={open} placement={placement} />
    </Box>
  );
};

export default InputBox;
