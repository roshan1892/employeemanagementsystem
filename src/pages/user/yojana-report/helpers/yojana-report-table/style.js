import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4)
  },
  yojanaReportTableHeading: {
    marginTop: 0,
    paddingBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: "1px solid " + theme.palette.grey[500]
  },
  actionItems: {
    textAlign: "right"
  },
  printIcon: {
    cursor: "pointer"
  }

}));
export default styles;