import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../api/api";
import AddYojana from "../components/add-new-yojana/AddNewYojana";
import YojanaSamjhautaTable from "./helpers/yojana-samjhauta-table/YojanaSamjhautaTable";
import { useHistory } from "react-router-dom";
import styles from "./style";
import AddAlertMessage from "../../../components/alert/Alert";
import { SOMETHING_WENT_WRONG, DEFAULT_RECORDS_LIMIT } from "../../../utils/constants/index";

export default function AllYojana() {
  const classes = styles();
  let history = useHistory();
  const [aayojanaData, setAayojanaData] = useState([]);

  const getAllAayojanaData = () => {
    YOJANA.get(API_URL.aayojana + "?limit=" + DEFAULT_RECORDS_LIMIT).then(response => {
      setAayojanaData(response.data);
    }).catch(error => {
      AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
    });
  };

  const handleAayojanaDataUpdate = data => {
    history.push("yojana-details?id=" + data.id);
  };

  useEffect(() => {
    getAllAayojanaData();
  }, []);
  return (
    <Container maxWidth="xl" className={classes.root} disableGutters>
      <h2 className={classes.addAayojanaMainHeading}>नयाँ योजना थप्नुहोस्।</h2>
      <AddYojana
        onAayojanaDataUpdate={data => handleAayojanaDataUpdate(data)}
      />
      <h2 className={classes.addAayojanaMainHeading}>
        भर्खरका थपिएका योजनाहरू
      </h2>
      <YojanaSamjhautaTable tableData={aayojanaData} showActionColumn={true} />
    </Container>
  );
}
