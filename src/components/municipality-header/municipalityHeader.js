import { Box, Container, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../api/api";
import logo from "../../assets/img/government-logo.png";
import { AppMisc } from "../../misc/appMisc";
import { PALIKA_ID, SOMETHING_WENT_WRONG } from "../../utils/constants/index";
import { LocalStorage } from "../../utils/storage/localStorage";
import AddAlertMessage from "../alert/Alert";
import styles from "./style";


export default function MunicipalityHeader(props) {
  const classes = styles();
  const [municipalityData, setMunicipalityData] = useState([]);

  const getMunicipalityData = () => {
    YOJANA.get(API_URL.municipality + "/" + LocalStorage.getItem(PALIKA_ID))
      .then(response => {
        setMunicipalityData(response.data)
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  useEffect(() => {
    getMunicipalityData();
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root} disableGutters>
      <Box className={classes.mainHeader}>
        <Box>
          <img src={logo} className={classes.logo} alt="Nepal Government Logo" />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">{AppMisc.getMunicipalityName(municipalityData.municipalityName)}</Typography>
          <Typography variant="h2">
            {municipalityData.palikaType === "GAUN_PALIKA" ? "गाउँ कार्यपालिकाको कार्यालय" : "नगर कार्यपालिकाको कार्यालय"}
          </Typography>
          <Typography variant="h4">
            {municipalityData.address &&
              municipalityData.address + ", "}
            {
              municipalityData.district &&
              AppMisc.getDistrictName(municipalityData.district)
            }
          </Typography>
          <Typography variant="body1">{AppMisc.getProvinceName(municipalityData.province)}, नेपाल</Typography>
        </Box>
        <Box className={classes.secondaryLogoContainer}>
          {/* TODO: Roshan: Backlog - add upload logo section in the municipality setting and display logo here, if user had uploaded it. There must be a remove logo option too in the municipality setting */}
          {municipalityData.additionalLogo &&
            <img src={logo} className={classes.logo} alt="Nepal Government Logo" />
          }
        </Box>
      </Box>
      {
        !props.hideSubHeader &&
          <Box className={classes.subHeader} mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Box>पत्र संख्या: <TextField type="text" name="patraSankhya" className="dotted-input" /></Box>
              <Box>चलानी नं.: <TextField type="text" name="chalaniNumber" className="dotted-input" /></Box>
            </Box>
            <Box>मिति:<TextField type="text" name="date" className="dotted-input" /></Box></Box>
          </Box>
      }
    </Container>
  );
}