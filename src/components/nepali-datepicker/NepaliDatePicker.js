import { Typography, Tooltip } from "@material-ui/core";
import { NepaliDatePicker } from "datepicker-nepali-reactjs";
import React from "react";
import styles from "./style";

export default function NepaliDate(props) {
  const classes = styles();
  return (
    <>
      {
        !props.hideLabel &&
        (
          props.tooltipText ? (
            <Tooltip title={props.tooltipText} placement={props.tooltipPlacement || "top"} arrow>
              <Typography className={props.dateLabelClass || classes.dateLabel} variant={props.labelType || "body1"}>{props.labelText || "मिति:"}</Typography>
            </Tooltip>
          ) :
            (
              <Typography className={props.dateLabelClass || classes.dateLabel} variant={props.labelType || "body1"}>{props.labelText || "मिति:"}</Typography>
            )
        )
      }

      <NepaliDatePicker className={props.className || classes.nepaliDateInput} {...props} />
    </>
  )
}