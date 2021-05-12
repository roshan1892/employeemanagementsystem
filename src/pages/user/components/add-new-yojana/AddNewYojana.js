import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Tooltip,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../../api/api";
import AddAlertMessage from "../../../../components/alert/Alert";
import CustomSelect from "../../../../components/custom-select/CustomSelect";
import NepaliDate from "../../../../components/nepali-datepicker/NepaliDatePicker";
import {
  REQUIRED_FIELD,
  SOMETHING_WENT_WRONG,
  WARD_OR_MUNICIPALITY_STARIYA_YOJANA,
  WARD_STARIYA,
  YOJANA_DEVELOPMENT_AREA_CATEGORIES
} from "../../../../utils/constants/index";
import { DateUtils } from "../../../../utils/dateUtils";
import styles from "./style";

export default function AddNewYojana({ onAayojanaDataUpdate, ...props }) {
  const classes = styles();
  const { register, handleSubmit, setValue, errors } = useForm();
  const [defaultAayojanaData, setDefaultAayojanaData] = useState({});
  const [showWard, setShowWard] = useState(false);
  const [aayojanaSuruHuneMiti, setAayojanaSuruHuneMiti] = useState();
  const [aayojanaSampannaHuneMiti, setAayojanaSampannaHuneMiti] = useState();

  const handleAayojanaSuruHuneMitiSelect = date => {
    setAayojanaSuruHuneMiti(date);
  };
  const handleAayojanaSampannaHuneMitiSelect = date => {
    setAayojanaSampannaHuneMiti(date);
  };

  const handleYojanaStarChange = yojanaStar => {
    setValue("yojanaStar", yojanaStar);
    if (yojanaStar === WARD_STARIYA) {
      setShowWard(true);
    } else {
      setValue("wardNumber", null);
      setShowWard(false);
    }
  };

  const handleYojanaCategoryChange = yojanaCategory => {
    setValue("yojanaCategory", yojanaCategory);
  };

  useEffect(() => {
    register({ name: "yojanaStar" }, { required: true });
    register({ name: "yojanaCategory" }, { required: true });
  }, [register]);

  useEffect(() => {
    if (props.aayojanaData) {
      setDefaultAayojanaData(props.aayojanaData);
    }
  }, [props.aayojanaData]);

  useEffect(() => {
    if (defaultAayojanaData.yojanaStar === WARD_STARIYA) {
      setShowWard(true);
    }
    setValue("aayojanaName", defaultAayojanaData.aayojanaName);
    setValue("aayojanaAddress", defaultAayojanaData.aayojanaAddress);
    setValue("aayojanaGoal", defaultAayojanaData.aayojanaGoal);
    setValue("wardNumber", defaultAayojanaData.wardNumber);
    setValue("consumerCommitteeName", defaultAayojanaData.consumerCommitteeName);
    setValue("consumerCommitteeAddress", defaultAayojanaData.consumerCommitteeAddress);
    setValue("consumerCommitteeChairmanName", defaultAayojanaData.consumerCommitteeChairmanName);
  }, [defaultAayojanaData, setValue]);

  const onSubmit = data => {
    if (defaultAayojanaData.id) {
      data.id = defaultAayojanaData.id;
    }
    data.aayojanaSuruHuneMiti = DateUtils.getDateMilliseconds(
      aayojanaSuruHuneMiti
    );
    data.aayojanaSampannaHuneMiti = DateUtils.getDateMilliseconds(
      aayojanaSampannaHuneMiti
    );
    YOJANA.post(API_URL.aayojana, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === "success") {
          onAayojanaDataUpdate(response.data.object);
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
          <Typography variant="h6" className={classes.addAayojanaSubtitle}>
            आयोजनाको विवरण
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} className={classes.aayojanaNameContainer}>
              <TextField
                label="आयोजनाको नाम"
                name="aayojanaName"
                margin="normal"
                variant="outlined"
                inputRef={register({
                  required: true
                })}
                size="small"
                fullWidth
              />
              {errors.aayojanaName && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.aayojanaDatePicker}>
              <NepaliDate
                labelText="आयोजना सुरु हुने मिति"
                name="aayojanaSuruHuneMiti"
                onDateSelect={date => {
                  handleAayojanaSuruHuneMitiSelect(date);
                }}
                defaultDate={props.aayojanaData ? DateUtils.getDateFromMilliseconds(props.aayojanaData.aayojanaSuruHuneMiti) : undefined}
              />
            </Grid>
            <Grid
              item xs={12} sm={6} md={4} className={classes.aayojanaDatePicker}>
              <NepaliDate
                labelText="आयोजना सम्पन्‍न हुने मिति"
                onDateSelect={date => {
                  handleAayojanaSampannaHuneMitiSelect(date);
                }}
                defaultDate={props.aayojanaData ? DateUtils.getDateFromMilliseconds(props.aayojanaData.aayojanaSampannaHuneMiti) : undefined}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="आयोजना स्थल"
                name="aayojanaAddress"
                margin="normal"
                size="small"
                variant="outlined"
                inputRef={register({
                  required: true
                })}
                fullWidth
              />
              {errors.aayojanaAddress && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="उद्देश्य"
                name="aayojanaGoal"
                margin="normal"
                variant="outlined"
                inputRef={register({
                  required: true
                })}
                rowsMax="3"
                size="small"
                fullWidth
                multiline
              />
              {errors.aayojanaGoal && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.consumerInputsContainer}>
          <Typography variant="h6" className={classes.addAayojanaSubtitle}>
            उपभोक्त्ता समितिको विवरण
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                label="योजनाको स्तर"
                name="yojanaStar"
                options={WARD_OR_MUNICIPALITY_STARIYA_YOJANA}
                value={defaultAayojanaData.yojanaStar}
                onChange={handleYojanaStarChange}
                formControlMargin="dense"
                fullWidth
              />
              {errors.yojanaStar && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                label="योजनाको क्षेत्र"
                name="yojanaCategory"
                variant="outlined"
                options={YOJANA_DEVELOPMENT_AREA_CATEGORIES}
                value={defaultAayojanaData.yojanaCategory}
                onChange={handleYojanaCategoryChange}
                formControlMargin="dense"
                fullWidth
              />
              {errors.yojanaCategory && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Tooltip
                title={
                  showWard
                    ? "कृपया तपाईंले योजना थप्न चाहानु भएको वार्ड नम्बर राख्नुहोस्।"
                    : "यदि तपाईंले वडा स्तरीय योजना चयन गर्नुभयो भने मात्र वार्ड नम्बर प्रविष्ट गर्न अनुमति छ।"
                }
                placement="top"
                arrow
              >
                <TextField
                  type="number"
                  label="योजना संचालन हुने वडा नं."
                  name="wardNumber"
                  margin="normal"
                  variant="outlined"
                  inputRef={register}
                  size="small"
                  disabled={!showWard}
                  fullWidth
                />
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="उपभोक्त्ता समितिको नाम"
                name="consumerCommitteeName"
                margin="normal"
                variant="outlined"
                inputRef={register({
                  required: true
                })}
                size="small"
                fullWidth
              />
              {errors.consumerCommitteeName && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="ठेगाना"
                name="consumerCommitteeAddress"
                margin="normal"
                variant="outlined"
                inputRef={register}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="उपभोक्त्ता समितिको अध्यक्षको नाम"
                name="consumerCommitteeChairmanName"
                margin="normal"
                variant="outlined"
                inputRef={register}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
        <Box item="true" textAlign="right" className={classes.btnContainer}>
          {JSON.stringify(defaultAayojanaData) === "{}" && (
            <Button
              type="reset"
              color="secondary"
              variant="contained"
              className={classes.resetBtn}
            >
              रद्द गर्नुहोस
            </Button>
          )}
          <Button type="submit" color="primary" variant="contained">
            {JSON.stringify(defaultAayojanaData) !== "{}"
              ? "रेकर्ड अपडेट गर्नुहोस"
              : "सुरक्षित गर्नुहोस"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
