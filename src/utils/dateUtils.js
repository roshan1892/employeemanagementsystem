import {
  ADToBS,
  BSToAD
} from "bikram-sambat-js";

/* date must be in the format: 2076-10-10 or 2019-10-13.
By default, this utility assumes date is in the BS format. Eg: 2070-10-19.
If you are passing AD date in the date value, please specify dateType "AD" as a param.
*/

export const DateUtils = {
  getBsDateFromAd(date) {
    return ADToBS(date);
  },
  getAdDateFromBs(date) {
    return BSToAD(date);
  },
  getDateMilliseconds(date, dateType) {
    dateType = dateType || "BS";
    if (dateType === "BS") {
      date = BSToAD(date);
    }
    return new Date(date).getTime();
  },
  getDateFromMilliseconds(dateInMills, dateType, showTime) {
    showTime = showTime || false;
    dateType = dateType || "BS";

    // initialize new Date object
    var dateObject = new Date(dateInMills);
    // year as 4 digits (YYYY)
    var year = dateObject.getFullYear();
    // month as 2 digits (MM)
    var month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    // date as 2 digits (DD)
    var date = ("0" + dateObject.getDate()).slice(-2);
    // hours as 2 digits (hh)
    var hours = ("0" + dateObject.getHours()).slice(-2);
    // minutes as 2 digits (mm)
    var minutes = ("0" + dateObject.getMinutes()).slice(-2);
    // seconds as 2 digits (ss)
    var seconds = ("0" + dateObject.getSeconds()).slice(-2);
    var yyMmDd = `${year}-${month}-${date}`;
    var hhMmSs = `${hours}:${minutes}:${seconds}`;
    if (dateType !== "AD") {
      yyMmDd = ADToBS(yyMmDd);
    }
    return `${yyMmDd} ${showTime ? `${hhMmSs}` : ""}`
  },
  getSeperatedDateFromMilliseconds(dateInMills) {
    let splittedDate = ["-", "-", "-"];
    if (dateInMills) {
      splittedDate = this.getDateFromMilliseconds(dateInMills).split("-");
    }
    return {
      day: splittedDate[2],
      month: splittedDate[1],
      year: splittedDate[0]
    }
  },

  // date must be BS date
  getDaysBeforeBSDate(daysBefore, date) {
    date = date ? new Date(DateUtils.getBsDateFromAd(date)) : new Date();
    date.setDate(date.getDate() - daysBefore);
    return DateUtils.getDateFromMilliseconds(date);
  },
};