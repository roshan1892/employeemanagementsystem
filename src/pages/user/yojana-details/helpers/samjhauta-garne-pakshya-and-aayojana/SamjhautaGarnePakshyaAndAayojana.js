import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AppUtils } from "../../../../../utils/appUtils";
import { DateUtils } from "../../../../../utils/dateUtils";
import styles from "./style";

export default function SamjhautaGarnePakshyaAndAayojana(props) {
  const classes = styles();
  const [aayojanaData, setAayojanaData] = useState(null);
  useEffect(() => {
    setAayojanaData(props.aayojanaData);
  }, [props.aayojanaData])

  return (
    aayojanaData &&
    <Container maxWidth="lg" className={classes.root}>
      <Typography className={classes.heading}>क) उपभोक्त्ता समितिको विवरण:</Typography>
      <Box pl={3}>
        <Typography>नाम: {aayojanaData.consumerCommitteeName || "-"}</Typography>
        <Typography>ठेगाना: {aayojanaData.consumerCommitteeAddress || "-"}</Typography>
      </Box>
      <Typography>ख) आयोजनाको विवरण:</Typography>
      <Box pl={3}>
        <Typography>नाम: {aayojanaData.aayojanaName || "-"}</Typography>
        <Typography>आयोजना स्थल: {aayojanaData.aayojanaAddress || "-"}</Typography>
        <Typography>उद्देश्य: {aayojanaData.aayojanaGoal || "-"}</Typography>
        <Typography>आयोजना सुरु हुने मिति: {AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(aayojanaData.aayojanaSuruHuneMiti))}</Typography>
        <Typography>आयोजना सम्पन्‍न हुने मिति: {AppUtils.replaceWithNepaliDigit(DateUtils.getDateFromMilliseconds(aayojanaData.aayojanaSampannaHuneMiti))}</Typography>
      </Box>
    </Container>
  );
}
