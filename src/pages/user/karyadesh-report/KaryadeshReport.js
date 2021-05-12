import { Box, Button, Container, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import NepaliDate from "../../../components/nepali-datepicker/NepaliDatePicker";
import { SOMETHING_WENT_WRONG } from "../../../utils/constants/index";
import { DateUtils } from "../../../utils/dateUtils";
import KaryadeshReportTable from "./helpers/KaryadeshReportTable";

export default function KaryadeshReportPage() {
  const { register, handleSubmit, setValue } = useForm();
  const [mainTableData, setMainTableData] = useState({});

  const handleDateFromChange = dateFromOption => {
    register({ name: "dateFrom" });
    setValue("dateFrom", dateFromOption);
  };

  const handleDateToChange = dateToOption => {
    register({ name: "dateTo" });
    setValue("dateTo", dateToOption);
  };

  const onSubmit = data => {
    const params = {
      dateFrom: DateUtils.getDateMilliseconds(data.dateFrom),
      dateTo: DateUtils.getDateMilliseconds(data.dateTo),
    };
    const paramString = new URLSearchParams(params);
    const url = API_URL.karyadeshReport + "?" + paramString;
    YOJANA.get(url)
      .then(response => {
        setMainTableData(response.data);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };
  return (
    <>
      <Container>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid>
              <NepaliDate
                defaultDate={DateUtils.getDaysBeforeBSDate(30)}
                onDateSelect={date => {
                  handleDateFromChange(date);
                }}
                labelText="मिति देखि"
                tooltipText="जुन मिति देखिको रेकर्ड तपाईं हेर्न चाहानुहुन्छ, कृपया त्यो मिति प्रविष्ट गर्नुहोस्।"
              />
            </Grid>
            <Grid >
              <NepaliDate
                onDateSelect={date => {
                  handleDateToChange(date);
                }}
                labelText="मिति सम्म"
                tooltipText="जुन मिति सम्मको रेकर्ड तपाईं हेर्न चाहानुहुन्छ, कृपया त्यो मिति प्रविष्ट गर्नुहोस्।"
              />
            </Grid>
          </Grid>
          <Box
            item="true"
            textAlign="right">
            <Button type="reset" color="secondary" variant="contained">
              रद्द गर्नुहोस
            </Button>
            <Button startIcon={<SearchIcon />} type="submit" color="primary" variant="contained">
              खोजी गर्नुहोस्
            </Button>
          </Box>
        </form>
      </Container>
      <KaryadeshReportTable tableData={mainTableData} />
    </>
  );
}
