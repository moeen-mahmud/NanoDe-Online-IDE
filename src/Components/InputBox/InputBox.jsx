import React from "react";
import { Box } from "@mui/system";
import { Button, FilledInput, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const InputBox = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <PersonIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Input
        </Typography>
      </Stack>
      <FilledInput multiline rows={6} fullWidth />
      <Stack mt={3} direction="row" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          color="tertiary"
          startIcon={<RocketLaunchIcon />}
          fullWidth
        >
          Run
        </Button>
      </Stack>
    </Box>
  );
};

export default InputBox;
