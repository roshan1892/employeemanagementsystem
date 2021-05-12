import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../../api/api";
import AddAlertMessage from "../../../../components/alert/Alert";
import NepaliDate from "../../../../components/nepali-datepicker/NepaliDatePicker";
import { AppUtils } from "../../../../utils/appUtils";
import { ID, SOMETHING_WENT_WRONG, SUCCESS } from "../../../../utils/constants/index";
import { DateUtils } from "../../../../utils/dateUtils";
import styles from "./style";

export default function AddConsumerCommitteeDetails({ onConsumerCommitteeDetailsUpdate, ...props }) {
  const classes = styles();
  const [defaultConsumerCommitteeDetails, setDefaultConsumerCommitteeDetails] = useState({});
  const [consumerCommitteeEstablishedDate, setConsumerCommitteeEstablishedDate] = useState();
  const { register, handleSubmit, setValue } = useForm();

  const handleConsumerCommitteeEstablishedDateSelect = date => {
    setConsumerCommitteeEstablishedDate(date);
  };

  useEffect(() => {
    if (props.consumerCommitteeData) {
      setDefaultConsumerCommitteeDetails(props.consumerCommitteeData);
    }
  }, [props.consumerCommitteeData]);

  useEffect(() => {
    setValue("beneficiaryUsersPresentCount", defaultConsumerCommitteeDetails.beneficiaryUsersPresentCount);
    setValue("experienceInProject", defaultConsumerCommitteeDetails.experienceInProject);
  }, [defaultConsumerCommitteeDetails, setValue])

  const onSubmit = data => {
    data.planningId = AppUtils.getUrlParam(ID);
    data.id = defaultConsumerCommitteeDetails.id;
    data.consumerCommitteeEstablishedDate = DateUtils.getDateMilliseconds(
      consumerCommitteeEstablishedDate
    );
    YOJANA.post(API_URL.consumerCommittee, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === SUCCESS) {
          onConsumerCommitteeDetailsUpdate();
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} className={classes.consumerCommitteeEstablishedDatePicker}>
              <NepaliDate
                labelText="गठन भएको मिति"
                defaultDate={props.consumerCommitteeData ? DateUtils.getDateFromMilliseconds(props.consumerCommitteeData.consumerCommitteeEstablishedDate) : undefined}
                onDateSelect={date => {
                  handleConsumerCommitteeEstablishedDateSelect(date);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.alignBottom}>
              <TextField
                label="गठन गर्दा उपस्थित लाभान्वितको संख्या"
                name="beneficiaryUsersPresentCount"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.alignBottom}>
              <TextField
                label="आयोजना संचालन सम्बन्धी अनुभव"
                name="experienceInProject"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          item="true"
          textAlign="right"
          className={classes.btnContainer}>
          {
            !defaultConsumerCommitteeDetails.id &&
            <Button type="reset" color="secondary" variant="contained" className={classes.resetBtn}>
              रद्द गर्नुहोस
              </Button>
          }
          <Button type="submit" color="primary" variant="contained">
            {defaultConsumerCommitteeDetails.id ? "रेकर्ड अपडेट गर्नुहोस" : "सुरक्षित गर्नुहोस"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
