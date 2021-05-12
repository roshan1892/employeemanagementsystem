import { Box, Button, Container, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import { AppUtils } from "../../../utils/appUtils";
import { ID, SOMETHING_WENT_WRONG } from "../../../utils/constants";
import AddUserModal from "../components/add-user-modal/AddUserModal";
import MunicipalityUserList from "../components/municipality-user-list/MunicipalityUserList";

export default function MunicipalityHome(props) {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleAddUserModalClose = () => {
    setOpenAddUserModal(false);
  }

  useEffect(() => {
    getMunicipalityUserData();
  }, []);

  const getMunicipalityUserData = () => {
    let palikaId = AppUtils.getUrlParam(ID);
    if (palikaId) {
      YOJANA.get(API_URL.municipalityUsers + "/" + palikaId).then(response => {
        setTableData(response.data);
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
    }
  }

  const handleSubmit = data => {
    let palikaId = AppUtils.getUrlParam(ID);
    if (palikaId) {
      data.palikaId = palikaId;
      YOJANA.post(API_URL.user, data)
        .then(response => {
          if (response.data.type === "success") {
            setTableData(response.data.objectList);
            handleAddUserModalClose();
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
  };
  return (<Container>
    <Box>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => { setOpenAddUserModal(true) }}>नयाँ प्रयोगकर्ता थप्नुहोस्</Button>
    </Box>
    <Box>
      <Typography variant="h5">
        PMIS - सबै प्रयोगकर्ताहरू
  </Typography>
    </Box>
    <Box>
      <MunicipalityUserList tableData={tableData} />
    </Box>
    <AddUserModal showAddUserModal={openAddUserModal} handleAddUserModalClose={handleAddUserModalClose} onSubmit={handleSubmit.bind(this)} />
  </Container >
  )
}