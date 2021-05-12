import { Box, Container, Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PrintIcon from '@material-ui/icons/Print';
import React, { useEffect, useState } from "react";
import { NO_RECORDS_FOUND } from "../../../../../utils/constants/index";
import { AppUtils } from "../../../../../utils/appUtils";
import styles from "./style";
import { DateUtils } from "../../../../../utils/dateUtils";

export default function YojanaReportTable(props) {
  const classes = styles();
  const [mainTableData, setMainTableData] = useState(props.tableData);

  useEffect(() => {
    if (props.tableData !== null) {
      setMainTableData(props.tableData);
    }
  }, [props.tableData]);

  return (
    <>
      {mainTableData && JSON.stringify(mainTableData) !== "{}" && (
        <Container maxWidth="xl" className={classes.root} disableGutters>
          <h2 className={classes.yojanaReportTableHeading}>खोजी मापदण्ड भित्र फेला परेका रेकर्डहरू</h2>
          <Box className={classes.actionItems}>
            <Tooltip title="रिपोर्ट प्रिन्ट गर्नुहोस्" placement="top" arrow>
              <PrintIcon className={classes.printIcon} />
            </Tooltip>
          </Box>
          <TableContainer>
            <Table
              classes={{ root: "table-bordered" }}
              size="small"
              aria-label="Yojana Report Table"
            >
              <TableHead classes={{ root: "align-center" }}>
                <TableRow>
                  <TableCell>क्र.सं.</TableCell>
                  <TableCell>आयोजनाको नाम</TableCell>
                  <TableCell>अध्यक्षको नाम</TableCell>
                  <TableCell>ठेगाना</TableCell>
                  <TableCell>विनियोजित रकम रु.</TableCell>
                  <TableCell>लागत रकम रु.</TableCell>
                  <TableCell>सम्झौता मिति</TableCell>
                  <TableCell>सम्पन्‍न मिति</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mainTableData.length === 0 ? (
                  <TableRow>
                    <TableCell
                      align="center"
                      size="medium"
                      colSpan={10}
                    >{NO_RECORDS_FOUND}</TableCell>
                  </TableRow>
                ) : (
                    mainTableData.map((row, index) => (
                      <TableRow key={row.id}>
                        <TableCell align="center">{AppUtils.replaceWithNepaliDigit(index + 1)}</TableCell>
                        <TableCell align="center">{row.aayojanaName || "-"}</TableCell>
                        <TableCell align="center">{row.chairmanName || "-"}</TableCell>
                        <TableCell align="center">{row.aayojanaAddress || "-"}</TableCell>
                        <TableCell align="center">{row.allocatedBudget ? AppUtils.replaceWithNepaliDigit(row.allocatedBudget) : "-"}</TableCell>
                        <TableCell align="center">{row.finalCompletionAmount ? AppUtils.replaceWithNepaliDigit(row.finalCompletionAmount) : "-"}</TableCell>
                        <TableCell align="center">{AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(row.aayojanaStartDate))}</TableCell>
                        <TableCell align="center">{AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(row.aayojanaFinishDate))}</TableCell>
                      </TableRow>
                    ))
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}
