import {
  Box,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Print } from "@material-ui/icons";
import MunicipalityHeader from "../../../components/municipality-header/municipalityHeader";


export default function Karyadesh() {
  const printComponentRef = useRef();

  return (
    <Box>
      <MunicipalityHeader />
      <Typography variant="h2" className="border-bottom-heading">
        विषय:सिफारिस सम्बन्धमा।
    </Typography>
      <ReactToPrint
        trigger={() => <Print />}
        content={() => printComponentRef.current}
      />
      <form ref={printComponentRef}>
        <Box>
          <Box spacing={1}>
            <Grid item xs={6}>
              श्री
            <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="bankName"
              />
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="bankAddress"
              />
            </Grid>
            <Grid item xs={6} >
              उपरोक्त सम्बन्धमा यस
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="municipalityName"
              />
              वडा नं.
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="wardNumber"
              />
              को
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="wardNumber"
              />
              उपभोक्ता समितिको खाता खोल्नका लागिइ समितिका अध्यक्ष श्री
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="adhsaksheyaName"
              />
              ,सचिव श्री
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="sachibName"
              />
              र कोषाध्यक्ष श्री
              <TextField
                type="text"
                margin="normal"
                variant="outlined"
                name="koshadhaksheyaName"
              />
              को संयुत्त दस्तखत बाट खाता सन्चालन हुने गरिइ तहाँ कार्यालय को नियमानुसार खाता सन्चालन गरी दिन हुन सिफरिस साथ अनुरोध गरिन्छ।
            </Grid>
          </Box>
          <Box spacing={1}>
            <TextField
              type="text"
              margin="normal"
              variant="outlined"
              name="adhikritName"
            />
            प्रमुख प्रशासकिय अधिकृत
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              type="reset"
            >
              CANCEL
            </Button>
          </Box>
        </Box>
      </form >
    </Box >
  );
}
