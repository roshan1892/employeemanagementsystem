import { Box, Button, Container, Grid, TextField, Tooltip } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import CustomSelect from "../../../components/custom-select/CustomSelect";
import NepaliDate from "../../../components/nepali-datepicker/NepaliDatePicker";
import { SOMETHING_WENT_WRONG, WARD_OR_MUNICIPALITY_STARIYA_YOJANA, WARD_STARIYA, YOJANA_DEVELOPMENT_AREA_CATEGORIES } from "../../../utils/constants/index";
import { DateUtils } from "../../../utils/dateUtils";
import YojanaReportTable from "./helpers/yojana-report-table/YojanaReportTable";
import styles from "./style";

export default function YojanaReportPage() {
  const classes = styles();
  const { register, handleSubmit, setValue } = useForm();
  const [mainTableData, setMainTableData] = useState({});
  const [fromDate, setFromDate] = useState(DateUtils.getDaysBeforeBSDate(30));
  const [toDate, setToDate] = useState();
  const [showWard, setShowWard] = useState(false);

  const handleFromDateSelect = date => {
    setFromDate(date);
  };
  const handleToDateSelect = date => {
    setToDate(date);
  };

  const handleYojanaStarChange = yojanaStar => {
    register({ name: "yojanaStar" });
    setValue("yojanaStar", yojanaStar);
    if (yojanaStar === WARD_STARIYA) {
      setShowWard(true);
    } else {
      setShowWard(false);
    }
  };

  const handleYojanaCategoryChange = yojanaCategory => {
    register({ name: "yojanaCategory" });
    setValue("yojanaCategory", yojanaCategory);
  };

  const onSubmit = data => {
    const params = {
      dateFrom: DateUtils.getDateMilliseconds(fromDate),
      dateTo: DateUtils.getDateMilliseconds(toDate),
      yojanaStar: data.yojanaStar ? data.yojanaStar : "",
      wardNumber: data.yojanaStar === WARD_STARIYA && data.wardNumber ? data.wardNumber : "",
      yojanaCategory: data.yojanaCategory ? data.yojanaCategory : ""
    };
    const paramString = new URLSearchParams(params);
    const url = API_URL.aayojanaReport + "?" + paramString;
    YOJANA.get(url)
      .then(response => {
        setMainTableData(response.data);
        // reset();
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };
  return (
    <>
      <Container maxWidth="lg" className={classes.root} disableGutters>

        <h2 className={classes.yojanaReportMainHeading}>योजना तथा कार्यक्रमहरूको रिपोर्ट हेर्नुहोस् ।</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                label="योजनाको स्तर"
                name="yojanaStar"
                variant="outlined"
                options={WARD_OR_MUNICIPALITY_STARIYA_YOJANA}
                onChange={handleYojanaStarChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomSelect
                label="योजनाको क्षेत्र"
                name="yojanaCategory"
                variant="outlined"
                options={YOJANA_DEVELOPMENT_AREA_CATEGORIES}
                onChange={handleYojanaCategoryChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Tooltip title={showWard ? "कृपया तपाईंले योजना संचालन भएको वार्ड नम्बर राख्नुहोस्।" : "यदि तपाईंले वडा स्तरीय योजना चयन गर्नुभयो भने मात्र वार्ड नम्बर प्रविष्ट गर्न अनुमति छ।"} placement="top" arrow>
                <TextField
                  type="number"
                  label="योजना संचालन भएको वडा नं."
                  name="wardNumber"
                  variant="outlined"
                  inputRef={register}
                  disabled={!showWard}
                  fullWidth
                />
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.aayojanaDatePickerContainer}>
            <Grid item xs={12} sm={6} md={4} className={classes.aayojanaDatePicker}>
              <NepaliDate
                defaultDate={fromDate}
                onDateSelect={date => {
                  handleFromDateSelect(date);
                }}
                labelText="मिति देखि"
                tooltipText="जुन मिति देखिको रेकर्ड तपाईं हेर्न चाहानुहुन्छ, कृपया त्यो मिति प्रविष्ट गर्नुहोस्।"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.aayojanaDatePicker}>
              <NepaliDate
                onDateSelect={date => {
                  handleToDateSelect(date);
                }}
                labelText="मिति सम्म"
                tooltipText="जुन मिति सम्मको रेकर्ड तपाईं हेर्न चाहानुहुन्छ, कृपया त्यो मिति प्रविष्ट गर्नुहोस्।"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Grid>
          <Box
            item="true"
            textAlign="right"
            className={classes.btnContainer}>
            <Button className={classes.resetBtn} type="reset" color="secondary" variant="contained">
              रद्द गर्नुहोस
            </Button>
            <Button startIcon={<SearchIcon />} type="submit" color="primary" variant="contained">
              खोजी गर्नुहोस्
            </Button>
          </Box>
        </form>
      </Container>

      <YojanaReportTable tableData={mainTableData} />
    </>
  );
}
