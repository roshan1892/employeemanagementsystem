import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import React, { useState } from "react";
import {useForm} from "react-hook-form";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import CustomModal from "../../../components/modal/CustomModal";
import { useUserDispatch } from "../../../context/UserContext";
import { AppUtils } from "../../../utils/appUtils";
import { LOGOUT_SUCCESS, PASSWORD_DO_NOT_MATCHES, REQUIRED_FIELD, SOMETHING_WENT_WRONG } from "../../../utils/constants";
import UserInfo from "./helpers/user-info/UserInfo";
import styles from "./Style";

export default function UserProfile(props) {
  const classes = styles();
  const { register, handleSubmit, errors, watch } = useForm();
  const [openPasswordChangeModal, setOpenPasswordChangeModal] = useState(false);
  var userDispatch = useUserDispatch();

  const closePasswordChangeModal = () => {
    setOpenPasswordChangeModal(false);
  };

  const submitPasswordChangeModal = data => {
    YOJANA.post(API_URL.changePassword, data)
      .then(response => {
        if (response.data.type === "success") {
          AppUtils.removeUserRef();
          userDispatch({ type: LOGOUT_SUCCESS });
          props.history.push("/");
        } else {
          AddAlertMessage({
            type: response.data.type,
            message: response.data.message
          });
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <Box className={classes.profilePage}>
      <Typography variant="h2" className="border-bottom-heading">
        प्रयोगकर्ता सेटिङ सम्पादन गर्नुहोस् ।
      </Typography>
      <Box pt={3}>
        <UserInfo />
      </Box>
      <Box mt={2} py={2}>
        <Typography variant="h2" className="border-bottom-heading">
          पासवर्ड परिवर्तन गर्नुहोस् ।
        </Typography>
        <Box align="center" pt={3}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => {
              setOpenPasswordChangeModal(true);
            }}
          >
            पासवर्ड परिवर्तन गर्नुहोस्
          </Button>
        </Box>
        <CustomModal
          title="पासवर्ड परिवर्तन गर्नुहोस् ।"
          showModal={openPasswordChangeModal}
          onModalSubmit={handleSubmit(submitPasswordChangeModal)}
          onModalClose={closePasswordChangeModal}
        >
          <form>
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  id="outlined-old-password-input"
                  label="वर्तमान पासवर्ड"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="oldPassword"
                  inputRef={register({
                    required: true
                  })}
                  fullWidth
                />
                {errors.oldPassword && <span className="error-message">{REQUIRED_FIELD}</span>}
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  id="outlined-new-password-input"
                  label="नयाँ पासवर्ड"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="newPassword"
                  inputRef={register({
                    required: true
                  })}
                />
                {errors.newPassword && <span className="error-message">{REQUIRED_FIELD}</span>}
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  id="outlined-confirm-password-input"
                  label="नयाँ पासवर्ड सुनिश्चित गर्नुहोस"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="confirmPassword"
                  inputRef={register({
                    required: true,
                    validate: value => value === watch("newPassword")
                  })}
                />
                {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className="error-message">{REQUIRED_FIELD}</span>}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className="error-message">{PASSWORD_DO_NOT_MATCHES} </span>}
              </Grid>
            </Grid>
          </form>
        </CustomModal>
      </Box>
    </Box>
  );
}
