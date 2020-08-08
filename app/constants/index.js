import React from "react";

import busIcon from "../assets/bus.png";

import walkIcon from "../assets/walk.png";

import seatAvailabilityImage from "../assets/seats.png";
export const seatAvailabilityIcon = seatAvailabilityImage;

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

import expandIconImage from "../assets/expand.png";
export const expandIcon = expandIconImage;

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

export const Locations = ["Bella Vista Station", "QVB", "UNSW"];

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

export const UserTrips = [];

export const DefinedTrips = [
  {
    startStop: "Bella Vista Station",
    endStop: "UNSW",
    nextTripTime: "5 MIN",
    duration: "~ 1h 21m",
    endTime: "1:26 PM",
    cost: "$6.99",
    id: 0,
    legs: [
      {
        image: busIcon,
        desc: "45 Min",
        mode: "bus",
        startStop: "Bella Vista Station, Mawson Ave, Stand A",
        route: "607X",
        duration: "45 min",
        startTime: "12:05 PM",
        seatAvailability: 25,
      },
      {
        image: walkIcon,
        desc: "700m",
        mode: "walk",
        startStop: "QVB, York St, Stand E",
        startTime: "12:50 PM",
        duration: "8 min",
        distance: "700m",
      },
      {
        image: lightrailIcon,
        desc: "15 Min",
        mode: "lightrail",
        startStop: "QVB Light Rail",
        route: "L3",
        duration: "26 min",
        startTime: "12:58 PM",
        seatAvailability: 23,
      },
      {
        image: walkIcon,
        desc: "100m",
        mode: "walk",
        startStop: "UNSW Anzac Parade Light Rail",
        duration: "2 min",
        startTime: "1:24 PM",
        distance: "100m",
      },
    ],
  },
  {
    startStop: "Bella Vista Station",
    endStop: "UNSW",
    nextTripTime: "7 MIN",
    duration: "~ 1h 18m",
    cost: "$5.99",
    endTime: "10:56 AM",
    id: 1,
    legs: [
      {
        image: trainIcon,
        desc: "16 Min",
        mode: "metro",
        startStop: "Bella Vista Station, Platform 1",
        route: "Metro",
        duration: "16 min",
        startTime: "9:38 AM",
        seatAvailability: 27,
      },
      {
        image: trainIcon,
        desc: "24 Min",
        mode: "train",
        startStop: "Epping Station, Platform 1",
        route: "CCN",
        duration: "24 min",
        startTime: "10:05 AM",
        seatAvailability: 5,
      },
      {
        image: walkIcon,
        desc: "200m",
        mode: "walk",
        startStop: "Central Station, Platform 9",
        duration: "6 min",
        startTime: "10:29 AM",
        distance: "183m",
      },
      {
        image: busIcon,
        desc: "16 Min",
        mode: "bus",
        startStop: "Central Station, Eddy Ave, Stand D",
        route: "891",
        duration: "16 min",
        startTime: "10:39 AM",
        seatAvailability: 1,
      },
    ],
  },
  {
    startStop: "Kellyville Station",
    endStop: "Macquarie Library",
    nextTripTime: "9 MIN",
    duration: "~ 33m",
    cost: "$3.99",
    id: 2,
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
    id: 3,
    legs: [
      {
        image: busIcon,
        desc: "45 Min",
      },
    ],
  },
];

export const AllTripTimes = [
  {
    tripId: 0,
    timesInterval: 8,
    status: "ON TIME",
    startStopExtended: "Bella Vista Station - Platform 2",
    endStopExtended: "UNSW",
    startHour: 12,
    startMinute: 5,
    totalMinutes: 81,
  },
  {
    tripId: 1,
    timesInterval: 8,
    status: "ON TIME",
    startStopExtended: "Bella Vista Station - Platform 1",
    endStopExtended: "UNSW",
    startHour: 9,
    startMinute: 38,
    totalMinutes: 78
  },
];

// THIS IS A TEMPORARY CONSTANT, WILL BE DELETED ONCE REMINDERS ARE IMPLEMENTED.
// export const UserReminders = [

// ]
