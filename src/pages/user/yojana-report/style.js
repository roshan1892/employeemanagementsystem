import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  yojanaReportMainHeading: {
    marginTop: 0,
    paddingBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: "1px solid " + theme.palette.grey[500]
  },
  aayojanaDatePickerContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
      minHeight: "56px"
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