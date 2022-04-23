import React from "react";
import { LinearProgress, Modal } from "@mui/material";
import { Box } from "@mui/system";

const PrimaryLinearProgress = ({ isLoading, setIsLoading }) => {
  return (
    <Modal
      open={isLoading}
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          setIsLoading(false);
        }
      }}
      disableAutoFocus
      disableEscapeKeyDown
      keepMounted
    >
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <Box width={"100%"}>
          <LinearProgress sx={{ height: "10px" }} color="tertiary" />
        </Box>
      </Box>
    </Modal>
  );
};

export default PrimaryLinearProgress;
