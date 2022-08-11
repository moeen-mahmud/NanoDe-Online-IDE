import { Divider, Fade, Paper, Popper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HelpPopper = ({ open, anchorEl, placement }) => {
  return (
    <Popper
      sx={{ width: "10%" }}
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Box p={1.5}>
              <Typography component="header" variant="button">
                STDIN
              </Typography>
              <Typography color="text.muted" component="p" variant="caption">
                In general sense, using <strong>STDIN</strong> to input source
                code to the compiler. Instead of using a dedicated terminal and
                waiting for the compile first, you can input them before
                compilation just like other online judges.
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography color="text.muted" component="p" variant="caption">
                For multiple input it is recommended to use multiple lines by
                pressing enter. Although you can enter multiple input by
                separating them with a space.{" "}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                It's not recommended!
              </Typography>
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default HelpPopper;
