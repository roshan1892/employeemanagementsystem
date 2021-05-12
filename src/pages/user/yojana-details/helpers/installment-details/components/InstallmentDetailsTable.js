import { Box, IconButton, Link, List, ListItem, ListItemSecondaryAction, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon, Publish as PublishIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../../../../api/api";
import AddAlertMessage from "../../../../../../components/alert/Alert";
import CustomModal from "../../../../../../components/modal/CustomModal";
import { AppUtils } from "../../../../../../utils/appUtils";
import { INSTALLMENT_TYPES, NO_RECORDS_FOUND, SOMETHING_WENT_WRONG, AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG, SUCCESS } from "../../../../../../utils/constants/index";
import { DateUtils } from "../../../../../../utils/dateUtils";
import styles from "../style";

const getInstallmentTypeLabel = (installmentType) => {
  return installmentType ? INSTALLMENT_TYPES.find(obj => obj.value === installmentType).label : "";
}

export default function InstallmentDetailsTable({ handleTableDataUpdate, onDeleteRow, onEditRow, ...props }) {
  const classes = styles();
  const [mainTableData, setMainTableData] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedInstallmentId, setSelectedInstallmentId] = useState();
  const [showInstallmentDeleteConfirmationModal, setShowInstallmentDeleteConfirmationModal] = useState(false);
  const [selectedInstallmentRowId, setSelectedInstallmentRowId] = useState();
  const [documentToDelete, setDocumentToDelete] = useState();
  const [selectedInstallmentFileRowId, setSelectedInstallmentFileRowId] = useState();
  const [showDeleteDocumentConfirmationModal, setShowDeleteDocumentConfirmationModal] = useState(false);
  const [totalInstallmentAmount, setTotalInstallmentAmount] = useState();

  useEffect(() => {
    props.tableData &&
      setMainTableData(props.tableData);
  }, [props.tableData]);

  useEffect(() => {
    let totalAmount = 0;
    for (let i = 0; i < mainTableData.length; i++) {
      totalAmount += mainTableData[i].amount;
    }
    setTotalInstallmentAmount(totalAmount);
  }, [mainTableData]);

  useEffect(() => {
    if (files.length) {
      var postdata = new FormData();
      postdata.append("installmentId", selectedInstallmentId);
      for (let i = 0; i < files.length; i++) {
        postdata.append("file", files[i]);
      }
      uploadFilesForInstallment(postdata);
    }
  }, [files]);

  function handleFileChange(e) {
    setFiles(e.target.files);
  }

  function editRow(rowId) {
    onEditRow(rowId);
  }

  function deleteRow(rowId) {
    setShowInstallmentDeleteConfirmationModal(false);
    onDeleteRow(rowId);
  }

  const handleInstallmentDelete = (rowId) => {
    setShowInstallmentDeleteConfirmationModal(true);
    setSelectedInstallmentRowId(rowId);
  }

  const handleInstallmentDocumentDelete = (document, rowId) => {
    setShowDeleteDocumentConfirmationModal(true);
    setSelectedInstallmentFileRowId(rowId);
    setDocumentToDelete(document);
  }

  const getDocumentsList = (rowId, documents) => {
    var documentsList = [];
    for (let i = 0; i < documents.length; i++) {
      documentsList.push(
        <List className={classes.documentRow} key={i}>
          <ListItem className={classes.item}>
            <Link
              href={documents[i].filePath}
              className={classes.documentLink}
            >
              {documents[i].fileName}
            </Link>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => { handleInstallmentDocumentDelete(documents[i], rowId) }}
                className={classes.deleteDocumentIcon}
                color="secondary"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )
    }
    return (
      <>
        <Box className={classes.documentsList}>
          {documentsList}
        </Box>
      </>
    )
  };

  const removeFile = (document, installmentId) => {
    setShowDeleteDocumentConfirmationModal(false);
    YOJANA.delete(API_URL.installmentDetail + "/delete/" + installmentId + "?fileName=" + document.fileName + "&filePath=" + document.filePath)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === SUCCESS) {
          handleTableDataUpdate(true);
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  }

  const uploadFilesForInstallment = postdata => {
    YOJANA.post(API_URL.installmentDetail + "/uploadFile", postdata)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          AddAlertMessage({
            type: response.data[i].type,
            message: response.data[i].fileName + " " + response.data[i].message
          });
        }
        handleTableDataUpdate(true);
        setFiles([]);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        setFiles([]);
      });
  };


  return (
    <Box p={2}>
      <TableContainer>
        <Table
          classes={{ root: "table-bordered" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead classes={{ root: "align-center" }}>
            <TableRow>
              <TableCell>किस्ताको क्रम</TableCell>
              <TableCell>मिति</TableCell>
              <TableCell>किस्ताको रकम</TableCell>
              <TableCell>निर्माण समाग्री परिमाण</TableCell>
              <TableCell>कैफियत</TableCell>
              <TableCell>कागजातहरु</TableCell>
              <TableCell>सम्पादन</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mainTableData.length === 0 ? (
              <TableRow>
                <TableCell align="center" colSpan="9">
                  {NO_RECORDS_FOUND}
                  कृपया, किस्ता विवरण थप्नुहोस्।
                </TableCell>
              </TableRow>
            ) : (
                mainTableData.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{getInstallmentTypeLabel(row.installmentType)}</TableCell>
                    <TableCell>
                      {AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(row.date))}
                    </TableCell>
                    <TableCell>{AppUtils.replaceWithNepaliDigit(row.amount)}</TableCell>
                    <TableCell>{row.buildingMaterialSize || "-"}</TableCell>
                    <TableCell>{row.remarks || "-"}</TableCell>
                    <TableCell>
                      {
                        row.documents ? (
                          row.documents.length ? getDocumentsList(row.id, row.documents) : "-"
                        ) : (
                            "-"
                          )
                      }
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" justifyContent="center" className={classes.actionButtons}>
                        <IconButton
                          onClick={() => editRow(row.id)}
                          aria-label="edit"
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          onClick={() => { handleInstallmentDelete(row.id) }}
                          aria-label="delete"
                          color="secondary"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <Tooltip title="किस्ता विवरणसँग सम्बन्धित फाईलहरू अपलोड गर्नुहोस्।">
                          <Box>
                            <input id="uploadInstallmentFiles" className={classes.hiddenInput} type="file" accept=".pdf,.doc,.ppt,.pptx,.txt,.docx,.xlsx,.xls,.jpg,.jpeg,.png,.gif,.bmp,.ico" onChange={(event) => { handleFileChange(event) }} multiple />
                            <label htmlFor="uploadInstallmentFiles">
                              <IconButton onClick={() => { setSelectedInstallmentId(row.id) }} color="primary" aria-label="upload picture" component="span">
                                <PublishIcon fontSize="small" />
                              </IconButton>
                            </label>
                          </Box>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            {mainTableData.length === 3 &&
              <TableRow>
                <TableCell>जम्मा</TableCell>
                <TableCell></TableCell>
                <TableCell>{totalInstallmentAmount ? AppUtils.replaceWithNepaliDigit(totalInstallmentAmount) : "-"}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <CustomModal
        title="किस्ता विवरण हटाउनुहोस्।"
        onModalSubmit={() => { deleteRow(selectedInstallmentRowId) }}
        showModal={showInstallmentDeleteConfirmationModal}
        onModalClose={() => setShowInstallmentDeleteConfirmationModal(false)}
        submitButtonText="हटाउनुहोस्"
      >
        <Typography>के तपाइँ निश्चित हुनुहुन्छ कि तपाइँ किस्ता विवरण हटाउन चाहनुहुन्छ?</Typography>
        <Typography color="error" variant="caption" component="em">* {AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG}</Typography>
      </CustomModal>
      <CustomModal
        title="फाइल हटाउनुहोस्।"
        onModalSubmit={() => { removeFile(documentToDelete, selectedInstallmentFileRowId) }}
        showModal={showDeleteDocumentConfirmationModal}
        onModalClose={() => setShowDeleteDocumentConfirmationModal(false)}
        submitButtonText="हटाउनुहोस्"
      >
        <Typography>के तपाइँ निश्चित हुनुहुन्छ कि तपाइँ चयनित फाइल हटाउन चाहनुहुन्छ?</Typography>
        <Typography color="error" variant="caption" component="em">* {AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG}</Typography>
      </CustomModal>
    </Box>
  );
}