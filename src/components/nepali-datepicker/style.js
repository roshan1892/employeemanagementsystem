import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
  nepaliDateInput: {
    borderRadius: "4px",
    border: "1px solid " + theme.palette.text.primary,
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    minHeight: theme.spacing(4),
    fontSize: theme.typography.fontSize,
    "&:focus": {
      outline: "none"
    },
  },
  dateLabel: {
    marginRight: theme.spacing(1),
    display: "inline-block"
  }
}));
export default styles;