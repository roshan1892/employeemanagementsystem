import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { NO_RECORDS_FOUND } from "../../../../utils/constants";


export default function MunicipalityUserList(props) {
  return (
    <Container>
      <TableContainer>
        <Table classes={{ root: "table-bordered" }} size="small" aria-label="Municipality Users">
          <TableHead classes={{ root: "align-center" }}>
            <TableRow>
              <TableCell>नाम</TableCell>
              <TableCell>ईमेल</TableCell>
              <TableCell>भूमिका</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableData.length === 0 ?
              (
                <TableRow>
                  <TableCell colSpan={3} align="center" size="medium">{NO_RECORDS_FOUND}</TableCell>
                </TableRow>) :
              props.tableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.userEmail}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              )
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container >
  );
}