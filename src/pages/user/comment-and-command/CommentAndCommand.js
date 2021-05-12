import {
  Box,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SOMETHING_WENT_WRONG } from "../../../utils/constants";
import NepaliDate from "../../../components/nepali-datepicker/NepaliDatePicker";
import { DateUtils } from "../../../utils/dateUtils";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import MunicipalityHeader from "../../../components/municipality-header/municipalityHeader";

export default function CommentAndCommand() {
  const { register, handleSubmit } = useForm();
  const [meetingDate, setMeetingDate] = useState({});
  const [consumerCommitteeFormationDate, setConsumerCommitteeFormationDate] = useState({});
  const [planningAgreementDate, setPlanningAgreementDate] = useState({});
  const [recommendationDate, setRecommendationDate] = useState({});
  const [applicationSubmissionDate, setApplicationSubmissionDate] = useState({});
  const [submittedDate, setSubmittedDate] = useState({});
  const [recommendedDate, setRecommendedDate] = useState({});

  const handleMeetingDateSelect = date => {
    setMeetingDate(date);
  }

  const handleConsumerCommitteeFormationDateSelect = date => {
    setConsumerCommitteeFormationDate(date);
  }

  const handlePlanningAgreementDateSelect = date => {
    setPlanningAgreementDate(date);
  }

  const handleRecommendationDateSelect = date => {
    setRecommendationDate(date);
  }

  const handleApplicationSubmissionDate = date => {
    setApplicationSubmissionDate(date);
  }

  const handleSubmittedDate = date => {
    setSubmittedDate(date);
  }

  const handleRecommendedDate = date => {
    setRecommendedDate(date);
  }

  const onSubmit = data => {
    data.meetingDate = DateUtils.getDateMilliseconds(meetingDate);
    data.consumerCommitteeFormationDate = DateUtils.getDateMilliseconds(consumerCommitteeFormationDate);
    data.planningAgreementDate = DateUtils.getDateMilliseconds(planningAgreementDate);
    data.recommendationDate = DateUtils.getDateMilliseconds(recommendationDate);
    data.applicationSubmissionDate = DateUtils.getDateMilliseconds(applicationSubmissionDate);
    data.submittedDate = DateUtils.getDateMilliseconds(submittedDate);
    data.recommendedDate = DateUtils.getDateMilliseconds(recommendedDate);
    YOJANA.post(API_URL.commentAndCommand, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <Box>
      <MunicipalityHeader />
      <Typography variant="h2" className="border-bottom-heading">
        विषय:- योजना सम्झौता समबन्धमा
        (टिप्पणी र आदेश)
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box spacing={1}>
            <Grid item xs={2}>
              श्रीमान
              प्रस्तुत विषयमा चालु आ.ब.
              <TextField
                id="fiscal-year-input"
                type="text"
                margin="normal"
                variant="outlined"
                name="fiscalYear"
                inputRef={register}
              />
              का लागी यस न.पा. को
              <NepaliDate onDateSelect={(date) => { handleMeetingDateSelect(date) }} labelText="मिति" />
            </Grid>
            <Grid item xs={2} >
              गतेको
              <TextField
                id="meeting-type-input"
                type="text"
                margin="normal"
                variant="outlined"
                name="meetingType"
                inputRef={register}
              />
              नगर सभाबाट,स्विकृत
              <TextField
                id="planning-name-input"
                type="text"
                margin="normal"
                variant="outlined"
                name="planningName"
                inputRef={register}
              />
              योजना निर्माणका लागि वडा नम्बर
             <TextField
                id="ward-number-input"
                type="text"
                margin="normal"
                variant="outlined"
                name="wardNumber"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={2} >
              मा
              <TextField
                variant="outlined"
                id="organization-category-input"
                type="text"
                margin="normal"
                name="organizedCategory"
                inputRef={register}
              />
              <TextField
                id="organized-by-input"
                type="text"
                margin="normal"
                name="organizedBy"
                inputRef={register}
              />
            </Grid>
          </Box>
          <Box spacing={1}>
            बाट रु
            <TextField
              id="budget-for-planning-input"
              type="text"
              margin="normal"
              variant="outlined"
              name="budgetForPlanning"
              inputRef={register}
            />
            विनियोजित भएकोमा
            <NepaliDate onDateSelect={(date) => { handleConsumerCommitteeFormationDateSelect(date) }} labelText="मिति" />
            गते उपभोक्ता समितिइ गठन भई मिति
            <NepaliDate onDateSelect={(date) => { handlePlanningAgreementDateSelect(date) }} labelText="मिति" />
            गते उपभोक्ता समितिले योजना सम्झौता गर्ने निर्णय गरेको मिति
            <NepaliDate onDateSelect={(date) => { handleRecommendationDateSelect(date) }} labelText="मिति" />
            गते समबन्धित वडा कार्यालय बाट योजना सम्झौता गरिदिने भन्ने बारेको यस कार्यालयलाई सिफारिस गरेको र उपभोक्ता समितिले मिति
            <NepaliDate onDateSelect={(date) => { handleApplicationSubmissionDate(date) }} labelText="मिति" />
            गते योजना सम्झौता गरिदिने भन्ने बारेको निबेदन यस कार्य लयमा दिइ स्विकृत भई प्राविधिक लागत अनुमान समेत तयार भई स्विकृत समेत भएकोले सम्झौताका लागी पेश गर्दछु।
          </Box>

          <Box spacing={1}>
            <Grid item xs={6}>
              पेश गर्ने
            <TextField
                id="submitted-by-name-input"
                type="text"
                label="नाम"
                margin="normal"
                variant="outlined"
                name="submittedByPersonName"
                inputRef={register}
              />
              <TextField
                id="submitted-by-position-input"
                type="text"
                label="पद"
                margin="normal"
                variant="outlined"
                name="submittedByPersonPosition"
                inputRef={register}
              />
              <NepaliDate onDateSelect={(date) => { handleSubmittedDate(date) }} labelText="मिति" />
              दस्तखत:
            </Grid>
            <Grid item xs={6}>
              सिफारिश गर्ने
            <TextField
                id="recommended-by-name-input"
                type="text"
                label="नाम"
                margin="normal"
                variant="outlined"
                name="recommendedByPersonName"
                inputRef={register}
              />
              <TextField
                id="recommended-by-position-input"
                type="text"
                label="पद"
                margin="normal"
                variant="outlined"
                name="recommendedByPersonPosition"
                inputRef={register}
              />
              <NepaliDate onDateSelect={(date) => { handleRecommendedDate(date) }} labelText="मिति" />
              दस्तखत:
            </Grid>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              SUBMIT
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="reset"
            >
              CANCEL
            </Button>
          </Box>
        </Box>
      </form >
    </Box >
  );
}
