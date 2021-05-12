import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactNotification from "react-notifications-component";
import { Router, Switch } from "react-router-dom";
import "./assets/scss/app.scss";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";
import MunicipalityHome from "./pages/admin/municipality-home/MunicipalityHome";
import Login from "./pages/public/login/Login";
import NotAuthorized from "./pages/public/not-authorized/NotAuthorized";
import GlobalPageNotFound from "./pages/public/not-found/GlobalPageNotFound";
import AllYojana from "./pages/user/all-yojana/AllYojana";
import UserDashboard from "./pages/user/dashboard/Dashboard";
import ForgetPassword from "./pages/public/forget-password/ForgetPassword";
import Karyadesh from "./pages/user/karyadesh/Karyadesh";
import UserProfile from "./pages/user/profile/Profile";
import ResetPassword from "./pages/public/reset-password/ResetPassword";
import UserSetting from "./pages/user/setting/Setting";
import YojanaDetails from "./pages/user/yojana-details/YojanaDetails";
import YojanaReportPage from "./pages/user/yojana-report/YojanaReportPage";
import CommentAndCommand from "./pages/user/comment-and-command/CommentAndCommand";
import BankKhataSanchalanSifarish from "./pages/user/bank-khata-sanchalan/BankKhataSanchalanSifarish";
import KaryadeshReportPage from "./pages/user/karyadesh-report/KaryadeshReport";
import Route from "./routes/Route";
import history from "./services/history";
import KaryadeshDetails from "./pages/user/karyadesh-details/KaryaDeshDetails";


export default function App() {
  return (
    <>
      <ReactNotification />
      <Router history={history}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/reset" component={ResetPassword} />
            <Route
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
              isPrivate
            />
            <Route
              exact
              path="/user/all-yojana"
              component={AllYojana}
              isPrivate
            />
            <Route
              exact
              path="/user/yojana-details/"
              component={YojanaDetails}
              isPrivate
            />
            <Route
              exact
              path="/user/karyadesh-details/"
              component={KaryadeshDetails}
              isPrivate
            />
            <Route
              exact
              path="/page-not-found"
              component={GlobalPageNotFound}
              isWrongLink
            />
            <Route
              exact
              path="/user-not-authorized"
              component={NotAuthorized}
            />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route
              exact
              path="/user/dashboard"
              component={UserDashboard}
              isPrivate
            />
            <Route
              exact
              path="/user/setting"
              component={UserSetting}
              isPrivate
            />
            <Route
              exact
              path="/user/profile"
              component={UserProfile}
              isPrivate
            />
            <Route
              exact
              path="/user/karyadesh"
              component={Karyadesh}
              isPrivate
            />
            <Route
              exact
              path="/user/yojana-report"
              component={YojanaReportPage}
              isPrivate
            />
            <Route
              exact
              path="/admin/municipality-home"
              component={MunicipalityHome}
              isPrivate
            />
            <Route
              exact
              path="/user/comment-command"
              component={CommentAndCommand}
              isPrivate
            />
            <Route
              exact
              path="/user/bank-khata-sanchalan"
              component={BankKhataSanchalanSifarish}
              isPrivate
            />
            <Route
              exact
              path="/user/karyadesh-report"
              component={KaryadeshReportPage}
              isPrivate
            />
            <Route component={GlobalPageNotFound} isWrongLink />
          </Switch>
        </Layout>
      </Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}
