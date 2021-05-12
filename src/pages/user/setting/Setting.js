import { Box, Button, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React, { useState } from "react";
import AddUserModal from "../../admin/components/add-user-modal/AddUserModal";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import { SOMETHING_WENT_WRONG } from "../../../utils/constants";

export default function UserSetting() {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);

  const handleAddUserModalClose = () => {
    setOpenAddUserModal(false);
  };

  const submitAddUserModal = data => {
    YOJANA.post(API_URL.user, data)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === "success") {
          handleAddUserModalClose();
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <Box>
      <Typography variant="h2" className="border-bottom-heading">नयाँ प्रयोगकर्ता थप गर्नुहोस् ।</Typography>
      <Box pt={3}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => {
          setOpenAddUserModal(true);
        }}>
          नयाँ प्रयोगकर्ता थप गर्नुहोस्
        </Button>
      </Box>
        <AddUserModal onSubmit={submitAddUserModal.bind(this)} showAddUserModal={openAddUserModal} handleAddUserModalClose={handleAddUserModalClose} />
    </Box>
  );
}
