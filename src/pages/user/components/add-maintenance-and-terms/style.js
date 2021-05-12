import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    paddingTop: "0",
    marginBottom: theme.spacing(3),
  },
  maintenanceAndTermsDetailsSubtitle: {
    borderBottom: "1px solid " + theme.palette.divider,
    marginBottom: theme.spacing(2),
  },
  btnContainer: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    borderTop: "1px solid " + theme.palette.divider,
  },
  resetBtn: {
    marginRight: theme.spacing(1)
  }
}));
export default styles;