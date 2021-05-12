import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const styles = makeStyles(theme => ({
  mainModal: {
    position: "relative",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    flexDirection: "column",
    justifyContent: Box
  },
  reactSelect: {
    opacity: 0,
    width: "100%",
    height: 0,
    position: "absolute"
  },
  paperStyle: {
    padding: 16
  }
}));
export default styles;
