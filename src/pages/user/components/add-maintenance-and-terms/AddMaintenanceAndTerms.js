import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../../api/api";
import AddAlertMessage from "../../../../components/alert/Alert";
import { AppUtils } from "../../../../utils/appUtils";
import { ID, PALIKA_ID, SOMETHING_WENT_WRONG } from "../../../../utils/constants";
import { LocalStorage } from "../../../../utils/storage/localStorage";
import styles from "./style";

export default function AddMaintenanceAndTerms({ onMaintenanceAndTermsUpdate, ...props }) {
  const classes = styles();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    let planningId = AppUtils.getUrlParam(ID);
    if (planningId) {
      data.planningId = planningId;
      if (props.maintenanceAndTermsData.id) {
        data.id = props.maintenanceAndTermsData.id;
      }
      data.palikaId = LocalStorage.getItem(PALIKA_ID);
      YOJANA.post(API_URL.aayojanaMaintenance, data).then(response => {
        onMaintenanceAndTermsUpdate(response.data.object);
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG })
      })
    }
  };


  return (
    <Paper className={classes.paper} elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="जिम्मा लिने समिती संस्थाको नाम"
                name="aayojanaMaintenanceOfficeName"
                variant="outlined"
                inputRef={register}
                defaultValue={props.maintenanceAndTermsData.aayojanaMaintenanceOfficeName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="जनश्रमदान"
                name="janashramdan"
                variant="outlined"
                inputRef={register}
                defaultValue={props.maintenanceAndTermsData.janashramdan}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="सेवा शुल्क"
                name="serviceFee"
                variant="outlined"
                inputRef={register}
                defaultValue={props.maintenanceAndTermsData.serviceFee}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="दस्तुर, चन्दाबाट"
                  name="dasturOrDonation"
                  variant="outlined"
                  inputRef={register}
                  defaultValue={props.maintenanceAndTermsData.dasturOrDonation}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="अन्य केहि भए"
                  name="others"
                  variant="outlined"
                  defaultValue={props.maintenanceAndTermsData.others}
                  inputRef={register}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  name="updatedTerms"
                  label="agreement"
                  variant="outlined"
                  inputRef={register}
                  fullWidth
                  multiline
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          item="true"
          textAlign="right"
          className={classes.btnContainer}>
          {
            !props.maintenanceAndTermsData.id &&
            <Button type="reset" color="secondary" variant="contained" className={classes.resetBtn}>
              रद्द गर्नुहोस
              </Button>
          }
          <Button type="submit" color="primary" variant="contained">
            {props.maintenanceAndTermsData.id ? "रेकर्ड अपडेट गर्नुहोस" : "सुरक्षित गर्नुहोस"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
