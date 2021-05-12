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
  installmentTypeSelectContainer: {
    marginTop: "-8px",
  },
  installmentDatePicker: {
    display: "flex",
    flexFlow: "column",
    "& input": {
      minHeight: "40px"
    }
  },
  hiddenInput: {
    display: "none",
  },
  documentRow: {
    padding: 0,
    paddingBottom: theme.spacing(.5),
    listStyleType: "disc",
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main
  },
  item: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    fontSize: "85%"
  },
  deleteDocumentIcon: {
    padding: 0,
    verticalAlign: "top",
  },
  actionButtons: {
    "& .MuiIconButton-root": {
      padding: theme.spacing(1)
    }
  }
}));
export default styles;