import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import React from "react";
import { NO_RECORDS_FOUND } from "../../../../utils/constants";

export default function MunicipalitiesList(props) {

  function editRow(rowId) {
    props.onEditRow(rowId);
  }

  return (
    <Container>
      <TableContainer>
        <Table classes={{ root: "table-bordered" }} size="small" aria-label="a dense table">
          <TableHead classes={{ root: "align-center" }}>
            <TableRow>
              <TableCell>प्रदेश</TableCell>
              <TableCell>जिल्ला</TableCell>
              <TableCell>पालिकाको नाम</TableCell>
              <TableCell>ठेगाना</TableCell>
              <TableCell>फोन नम्बर</TableCell>
              <TableCell>ईमेल</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableData.length === 0 ?
              (
                <TableRow>
                  <TableCell colSpan={6} align="center" size="medium">{NO_RECORDS_FOUND}</TableCell>
                </TableRow>) :
              props.tableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{row.province}</TableCell>
                  <TableCell>{row.district}</TableCell>
                  <TableCell><a href={`municipality-home?id=${row.id}`}>{row.municipalityName}</a></TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => editRow(row.id)}
                      aria-label="edit municipality"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
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
