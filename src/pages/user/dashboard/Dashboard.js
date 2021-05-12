import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../api/api";
import BarDiagram from "../../../components/charts/BarDiagram";
import PieChart from "../../../components/charts/PieChart";
import EmptyContainer from "../../../components/empty-container/EmptyContainer";
import { AppMisc } from "../../../misc/appMisc";
import styles from "./style";

export default function UserDashboard() {
  const classes = styles();
  const [yojanaPerCategoryData, setYojanaPerCategoryData] = useState([]);
  const [yojanaPerWardData, setYojanaPerWardData] = useState([]);

  const [yojanaPerCategoryLabels, setYojanaPerCategoryLabels] = useState([]);
  const [yojanaPerWardLabels, setYojanaPerWardLabels] = useState([]);

  const getYojanaPerCategoryData = () => {
    YOJANA.get(API_URL.yojanaData + "/yojana-per-category").then(response => {
      var data = response.data;
      if (response.data.length !== 0) {
        let tempLabels = [];
        let tempData = []
        for (let i = 0; i < data.length; i++) {
          tempLabels.push(AppMisc.getYojanaDevelopmentAreaCategoryName(data[i].yojanaCategory));
          tempData.push(data[i].numberOfYojanas);
        }
        setYojanaPerCategoryLabels(tempLabels);
        setYojanaPerCategoryData(tempData);
      }
    });
  };

  const getYojanaPerWardData = () => {
    YOJANA.get(API_URL.yojanaData + "/yojana-per-ward").then(response => {
      var data = response.data;
      if (response.data.length !== 0) {
        let tempLabels = [];
        let tempData = []
        for (let i = 0; i < data.length; i++) {
          tempLabels.push(`वडा नं. ${data[i].wardNumber}`);
          tempData.push(data[i].numberOfYojanas);
        }
        setYojanaPerWardLabels(tempLabels);
        setYojanaPerWardData(tempData);
      }
    });
  };

  const emptyChartMsgContainer = () => {
    return (
      <EmptyContainer>
        <Typography className={classes.emptyMsg}>
          माफ गर्नुहोस्, प्रणालीमा कुनै पनि योजना समावेश गरिएको छैन। कृपया पहिले योजना थप्नुहोस्।
          </Typography>
      </EmptyContainer>
    )
  }

  useEffect(() => {
    getYojanaPerCategoryData();
    getYojanaPerWardData();
  }, []);
  return (
    <Container maxWidth="lg" className={classes.root} disableGutters>
      <Box>
        <h2 className="border-bottom-heading">योजनाको क्षेत्रअनुसारका सम्पूर्ण योजनाहरु</h2>
        {
          yojanaPerCategoryData.length === 0 ?
            emptyChartMsgContainer() : (
              <PieChart
                labels={yojanaPerCategoryLabels}
                chartData={yojanaPerCategoryData}
              />
            )
        }
      </Box>
      <Box>
        <h2 className="border-bottom-heading">वडा स्तरका सम्पूर्ण योजनाहरु</h2>
        {
          yojanaPerWardData.length === 0 ?
            emptyChartMsgContainer() : (
              <BarDiagram
                data={yojanaPerWardData}
                labels={yojanaPerWardLabels}
                diagramLabel="वडा स्तरका सम्पूर्ण योजनाहरु"
              />
            )
        }
      </Box>
    </Container >
  );
}
