import React from "react";

import busIcon from "../assets/bus.png";
import walkIcon from "../assets/walk.png";
import lightrailIcon from "../assets/lightrail.png";
import trainIcon from "../assets/train.png";

import homeIcon from "../assets/home.png";
import routesIcon from "../assets/routes.png";
import schedulesIcon from "../assets/schedules.png";
import balanceIcon from "../assets/balance.png";
import homeIconFocused from "../assets/home-focused.png";
import routesIconFocused from "../assets/routes-focused.png";
import schedulesIconFocused from "../assets/schedules-focused.png";
import balanceIconFocused from "../assets/balance-focused.png";

import editImage from "../assets/edit.png";
import editImageFocused from "../assets/edit-focused.png";
import addImage from "../assets/add.png";

import logoInnerImage from "../assets/logo_inner.png";
export const logoInnerIcon = logoInnerImage;

export const editIcon = editImage;
export const editIconFocused = editImageFocused;
export const addIcon = addImage;

export const homeTab = homeIcon;
export const routesTab = routesIcon;
export const schedulesTab = schedulesIcon;
export const balanceTab = balanceIcon;

export const homeTabFocused = homeIconFocused;
export const routesTabFocused = routesIconFocused;
export const schedulesTabFocused = schedulesIconFocused;
export const balanceTabFocused = balanceIconFocused;

export const MAIN_PRIMARY_COLOUR = "#3A3957";
export const ScreenHeadingStyles = {
  fontSize: 54,
  fontFamily: "WorkSans_500Medium",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: 84,
};

export const MenuBar = [
  {
    name: "HOME",
    icon: homeIcon,
  },
  {
    name: "ROUTES",
    icon: routesIcon,
  },
  {
    name: "SCHEDULES",
    icon: schedulesIcon,
  },
  {
    name: "BALANCE",
    icon: balanceIcon,
  },
];

export const DefinedTrips = [
  {
    startStop: "Bella Vista Station",
    endStop: "UNSW",
    nextTripTime: "5 MIN",
    duration: "~ 1h 20m",
    cost: "$6.99",
    legs: [
      {
        image: busIcon,
        desc: "45 Min",
      },
      {
        image: walkIcon,
        desc: "700m",
      },
      {
        image: lightrailIcon,
        desc: "15 Min",
      },
      {
        image: walkIcon,
        desc: "700m",
      },
    ],
  },
  {
    startStop: "Kellyville Station",
    endStop: "Macquarie Library",
    nextTripTime: "9 MIN",
    duration: "~ 33m",
    cost: "$3.99",
    legs: [
      {
        image: trainIcon,
        desc: "22 Min",
      },
      {
        image: walkIcon,
        desc: "700m",
      },
    ],
  },
  {
    startStop: "Bella Vista Station",
    endStop: "QVB",
    nextTripTime: "6 MIN",
    duration: "~ 45m",
    cost: "$4.99",
    legs: [
      {
        image: busIcon,
        desc: "45 Min",
      },
    ],
  },
];