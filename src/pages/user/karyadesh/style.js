import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    fontSize: theme.typography.htmlFontSize
  },
  subject: {
    fontWeight: theme.typography.fontWeightMedium
  },
  boldUnderline: {
    fontWeight: theme.typography.fontWeightMedium,
    textDecoration: "underline"
  },
  btnContainer: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: "1px solid rgba(0,0,0,0.2)"
  },
  resetBtn: {
    marginRight: theme.spacing(1)
  }
}));
export default styles;