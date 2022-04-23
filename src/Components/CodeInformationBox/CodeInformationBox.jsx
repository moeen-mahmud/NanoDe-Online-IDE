import React from "react";
import { Box } from "@mui/system";
import { Table, TableBody, TableContainer, TableRow } from "@mui/material";

const CodeInformationBox = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CodeInformationBox;
