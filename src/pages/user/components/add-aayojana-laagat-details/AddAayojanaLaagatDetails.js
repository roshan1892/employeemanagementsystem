import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../../api/api";
import AddAlertMessage from "../../../../components/alert/Alert";
import CustomSelect from "../../../../components/custom-select/CustomSelect";
import { DONATION_FROM_CATEGORIES, SOMETHING_WENT_WRONG, ID } from "../../../../utils/constants/index";
import styles from "./style";
import { AppUtils } from "../../../../utils/appUtils";

export default function AddAayojanaLaagatDetails({ onAayojanaLaagatDataUpdate, ...props }) {
  const classes = styles();
  const [defaultLaagatDetailValues, setDefaultLaagatDetailValues] = useState({});
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    data.planningId = AppUtils.getUrlParam(ID);
    if (defaultLaagatDetailValues.id) {
      data.id = defaultLaagatDetailValues.id;
    }
    YOJANA.post(API_URL.yojanaLaagatDetail, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === "success") {
          onAayojanaLaagatDataUpdate(response.data.object);
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  useEffect(() => {
    if (props.aayojanaLaagatData) {
      setDefaultLaagatDetailValues(props.aayojanaLaagatData);
    }
  }, [props.aayojanaLaagatData]);

  useEffect(() => {
    for (const [key, value] of Object.entries(defaultLaagatDetailValues)) {
      if (key !== "id")
        setValue(key, value);
    }
  }, [defaultLaagatDetailValues, setValue]);

  return (
    <Paper className={classes.paper} elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Typography variant="h6" className={classes.laagatDetailsSubtitle}>लागत व्यहोर्ने स्रोतहरु </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="लागत अनुमान रु"
                type="number"
                name="estimatedTotalCost"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="कार्यालय"
                name="fundFromOffice"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="उपभोक्ता समिति"
                name="fundFromConsumerBoard"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="अन्य"
                name="fundFromOtherSources"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} className={classes.donationFromCategoriesList}>
          <Typography variant="h6" className={classes.laagatDetailsSubtitle}>बस्तुगत अनुदानको विवरण</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="सघंबाट"
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromSangh"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromSangh"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="प्रदेशबाट"
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromProvince"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromProvince"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="स्थानीय तहबाट"
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromLocalGovernment"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromLocalGovernment"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="गैरसरकारी सघंसंस्थाबाट"
                className={classes.customSelectContainer}
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromPrivateInstitutions"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromPrivateInstitutions"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="विदेशी दात्री सघंसंस्थाबाट"
                className={classes.customSelectContainer}
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromForeignInstitutions"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromForeignInstitutions"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="उपभोक्ता समितिबाट"
                className={classes.customSelectContainer}
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromConsumerCommittee"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromConsumerCommittee"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={4} className={classes.customSelectContainer}>
              <CustomSelect
                label="अन्य निकायबाट"
                variant="outlined"
                options={DONATION_FROM_CATEGORIES}
                formControlMargin="dense"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="सामाग्रीको नाम"
                name="assetsFromOtherSources"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="इकाई"
                name="assetsUnitFromOthers"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" className={classes.laagatDetailsSubtitle}>आयोजनाबाट लाभान्वित हुने</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="घरपरिवार संख्या"
                name="noOfFamiliesBenefitted"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="जनसंख्या"
                name="totalNumberOfPeopleBenefitted"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="संगठित संस्था"
                name="noOfOrganizationBenefitted"
                type="number"
                variant="outlined"
                inputRef={register}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="अन्य"
                name="othersBenefitted"
                variant="outlined"
                type="number"
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
            !defaultLaagatDetailValues.id &&
            <Button type="reset" color="secondary" variant="contained" className={classes.resetBtn}>
              रद्द गर्नुहोस
              </Button>
          }
          <Button type="submit" color="primary" variant="contained">
            {defaultLaagatDetailValues.id ? "रेकर्ड अपडेट गर्नुहोस" : "सुरक्षित गर्नुहोस"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
