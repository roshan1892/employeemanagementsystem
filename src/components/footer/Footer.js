import React from "react";
import { Container, Link, Box } from "@material-ui/core";
import styles from "./style";

export default function Footer(props) {
  const classes = styles();
  return (
    <Box className={classes.footer}>
      <Container maxWidth="sm">
        Copyright &copy;&nbsp;
      <Link href="https://www.codefusiontech.com" target="_blank">
          Code Fusion Technologies Pvt.Ltd.
      </Link>
        &nbsp;{new Date().getFullYear()}
      </Container>
    </Box>
  );
}
