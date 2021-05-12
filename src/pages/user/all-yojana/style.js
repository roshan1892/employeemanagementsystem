import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
  addAayojanaMainHeading: {
    marginTop: 0,
    paddingBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: "1px solid "+ theme.palette.grey[500]

  }
}));
export default styles;