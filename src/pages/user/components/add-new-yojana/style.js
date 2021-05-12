import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  addAayojanaSubtitle: {
    borderBottom: "1px solid " + theme.palette.divider,
    marginBottom: theme.spacing(2),
  },
  aayojanaNameContainer: {
    marginTop: "6px"
  },
  aayojanaDatePicker: {
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
  consumerInputsContainer: {
    marginTop: theme.spacing(2),
    "& .MuiFormControl-marginDense": {
      marginTop: theme.spacing(2)
    }
  },
  btnContainer: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderTop: "1px solid " + theme.palette.divider,
  },
  resetBtn: {
    marginRight: theme.spacing(1)
  }
}));
export default styles;