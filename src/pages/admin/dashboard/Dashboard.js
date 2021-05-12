import { Box, Button, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import { SOMETHING_WENT_WRONG } from "../../../utils/constants";
import AddMunicipalityModal from "../components/add-municipality-modal/AddMunicipalityModal";
import MunicipalitiesList from "../components/municipality-list/MunicipalityList";
import styles from "./style";

export default function AdminDashboard() {
  const classes = styles();
  const [openAddMunicipalityModal, setOpenAddMunicipalityModal] = useState(false);
  const [municipalityTableData, setMunicipalityTableData] = useState([]);
  const [municipalityDefaultData, setMunicipalityDefaultData] = useState({});

  useEffect(() => {
    getMunicipalitiesData();
  }, []);

  const handleAddMunicipalityModalClose = () => {
    setOpenAddMunicipalityModal(false);
  }

  const getMunicipalitiesData = () => {
    YOJANA.get(API_URL.municipality)
      .then(response => {
        setMunicipalityTableData(response.data);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });

  }

  const handleAddMunicipalityModalSubmit = data => {
    YOJANA.post(API_URL.municipality, data)
      .then(response => {
        if (response.data.type === "success") {
          setMunicipalityTableData(response.data.objectList);
          handleAddMunicipalityModalClose();
        }
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
      })
      .catch(error => {
        AddAlertMessage({
          type: "error",
          message: SOMETHING_WENT_WRONG
        });
      });
  }
  const municipalityInfoEdit = id => {
    YOJANA.get(API_URL.municipality + "/" + id)
      .then(response => {
        setMunicipalityDefaultData(response.data)
        setOpenAddMunicipalityModal(true);
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  return (
    <>
      <Box className={classes.mulDartaRegisterContainer} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" borderBottom={1} mb={3} pb={1}>
        <Typography variant="h5">
          PMIS - सबै नगरपालिकाहरु
        </Typography>
        <Box display="flex" alignItems="center">
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => { setOpenAddMunicipalityModal(true) }}>नयाँ पालिका थप्नुहोस्</Button>
        </Box>
      </Box>
      <Box>
        <MunicipalitiesList onEditRow={municipalityInfoEdit.bind(this)} tableData={municipalityTableData} />
      </Box>
      <AddMunicipalityModal municipalityDefaultValues={municipalityDefaultData} handleModalSubmit={handleAddMunicipalityModalSubmit.bind(this)} showAddMunicipalityModal={openAddMunicipalityModal} handleAddMunicipalityModalClose={handleAddMunicipalityModalClose} />
    </>
  );
}
