import { Box, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { AppUtils } from "../../../../../utils/appUtils";
import YOJANA, { API_URL } from "../../../../../api/api";
import { NO_RECORDS_FOUND, POSITION_OPTIONS, AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG, SOMETHING_WENT_WRONG, SUCCESS } from "../../../../../utils/constants/index";
import { DateUtils } from "../../../../../utils/dateUtils";
import CustomModal from "../../../../../components/modal/CustomModal";
import AddAlertMessage from "../../../../../components/alert/Alert";
import styles from "./style";

export default function ConsumerCommitteeDetails({ onConsumerCommitteeDetailsUpdate, onEditRow, ...props }) {
  const classes = styles();
  const [consumerCommitteeData, setConsumerCommitteeData] = useState({});
  const [showDeleteConsumerCommitteeOfficialConfirmationModal, setShowDeleteConsumerCommitteeOfficialConfirmationModal] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState();

  useEffect(() => {
    if (props.consumerCommitteeData) {
      setConsumerCommitteeData(props.consumerCommitteeData);
    }
  }, [props.consumerCommitteeData]);

  function handleEditRow(rowId) {
    onEditRow(rowId);
  };

  function handleModalClose() {
    setShowDeleteConsumerCommitteeOfficialConfirmationModal(false);
    setSelectedRowId(null);
  }

  function handleDeleteRow(rowId) {
    setShowDeleteConsumerCommitteeOfficialConfirmationModal(true);
    setSelectedRowId(rowId);
  };

  function deleteRow() {
    setShowDeleteConsumerCommitteeOfficialConfirmationModal(false);
    YOJANA.delete(API_URL.consumerCommitteeOfficial + "?consumerCommitteeId=" + consumerCommitteeData.id + "&&consumerCommitteeOfficialId=" + selectedRowId)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === SUCCESS) {
          onConsumerCommitteeDetailsUpdate();
        }
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  function getPostLabelForOfficial(officialPost) {
    return officialPost ? POSITION_OPTIONS.find(obj => obj.value === officialPost).label : "";
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography>क) गठन भएको मिति:{consumerCommitteeData.consumerCommitteeEstablishedDate ? DateUtils.getDateFromMilliseconds(consumerCommitteeData.consumerCommitteeEstablishedDate) : "-"}</Typography>
      <Typography>ख) पदाधिकारीको नाम र ठेगाना (नागरिकता प्रमाणपत्र नम्बर र जिल्ला)</Typography>
      <Box py={1}>
        <TableContainer>
          <Table
            classes={{ root: "table-bordered" }}
            size="small"
            aria-label="consumer committee officials table"
          >
            <TableHead classes={{ root: "align-center" }}>
              <TableRow>
                <TableCell>क्र.सं.</TableCell>
                <TableCell>पद</TableCell>
                <TableCell>नामथर</TableCell>
                <TableCell>बुवा/पतिको नाम</TableCell>
                <TableCell>बाजेको नाम</TableCell>
                <TableCell>ना.प्र.नं.</TableCell>
                <TableCell>ठेगाना</TableCell>
                <TableCell>सम्पर्क नं.</TableCell>
                <TableCell>हस्ताक्षर</TableCell>
                <TableCell>कैफियत</TableCell>
                <TableCell>सम्पादन</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                consumerCommitteeData.consumerCommitteeOfficialList ? (
                  consumerCommitteeData.consumerCommitteeOfficialList.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell>{AppUtils.replaceWithNepaliDigit(index + 1)}</TableCell>
                      <TableCell>{getPostLabelForOfficial(row.post)}</TableCell>
                      <TableCell>{row.fullName}</TableCell>
                      <TableCell>{row.fatherOrHusbandName || "-"}</TableCell>
                      <TableCell>{row.grandFatherName || "-"}</TableCell>
                      <TableCell>{row.citizenshipNumber}</TableCell>
                      <TableCell>{row.address || "-"}</TableCell>
                      <TableCell>{row.contactNumber || "-"}</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{row.remarks || "-"}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEditRow(row.id)} aria-label="delete">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteRow(row.id)} aria-label="delete" color="secondary">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                    <TableRow>
                      <TableCell
                        align="center"
                        colSpan="11"
                      >
                        {NO_RECORDS_FOUND}
                      </TableCell>
                    </TableRow>
                  )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography>ग) गठन गर्दा उपस्थित लाभान्वितको संख्या: {consumerCommitteeData.beneficiaryUsersPresentCount || "-"}</Typography>
      <Box pt={1}>
        <Typography variant="h6">४. आयोजना संचालन सम्बन्धी अनुभव: {consumerCommitteeData.experienceInProject || "-"}</Typography>
      </Box>
      <CustomModal
        title="पदाधिकारी विवरण हटाउनुहोस्।"
        onModalSubmit={deleteRow}
        showModal={showDeleteConsumerCommitteeOfficialConfirmationModal}
        onModalClose={handleModalClose}
        submitButtonText="हटाउनुहोस्"
      >
        <Typography>के तपाइँ निश्चित हुनुहुन्छ कि तपाइँ चयनित पदाधिकारी हटाउन चाहनुहुन्छ?</Typography>
        <Typography color="error" variant="caption" component="em">* {AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG}</Typography>
      </CustomModal>
    </Container>
  );
}
