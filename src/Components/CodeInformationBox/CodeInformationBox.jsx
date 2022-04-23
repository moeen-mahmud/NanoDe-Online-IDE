import React from "react";
import { Box } from "@mui/system";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";

const CodeInformationBox = ({ execTime, execMemory, status }) => {
  return (
    <Box mt={3} p={1} width={"100%"}>
      <Stack direction="row" alignItems="center" gap={1}>
        <SpeedIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Compile Informations
        </Typography>
      </Stack>
      {!status && (
        <Typography color="text.muted" variant="caption" component="div">
          Information will generate after a successfull compilation
        </Typography>
      )}
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            {status && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Status
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle2"
                    color={
                      status === "Accepted" ? "text.tertiary" : "text.secondary"
                    }
                  >
                    {status}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {execTime && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Time takes
                </TableCell>
                <TableCell align="right">{execTime}s</TableCell>
              </TableRow>
            )}
            {execMemory && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Memory Used
                </TableCell>
                <TableCell align="right">{execMemory}kb</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CodeInformationBox;
