import { Box, Button, Container, TextField, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Print } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ReactToPrint from "react-to-print";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import CustomSelect from "../../../components/custom-select/CustomSelect";
import MunicipalityHeader from "../../../components/municipality-header/municipalityHeader";
import { REQUIRED_FIELD, SOMETHING_WENT_WRONG, SUCCESS, WARD_OR_MUNICIPALITY_SANCHAALIT_YOJANA, YOJANA_DEVELOPMENT_AREA_CATEGORIES } from "../../../utils/constants";
import styles from "./style";

export default function Karyadesh() {
  const classes = styles();
  const { register, handleSubmit, errors, setValue } = useForm();
  let history = useHistory();
  const printKaryadeshComponentRef = useRef();

  useEffect(() => {
    register({ name: "yojanaDevelopmentAreaCategory" });
    register({ name: "yojanaSanchaalitCategory" })
  }, [register]);

  const handleWikashKshetraChange = yojanaDevelopmentAreaCategoryOption => {
    setValue("yojanaDevelopmentAreaCategory", yojanaDevelopmentAreaCategoryOption.value);
  };

  const handleYojanaSanchaalitCategoryChange = (yojanaSanchaalitCategory) => {
    setValue("yojanaSanchaalitCategory", yojanaSanchaalitCategory.value);
  }

  const onSubmit = data => {
    YOJANA.post(API_URL.karyadesh, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === SUCCESS) {
          history.push("karyadesh-details?id=" + response.data.object.id);
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <Container className={classes.root}>
      <Box textAlign="right">
        <ReactToPrint
          trigger={() => <Print />}
          content={() => printKaryadeshComponentRef.current}
        />
      </Box>
      <Box ref={printKaryadeshComponentRef}>
        <MunicipalityHeader />
        <Box textAlign="center">
          <Typography className={classes.subject}>विषय:- कार्यादेश दिईएको बारे</Typography>
        </Box>
        <form>
          <Box>
            <Box spacing={1}>
              <Grid item xs={8}>
                <Box>
                  श्री
                  <TextField
                    type="text"
                    name="personName"
                    inputRef={register}
                    className="dotted-input"
                  />
                  {errors.personName && (
                    <span className="error-message">{REQUIRED_FIELD}</span>
                  )}
                  ज्यु
                  </Box>
                <Box>
                  <TextField
                    type="text"
                    name="personAddress"
                    inputRef={register}
                    className="dotted-input"
                  />
                  {errors.address && (
                    <span className="error-message">{REQUIRED_FIELD}</span>
                  )}
                </Box>
                <Box>
                  <TextField
                    type="text"
                    name="consumerCommitteeName"
                    inputRef={register}
                    className="dotted-input"
                  />
                  उ.स.
                  </Box>
                <Box>
                  <TextField
                    type="text"
                    name="palikaAddress"
                    inputRef={register}
                    className="dotted-input"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                &nbsp;
                </Grid>
            </Box>
            <Box spacing={1}>
              <Box component="span" px={1}></Box>
              प्रस्तुत विषयमा त्यस उपभोक्ता समिति र यस कार्यालय बिच पुंजिगत अनुदान कार्यक्रम बाट न.पा. को आ.व.
              <TextField
                type="text"
                name="fiscalYear"
                inputRef={register}
                className="dotted-input"
                defaultValue="२०७६/२०७७"
              />
              का लागी
              <CustomSelect
                options={WARD_OR_MUNICIPALITY_SANCHAALIT_YOJANA}
                name="yojanaSanchaalitCategory"
                onChange={handleYojanaSanchaalitCategoryChange}
                variant="standard"
                className="dotted-select"
              />
              द्वारा संचालन हुने योजना तथा कार्यक्रम अन्तर्गत
              <CustomSelect
                options={YOJANA_DEVELOPMENT_AREA_CATEGORIES}
                onChange={handleWikashKshetraChange}
                name="yojanaDevelopmentAreaCategory"
                variant="standard"
                className="dotted-select"
              />
              अन्तर्गत
              <TextField
                type="text"
                name="planningName"
                inputRef={register}
                className="dotted-input"
              />
              निर्माण योजना कार्यान्वयन गर्न मिति
              <TextField
                type="text"
                name="agreementDate"
                inputRef={register}
                className="dotted-input"
              />
              मा सम्झौता भएकोले लागत ईस्टिमेट बमोजिम तपसिल बमोजिमको निर्देशन पालना गर्ने गरी स्विक्रुत लागत ईष्टिमेट अनुसार मिति
              <TextField
                type="text"
                name="completionDate"
                inputRef={register}
                className="dotted-input"
              />
              गते भित्र गुणस्तरयुक्त तरिकाले कार्य सम्पन्न गर्नु हुन यो कार्यादेश दिइएको छ।
            </Box>
            <Box spacing={1} pt={2}>
              <Box mb={2}>
                <Typography className={classes.boldUnderline}>तपसिल:</Typography>
              </Box>
              <Box>
                १.साईट ईन्चार्ज श्री
                <TextField
                  type="text"
                  name="siteInchargePersonName"
                  className="dotted-input"
                  inputRef={register}
                />
                {errors.siteInchargePersonName && (
                  <span className="error-message">{REQUIRED_FIELD}</span>
                )}
                राय सल्लाह अनुसार गुण्स्तरयुत्त निर्माण कार्य सम्पन्न गर्नु पर्नेछ।
                <Typography>२.लागत ईष्टिमेट भन्दा कम गुण्स्तरको निमार्ण कार्य गरेको देखिएमा उक्त निर्माण कार्यलाई भत्काउन लगाई पुन:निर्माण कार्य गर्दा हुने हानी नोक्सानीको जिम्मेवार स्वयं उपभोक्ता समिति नै हुनेछ।</Typography>
                <Typography>३.आयोजनाको निर्माण कार्य संचालन गर्दा वातावरणिय सुन्दरतालाई प्रतिकुल असर नपर्ने गरी गर्नु पर्नेछ।</Typography>
                <Typography>४.यसमा उल्लेख नभएका विषयहरुको हकमा प्रचलित कानुन बमोजिम हुनेछ।</Typography>
              </Box>
              <Box py={1}>
                <Typography className={classes.boldUnderline}>बोद्यार्थ:</Typography>
                <TextField
                  type="text"
                  name="bodhaartha"
                  className="dotted-input"
                  inputRef={register}
                  multiline
                />
              </Box>
            </Box>
          </Box>
          <Box item="true" textAlign="right" className={classes.btnContainer} displayPrint="none">
            <Button
              className={classes.resetBtn}
              variant="contained"
              color="secondary"
              type="reset"
            >
              रद्द गर्नुहोस
                </Button>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              सुरक्षित गर्नुहोस
                </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
