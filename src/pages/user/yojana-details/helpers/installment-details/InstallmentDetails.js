import { Box, Grid, IconButton, TextField, Tooltip, Typography } from "@material-ui/core";
import { AddCircle as AddCircleIcon, Print as PrintIcon } from '@material-ui/icons';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../../../api/api";
import AddAlertMessage from "../../../../../components/alert/Alert";
import CustomSelect from "../../../../../components/custom-select/CustomSelect";
import EmptyContainer from "../../../../../components/empty-container/EmptyContainer";
import Spinner from "../../../../../components/loader/Loader";
import CustomModal from "../../../../../components/modal/CustomModal";
import NepaliDate from "../../../../../components/nepali-datepicker/NepaliDatePicker";
import { AppUtils } from "../../../../../utils/appUtils";
import { ID, INSTALLMENT_TYPES, REQUIRED_FIELD, SOMETHING_WENT_WRONG } from "../../../../../utils/constants/index";
import { DateUtils } from "../../../../../utils/dateUtils";
import InstallmentDetailsTable from "./components/InstallmentDetailsTable";
import styles from "./style";

export default function InstallmentDetails() {
  const classes = styles();
  const [installmentDetailsData, setInstallmentDetailsData] = useState();
  const { register, handleSubmit, errors, setValue } = useForm();
  const [showAddInstallmentModal, setShowAddInstallmentModal] = useState(false);
  const [modalDefaultValues, setModalDefaultValues] = useState({});
  const [installmentDate, setInstallmentDate] = useState({});
  const [installmentDetailsLoading, setInstallmentDetailsLoading] = useState(true);
  const [installmentDataUpdated, setInstallmentDataUpdated] = useState(false);
  const [installmentIdForEdit, setInstallmentIdForEdit] = useState(null);

  const handleInstallmentTypeChange = type => {
    setValue("installmentType", type);
  }

  useEffect(() => {
    register({ name: "installmentType" }, { required: true });
  }, [register]);

  const closeShowAddInstallmentModal = () => {
    setInstallmentIdForEdit(null);
    setModalDefaultValues({});
    setShowAddInstallmentModal(false);
  }

  const handleInstallmentDateSelect = date => {
    setInstallmentDate(date);
  }

  const onSubmit = data => {
    data.date = DateUtils.getDateMilliseconds(installmentDate);
    data.planningId = AppUtils.getUrlParam(ID);
    if (installmentIdForEdit) {
      data.id = installmentIdForEdit;
    }
    YOJANA.post(API_URL.installmentDetail, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === "success") {
          closeShowAddInstallmentModal();
          getAllInstallmentDetailsData();
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  const installmentDetailEditFunction = id => {
    YOJANA.get(API_URL.installmentDetail + "/" + id)
      .then(response => {
        setModalDefaultValues(response.data)
        setInstallmentIdForEdit(response.data.id);
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  const installmentDetailDeleteFunction = id => {
    YOJANA.delete(API_URL.installmentDetail + "/" + id)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        getAllInstallmentDetailsData();
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  useEffect(() => {
    getAllInstallmentDetailsData();
  }, []);

  useEffect(() => {
    installmentDetailsData !== null &&
      setInstallmentDetailsLoading(false);
  }, [installmentDetailsData]);

  useEffect(() => {
    JSON.stringify(modalDefaultValues) !== "{}" && setShowAddInstallmentModal(true);
  }, [modalDefaultValues]);

  const handleTableDataUpdate = (installmentDataUpdated) => {
    setInstallmentDataUpdated(installmentDataUpdated);
  }

  useEffect(() => {
    installmentDataUpdated &&
      getAllInstallmentDetailsData()
  }, [installmentDataUpdated])

  const getAllInstallmentDetailsData = () => {
    YOJANA.get(API_URL.installmentDetail + "/planning/" + AppUtils.getUrlParam(ID))
      .then(response => {
        setInstallmentDetailsData(response.data);
        setInstallmentDataUpdated(false);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  }

  return (
    <Box>
      <Box className={classes.paperHeader}>
        <Typography variant="h6">५. उपभोक्ता समिति समुदायमा अधारित संस्था गैरसरकारी संस्थाले प्राप्त गर्ने किस्ता विवरण:</Typography>
        <Box className={classes.paperActionButtons}>
          {installmentDetailsData &&
            installmentDetailsData.length !== 3 && (
              <Tooltip title="नयाँ किस्ता थप्नुहोस्।" placement="top" arrow interactive>
                <IconButton aria-label="add committee official" onClick={() => { setShowAddInstallmentModal(true) }}>
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            )}
          <IconButton aria-label="print">
            <PrintIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <CustomModal
          title="कृपया किस्ताको विवरण उल्लेख गर्नुहोस्।"
          onModalSubmit={handleSubmit(onSubmit)}
          showModal={showAddInstallmentModal}
          onModalClose={closeShowAddInstallmentModal}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} className={classes.installmentTypeSelectContainer}>
              <CustomSelect
                label="किस्ताको क्रम"
                variant="outlined"
                name="installmentType"
                options={INSTALLMENT_TYPES}
                onChange={handleInstallmentTypeChange.bind(this)}
                value={modalDefaultValues.installmentType}
                formControlMargin="dense"
                required
                fullWidth
              />
              {errors.installmentType && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={4} className={classes.installmentDatePicker}>
              <NepaliDate
                defaultDate={modalDefaultValues.date && DateUtils.getDateFromMilliseconds(modalDefaultValues.date)}
                onDateSelect={(date) => { handleInstallmentDateSelect(date) }}
                hideLabel
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="किस्ताको रकम"
                type="number"
                size="small"
                variant="outlined"
                name="amount"
                defaultValue={modalDefaultValues.amount}
                inputRef={register({
                  required: true
                })}
              />
              {errors.amount && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="निर्माण समाग्री परिमाण"
                  type="text"
                  size="small"
                  variant="outlined"
                  name="buildingMaterialSize"
                  defaultValue={modalDefaultValues.buildingMaterialSize}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="कैफियत"
                  type="text"
                  size="small"
                  variant="outlined"
                  name="remarks"
                  defaultValue={modalDefaultValues.remarks}
                  inputRef={register}
                />
              </Grid>
            </Grid>
          </Box>
        </CustomModal>
      </Box>
      {installmentDetailsLoading ?
        (
          <EmptyContainer>
            <Spinner />
          </EmptyContainer>
        ) : (
          <InstallmentDetailsTable
            tableData={installmentDetailsData}
            showActionColumn={true}
            onEditRow={installmentDetailEditFunction.bind(this)}
            onDeleteRow={installmentDetailDeleteFunction.bind(this)}
            handleTableDataUpdate={(tableDataUpdated) => { handleTableDataUpdate(tableDataUpdated) }}
          />
        )
      }
    </Box >
  );
}