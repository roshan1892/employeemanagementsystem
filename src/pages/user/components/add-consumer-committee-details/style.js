import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    paddingTop: "0",
    marginBottom: theme.spacing(3),
  },
  consumerCommitteeEstablishedDatePicker: {
    display: "flex",
    flexFlow: "column",
    "& p": {
      "&.MuiTypography-body1": {
        fontSize: "85%",
        paddingBottom: "5px"
      }
    },
    "& input": {
      minHeight: "40px"
    }
  },
  alignBottom: {
    display: "flex",
    alignItems: "flex-end"
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