import { BorderColor as BorderColorIcon, AccountBalance as AccountBalanceIcon, DynamicFeed as DynamicFeedIcon, FileCopy as FileCopyIcon, Home as HomeIcon, Note as NoteIcon, Timeline as TimelineIcon, Search as SearchIcon } from "@material-ui/icons";
import React from "react";
export const YOJANA_ADMIN_SIDEBAR_LINKS = [{
  id: 0,
  label: "Dashboard",
  link: "dashboard",
  iconComponent: <HomeIcon fontSize="small" />
}];

export const YOJANA_USER_SIDEBAR_LINKS = [{
  id: 0,
  label: "गृहपृष्ठ",
  link: "dashboard",
  iconComponent: <HomeIcon fontSize="small" />
},
{
  id: 1,
  label: "योजनाहरु",
  link: "all-yojana",
  iconComponent: <DynamicFeedIcon fontSize="small" />
},
{
  id: 2,
  label: "रिपोर्ट हेर्नुहोस्",
  link: "yojana-report",
  iconComponent: <TimelineIcon fontSize="small" />
},
{
  id: 3,
  label: "नमुना फाराम तथा अनुसुचीहरु",
  iconComponent: <FileCopyIcon fontSize="small" />,
  children: [
    {
      id: 1,
      label: "कार्यादेश",
      link: "karyadesh",
      iconComponent: <BorderColorIcon fontSize="small" />
    },
    {
      id: 2,
      label: "टिप्पणी र आदेश",
      link: "comment-command",
      iconComponent: <NoteIcon fontSize="small" />
    },
    {
      id: 3,
      label: "बैंक खाता सन्चालन सिफारिस",
      link: "bank-khata-sanchalan",
      iconComponent: <AccountBalanceIcon fontSize="small" />
    },
  ]
},
{
  id: 4,
  label: "खोजी गर्नुहोस्",
  iconComponent: <SearchIcon fontSize="small" />,
  children: [
    {
      id: 1,
      label: "कार्यादेशहरु",
      link: "karyadesh-report",
      iconComponent: <BorderColorIcon fontSize="small" />
    },
    // {
    //   id: 4,
    //   label: "टिप्पणी र आदेशहरु",
    //   link: "comment-command-search-page",
    //   iconComponent: <NoteIcon fontSize="small" />
    // }
  ]
}];