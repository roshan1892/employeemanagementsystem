import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NO_RECORDS_FOUND } from "../../../../../utils/constants/index";
import { AppUtils } from "../../../../../utils/appUtils";
import { DateUtils } from "../../../../../utils/dateUtils";
export default function YojanaSamjhautaTable(props) {
  const [mainTableData, setMainTableData] = useState(props.tableData);

  useEffect(() => {
    if (props.tableData !== null) {
      setMainTableData(props.tableData);
    }
  }, [props.tableData]);

  return (
    <TableContainer>
      <Table
        classes={{ root: "table-bordered" }}
        aria-label="a dense table"
      >
        <TableHead classes={{ root: "align-center" }}>
          <TableRow>
            <TableCell rowSpan={2}>क्र.सं.</TableCell>
            <TableCell colSpan={5}>आयोजनाको विवरण</TableCell>
            <TableCell colSpan={3}>उपभोक्त्ता समितिको विवरण</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>आयोजनाको नाम</TableCell>
            <TableCell>आयोजना सुरु हुने मिति</TableCell>
            <TableCell>आयोजना सम्पन्‍न हुने मिति</TableCell>
            <TableCell>आयोजना स्थल</TableCell>
            <TableCell>उद्देश्य</TableCell>
            <TableCell>नाम</TableCell>
            <TableCell>ठेगाना</TableCell>
            <TableCell>अध्यक्षको नाम</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={9}
                align="center"
                size="medium"
              >
                {NO_RECORDS_FOUND}
              </TableCell>
            </TableRow>
          ) : (
              mainTableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{AppUtils.replaceWithNepaliDigit(index + 1)}</TableCell>
                  <TableCell>
                    <Link href={"yojana-details?id=" + row.id} variant="body2">
                      {row.aayojanaName ? row.aayojanaName : "-"}
                    </Link>
                  </TableCell>
                  <TableCell>{row.aayojanaSuruHuneMiti ? AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(row.aayojanaSuruHuneMiti)) : "-"}</TableCell>
                  <TableCell>{row.aayojanaSampannaHuneMiti ? AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(row.aayojanaSampannaHuneMiti)) : "-"}</TableCell>
                  <TableCell>{row.aayojanaAddress ? row.aayojanaAddress : "-"}</TableCell>
                  <TableCell>{row.aayojanaGoal ? row.aayojanaGoal : "-"}</TableCell>
                  <TableCell>{row.consumerCommitteeName ? row.consumerCommitteeName : "-"}</TableCell>
                  <TableCell>{row.consumerCommitteeAddress ? row.consumerCommitteeAddress : "-"}</TableCell>
                  <TableCell>{row.consumerCommitteeChairmanName ? row.consumerCommitteeChairmanName : "-"}</TableCell>
                </TableRow>
              ))
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}