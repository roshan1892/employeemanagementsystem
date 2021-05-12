import { Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, Grid, Link, TextField } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import YOJANA, { API_URL } from "../../../api/api";
import logo from "../../../assets/img/logo.png";
import AddAlertMessage from "../../../components/alert/Alert";
import Spinner from "../../../components/loader/Loader";
// context
import { useUserDispatch } from "../../../context/UserContext";
import { AppUtils } from "../../../utils/appUtils";
import { SessionStorage } from "../../../utils/storage/sessionStorage";
import {
  ENTER_VALID_EMAIL,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUIRED_FIELD,
  SOMETHING_WENT_WRONG,
  IS_SESSION_EXPIRED,
  SESSION_EXPIRED
} from "../../../utils/constants/index";
import styles from "./style";

export default function LoginForm(props) {
  const classes = styles();
  const { register, handleSubmit, errors } = useForm();

  // global
  var userDispatch = useUserDispatch();

  // local
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (SessionStorage.getItem(IS_SESSION_EXPIRED) === "true") {
      AddAlertMessage({
        type: "error",
        message: SESSION_EXPIRED
      });
      SessionStorage.removeItem(IS_SESSION_EXPIRED);
    }
  }, []);

  const onSubmit = data => {
    setIsLoading(true);
    YOJANA.post(API_URL.login, data)
      .then(response => {
        setIsLoading(false);
        let data = response.data;
        if (data.type === "success") {
          AppUtils.saveUserCredentials(data);
          userDispatch({ type: LOGIN_SUCCESS });
          props.history.push("/");
        } else {
          userDispatch({ type: LOGIN_FAILURE });
          AddAlertMessage({ type: data.type, message: data.message });
        }
      })
      .catch(error => {
        setIsLoading(false);
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        userDispatch({ type: LOGIN_FAILURE });
      });
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box textAlign="center" my={3}>
        <img src={logo} alt="YOJANA Logo" width="124" />
        <Box fontSize="h5.fontSize"> PMIS </Box>
        <Box component="small"> योजना व्यवस्थापन प्रणाली </Box>
      </Box>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="userEmail"
                label="ईमेल"
                margin="normal"
                variant="outlined"
                name="userEmail"
                inputRef={register({
                  required: true,
                  pattern: /\S+@\S+\.\S+/
                })}
              />
              {errors.userEmail && errors.userEmail.type === "required" && <span className="error-message">{REQUIRED_FIELD}</span>}
              {errors.userEmail && errors.userEmail.type === "pattern" && <span className="error-message">{ENTER_VALID_EMAIL}</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="पासवर्ड"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                name="password"
                inputRef={register({
                  required: true
                })}
              />
              {errors.password && <span className="error-message">{REQUIRED_FIELD}</span>}
            </Grid>
            <FormControlLabel control={<Checkbox color="primary" />} label="मलाई सम्झनुहोस्।" name="rememberMe" inputRef={register} />
            <Grid item xs={12} className={classes.loginBtnContainer}>
              {isLoading ? <Spinner /> : (
                <Button endIcon={<ExitToAppIcon />} size="large" fullWidth color="primary" variant="contained" type="submit">
                  साइन इन गर्नुहोस्
              </Button>
              )}
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Box align="right" pt={1}>
        <Link href="/forget-password" underline="none" color="textSecondary" className={classes["forget-password-label"]}>
          पासवर्ड बिर्सनु भयो ?
        </Link>
      </Box>
    </Container>
  );
}
