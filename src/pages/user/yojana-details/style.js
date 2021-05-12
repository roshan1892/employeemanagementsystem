import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(1.5),
  },
  paperHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  documentsNotUploadedMsg: {
    color: theme.palette.text.secondary,
  },
  hiddenInput: {
    display: "none",
  },
  documentRow: {
    padding: 0
  }
}));
export default styles;