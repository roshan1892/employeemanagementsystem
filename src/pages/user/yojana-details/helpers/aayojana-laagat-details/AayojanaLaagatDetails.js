import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./style";

export default function AayojanaLaagatDetails(props) {
  const classes = styles();
  const [aayojanaLaagatData, setAayojanaLaagatData] = useState(null);
  useEffect(() => {
    setAayojanaLaagatData(props.aayojanaLaagatData);
  }, [props.aayojanaLaagatData])

  return (
    aayojanaLaagatData &&
    <Container maxWidth="lg" className={classes.root}>
      <Typography>क) लागत अनुमान रु: { aayojanaLaagatData.estimatedTotalCost || "-"}</Typography>
      <Typography>ख) लागत व्यहोर्ने स्रोतहरु</Typography>
      <Box pl={3}>
        <Typography>कार्यालय: { aayojanaLaagatData.fundFromOffice || "-"}</Typography>
        <Typography>उपभोक्ता समिति: {aayojanaLaagatData.fundFromConsumerBoard || "-"}</Typography>
        <Typography>अन्य: { aayojanaLaagatData.fundFromOtherSources || "-"}</Typography>
      </Box>
      <Box className={classes.donationItemsList}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography>ग) बस्तुगत अनुदानको विवरण</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>सामाग्रीको नाम</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>इकाई</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              १.सघंबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromSangh || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromSangh || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              २.प्रदेशबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromProvince || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromProvince || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              ३.स्थानीय तहबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromLocalGovernment || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromLocalGovernment || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              ४.गैरसरकारी सघंसंस्थाबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromPrivateInstitutions || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromPrivateInstitutions || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              ५.विदेशी दात्री सघंसंस्थाबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromForeignInstitutions || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromForeignInstitutions || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              ६.उपभोक्ता समितिबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromConsumerCommittee || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromConsumerCommittee || "-"}
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4} pl={2}>
            <Box pl={3}>
              ७.अन्य निकायबाट
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsFromOtherSources || "-"}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          { aayojanaLaagatData.assetsUnitFromOthers || "-"}
          </Grid>
        </Grid>
      </Box>
      <Typography>घ) आयोजनाबाट लाभान्वित हुने</Typography>
      <Box pl={3}>
        <Typography>१.घरपरिवार संख्या: {aayojanaLaagatData.noOfFamiliesBenefitted || "-"}</Typography>
        <Typography>२.जनसंख्या: {aayojanaLaagatData.totalNumberOfPeopleBenefitted || "-"}</Typography>
        <Typography>३.संगठित संस्था: {aayojanaLaagatData.noOfOrganizationBenefitted || "-"}</Typography>
        <Typography>४.अन्य: {aayojanaLaagatData.othersBenefitted || "-"}</Typography>
      </Box>
    </Container>
  );
}
