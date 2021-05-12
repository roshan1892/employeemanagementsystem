import { Box, Container, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Print } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import MunicipalityHeader from "../../../components/municipality-header/municipalityHeader";
import { AppUtils } from "../../../utils/appUtils";
import { ID, SOMETHING_WENT_WRONG } from "../../../utils/constants";
import { DateUtils } from "../../../utils/dateUtils";

export default function KaryadeshDetails() {
  const [karyadeshDetails, setKaryadeshDetails] = useState();
  const printComponentRef = useRef();

  const getKaryadeshDetails = () => {
    YOJANA.get(API_URL.karyadesh + "/" + AppUtils.getUrlParam(ID)).then(response => {
      setKaryadeshDetails(response.data);
    }).catch(error => {
      AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
    });
  }

  useEffect(() => {
    getKaryadeshDetails();
  }, [])

  return (
    <>
      {karyadeshDetails && (
        <Container>
          <ReactToPrint
            trigger={() => <Print />}
            content={() => printComponentRef.current}
          />
          <Box ref={printComponentRef}>
            <MunicipalityHeader />
            <Typography variant="h2" className="border-bottom-heading">
              विषय:- कार्यादेश दिईएको बारे
              </Typography>
            <Box>
              <Box spacing={1}>
                <Grid item xs={6}>
                  <Typography>श्री {karyadeshDetails.personName || "-"} ज्यु </Typography>
                </Grid>
                <Grid item xs={6} >
                  <Typography> {karyadeshDetails.personAddress || "-"} </Typography>
                </Grid>
              </Box>
              <Box spacing={1}>
                प्रस्तुत विषयमा त्यस उपभोक्ता समिति र यस कार्यालय बिच पुजिंगत अनुदान कार्यक्रम बाट न.पा. को आ.व. २०७५/२०७६ का लागी वडा द्वारा संचालन हुने योजाना तथा कार्यक्रम अन्तर्गत
            {karyadeshDetails.yojanaDevelopmentAreaCategory || "-"}
                अन्तर्गत
            {karyadeshDetails.planningName || "-"}
                निर्माण योजना कार्यान्वयन गर्न मिति
            <Typography> {AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(karyadeshDetails.agreementDate)) || "-"} </Typography>
                मा सम्झौता भएकोले लागत ईस्टिमेट बमोजिम तपसिल बमोजिमको निर्देशन पालना गर्ने गरी स्विक्रुत लागत ईष्टिमेट अनुसार मिति
            <Typography> {AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(karyadeshDetails.completionDate)) || "-"} </Typography>
                गते भित्र गुण्स्तरयुत्त तरिकाले कार्य सम्पन्न गर्नु हुन यो कार्यादेश दिइएको छ।
          </Box>
              <Box spacing={1}>
                <Grid>
                  <Typography className="underline bold">तपसिल</Typography>
                </Grid>
                <Grid>
                  १.साईट ईन्चार्ज श्री {karyadeshDetails.siteInchargePersonName || "-"}
                  राय सल्लाह अनुसार गुण्स्तरयुत्त निर्माण कार्य सम्पन्न गर्नु पर्नेछ।
            </Grid>
                <Grid>
                  २.लागत ईष्टिमेट भन्दा कम गुण्स्तरको निमार्ण कार्य गरेको देखिएमा उक्त निर्माण कार्यलाई भत्काउन लगाई पुन:निर्माण कार्य गर्दा हुने हानी नोक्सानीको जिम्मेवार स्वयं उपभोक्ता समिति नै हुनेछ।
            </Grid>
                <Grid>
                  ३.आयोजनाको निर्माण कार्य संचालन गर्दा वातावरणिय सुन्दरतालाई प्रतिकुल असर नपर्ने गरी गर्नु पर्नेछ।
            </Grid>
                <Grid>
                  ४.यसमा उल्लेख नभएका विषयहरुको हकमा प्रचलित कानुन बमोजिम हुनेछ।
            </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
