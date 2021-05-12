import { Container, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Print } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { NO_RECORDS_FOUND } from "../../../../utils/constants/index";
import { DateUtils } from "../../../../utils/dateUtils";

export default function KaryadeshReportTable(props) {
  const [mainTableData, setMainTableData] = useState(props.tableData);
  const printComponentRef = useRef();

  useEffect(() => {
    if (props.tableData !== null) {
      setMainTableData(props.tableData);
    }
  }, [props.tableData]);

  return (
    <>
      {mainTableData && JSON.stringify(mainTableData) !== "{}" && (
        <Container>
          <h2 >खोजी मापदण्ड भित्र फेला परेका रेकर्डहरू</h2>
          <ReactToPrint
            trigger={() => <Print />}
            content={() => printComponentRef.current}
          />
          <TableContainer ref={printComponentRef}>
            <Table
              classes={{ root: "table-bordered" }}
              size="small"
              aria-label="Karyadesh Report Table"
            >
              <TableHead classes={{ root: "align-center" }}>
                <TableRow>
                  <TableCell>क्र.सं.</TableCell>
                  <TableCell>योजनको नाम</TableCell>
                  <TableCell>सम्झौता मिति</TableCell>
                  <TableCell>सम्पन्न गर्नुपर्ने मिति</TableCell>
                  <TableCell>साईट इन्चार्ज</TableCell>
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
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Link href={"karyadesh-details?id=" + row.id} variant="body2">
                            {row.planningName ? row.planningName : "-"}
                          </Link>
                        </TableCell>
                        <TableCell>{DateUtils.getDateFromMilliseconds(row.agreementDate)}</TableCell>
                        <TableCell>{DateUtils.getDateFromMilliseconds(row.completionDate)}</TableCell>
                        <TableCell>{row.siteInchargePersonName}</TableCell>
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
