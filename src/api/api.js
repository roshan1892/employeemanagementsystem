import axios from "axios";
import { AppUtils } from "../utils/appUtils";
import { IS_SESSION_EXPIRED } from "../utils/constants";
import { SessionStorage } from "../utils/storage/sessionStorage";

export const LOCAL_CONSTANTS = {
  BASE_URL: "http://localhost:8088/api/"
};

export const DEV_CONSTANTS = {
  BASE_URL: "https://planning.asktrek.com/api/"
};

export const PROD_CONSTANTS = {
  BASE_URL: "https://planning.samyantra.org/api/"
};

const BASE_URL = LOCAL_CONSTANTS.BASE_URL;

export const API_URL = {
  login: BASE_URL + "login",
  user: BASE_URL + "user",
  municipality: BASE_URL + "municipality",
  changePassword: BASE_URL + "change-password",
  forgetPassword: BASE_URL + "public/forget-password",
  resetPassword: BASE_URL + "public/reset-password",
  aayojana: BASE_URL + "user/aayojana",
  logout: BASE_URL + "logout",
  installmentDetail: BASE_URL + "installment-detail",
  karyadesh: BASE_URL + "user/karyadesh",
  yojanaLaagatDetail: BASE_URL + "user/yojana-laagat-detail",
  aayojanaReport: BASE_URL + "user/yojana-report",
  consumerCommittee: BASE_URL + "user/consumer-committee",
  consumerCommitteeOfficial: BASE_URL + "user/consumer-committee/official",
  yojanaData: BASE_URL + "user/yojana-data",
  municipalityUsers: BASE_URL + "user/municipality-users",
  commentAndCommand: BASE_URL + "user/comment-command",
  karyadeshReport: BASE_URL + "user/karyadesh-report",
  aayojanaMaintenance: BASE_URL + "user/aayojana-maintenance"
};

const YOJANA = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

YOJANA.interceptors.request.use(
  config => {
    if (config.baseURL === BASE_URL && !config.headers.Authorization) {
      var authToken = AppUtils.getAuthToken();
      if (authToken) {
        config.headers.Authorization = authToken;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

YOJANA.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        AppUtils.removeUserRef();
        SessionStorage.setItem(IS_SESSION_EXPIRED, "true");
        window.location.href = "/";
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default YOJANA;
