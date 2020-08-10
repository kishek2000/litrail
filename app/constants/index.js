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
    duration: "~ 1h 17m",
    endTime: "1:22 PM",
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
        stopSequence: [
          {
            stop: "Bella Vista Station, Mawson Ave, Stand A",
            time: "12:05 PM",
          },
          {
            stop: "Bella Vista Station, North West Twy, Stand C",
            time: "12:07 PM",
          },
          {
            stop: "Meurants T-Way",
            time: "12:08 PM",
          },
          {
            stop: "Norbrik T-Way",
            time: "12:10 PM",
          },
          {
            stop: "Troubadour T-Way",
            time: "12:11 PM",
          },
          {
            stop: "Joseph Banks T-Way",
            time: "12:11 PM",
          },
          {
            stop: "Abbott T-Way",
            time: "12:12 PM",
          },
          {
            stop: "M2 Mwy at Gooden Reserve Footbridge",
            time: "12:15 PM",
          },
          {
            stop: "M2 Mwy after Cropley Dr overpass",
            time: "12:17 PM",
          },
          {
            stop: "M2 - Barclay Rd Interchange",
            time: "12:20 PM",
          },
          {
            stop: "M2 - Oakes Rd Interchange",
            time: "12:23 PM",
          },
          {
            stop: "Wynyard Station, York St, Stand J",
            time: "12:45 PM",
          },
          {
            stop: "QVB, York St, Stand E",
            time: "12:49 PM",
          },
        ],
      },
      {
        image: walkIcon,
        desc: "700m",
        mode: "walk",
        startStop: "QVB, York St, Stand E",
        startTime: "12:50 PM",
        duration: "8 min",
        distance: "700m",
        stopSequence: [
          {
            stop: "QVB, York St, Stand E",
            time: "12:49 PM",
          },
          {
            stop: "QVB Light Rail",
            time: "12:51 PM",
          },
        ],
      },
      {
        image: lightrailIcon,
        desc: "15 Min",
        mode: "lightrail",
        startStop: "QVB Light Rail",
        route: "L3",
        duration: "26 min",
        startTime: "12:54 PM",
        seatAvailability: 23,
        stopSequence: [
          {
            stop: "QVB Light Rail",
            time: "12:54 PM",
          },
          {
            stop: "Town Hall Light Rail",
            time: "12:55 PM",
          },
          {
            stop: "Chinatown Light Rail",
            time: "12:58 PM",
          },
          {
            stop: "Haymarket Light Rail",
            time: "1:01 PM",
          },
          {
            stop: "Central Chalmers Street Light Rail",
            time: "1:03 PM",
          },
          {
            stop: "Surry Hills Light Rail",
            time: "1:06 PM",
          },
          {
            stop: "Moore Park Light Rail",
            time: "1:10 PM",
          },
          {
            stop: "ES Marks Light Rail",
            time: "1:15 PM",
          },
          {
            stop: "Kensington Light Rail",
            time: "1:17 PM",
          },
          {
            stop: "UNSW Anzac Parade Light Rail",
            time: "1:20 PM",
          },
        ],
      },
      {
        image: walkIcon,
        desc: "100m",
        mode: "walk",
        startStop: "UNSW Anzac Parade Light Rail",
        duration: "2 min",
        startTime: "1:20 PM",
        distance: "100m",
        stopSequence: [
          {
            stop: "UNSW Anzac Parade Light Rail",
            time: "1:20 PM",
          },
          {
            stop: "UNSW Sydney",
            time: "1:22 PM",
          },
        ],
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
        stopSequence: [
          {
            stop: "Bella Vista Station, Platform 1",
            time: "9:38 AM",
          },
          {
            stop: "Norwest Station, Platform 1",
            time: "9:41 AM",
          },
          {
            stop: "Hills Showground Station, Platform 1",
            time: "9:43 AM",
          },
          {
            stop: "Castle Hill Station, Platform 1",
            time: "9:46 AM",
          },
          {
            stop: "Cherrybrook, Platform 1",
            time: "9:48 AM",
          },
          {
            stop: "Epping Station, Platform 5",
            time: "9:54 AM",
          },
        ],
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
        stopSequence: [
          {
            stop: "Epping Station, Platform 1",
            time: "10:05 AM",
          },
          {
            stop: "Strathfield Station, Platform 1",
            time: "10:16 AM",
          },
          {
            stop: "Central Station, Platform 9",
            time: "10:29 AM",
          },
        ],
      },
      {
        image: walkIcon,
        desc: "200m",
        mode: "walk",
        startStop: "Central Station, Platform 9",
        duration: "6 min",
        startTime: "10:29 AM",
        distance: "183m",
        stopSequence: [
          {
            stop: "Central Station, Platform 9",
            time: "10:29 AM",
          },
          {
            stop: "Central Station, Eddy Ave, Stand D",
            time: "10:35 AM",
          },
        ],
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
        stopSequence: [
          {
            stop: "Central Station, Eddy Ave, Stand D",
            time: "10:39 AM",
          },
          {
            stop: "UNSW Gate 8, High St",
            time: "10:53 AM",
          },
          {
            stop: "UNSW Gate 3, High St",
            time: "10:55 AM",
          },
        ],
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
        mode: "metro",
        startStop: "Kellyville Station, Platform 1",
        route: "Metro",
        duration: "22 min",
        startTime: "11:06 AM",
        seatAvailability: 31,
        stopSequence: [
          {
            stop: "Kellyville Station, Platform 1",
            time: "11:06 AM",
          },
          {
            stop: "Bella Vista Station, Platform 1",
            time: "11:08 AM",
          },
          {
            stop: "Norwest Station, Platform 1",
            time: "11:11 AM",
          },
          {
            stop: "Hills Showground Station, Platform 1",
            time: "11:13 AM",
          },
          {
            stop: "Castle Hill Station, Platform 1",
            time: "11:16 AM",
          },
          {
            stop: "Cherrybrook, Platform 1",
            time: "11:18 AM",
          },
          {
            stop: "Epping Station, Platform 5",
            time: "11:24 AM",
          },
          {
            stop: "Macquarie University Station, Platform 1",
            time: "11:28 AM",
          },
        ],
      },
      {
        image: walkIcon,
        desc: "700m",
        mode: "walk",
        startStop: "Macquarie University Station, Platform 1",
        duration: "10 min",
        startTime: "11:28 AM",
        distance: "630m",
        stopSequence: [
          {
            stop: "Macquarie University Station, Platform 1",
            time: "11:28 AM",
          },
          {
            stop: "University Library, Macquarie Park",
            time: "11:39 AM",
          },
        ],
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
        mode: "bus",
        startStop: "Bella Vista Station, Mawson Ave, Stand A",
        route: "607X",
        duration: "45 min",
        startTime: "12:05 PM",
        seatAvailability: 25,
        stopSequence: [
          {
            stop: "Bella Vista Station, Mawson Ave, Stand A",
            time: "12:05 PM",
          },
          {
            stop: "Bella Vista Station, North West Twy, Stand C",
            time: "12:07 PM",
          },
          {
            stop: "Meurants T-Way",
            time: "12:08 PM",
          },
          {
            stop: "Norbrik T-Way",
            time: "12:10 PM",
          },
          {
            stop: "Troubadour T-Way",
            time: "12:11 PM",
          },
          {
            stop: "Joseph Banks T-Way",
            time: "12:11 PM",
          },
          {
            stop: "Abbott T-Way",
            time: "12:12 PM",
          },
          {
            stop: "M2 Mwy at Gooden Reserve Footbridge",
            time: "12:15 PM",
          },
          {
            stop: "M2 Mwy after Cropley Dr overpass",
            time: "12:17 PM",
          },
          {
            stop: "M2 - Barclay Rd Interchange",
            time: "12:20 PM",
          },
          {
            stop: "M2 - Oakes Rd Interchange",
            time: "12:23 PM",
          },
          {
            stop: "Wynyard Station, York St, Stand J",
            time: "12:45 PM",
          },
          {
            stop: "QVB, York St, Stand E",
            time: "12:49 PM",
          },
        ],
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
    totalMinutes: 78,
  },
];

// THIS IS A TEMPORARY CONSTANT, WILL BE DELETED ONCE REMINDERS ARE IMPLEMENTED.
// export const UserReminders = [

// ]

export const OpalDetails = [
  {
    name: "Bill",
    type: "Student",
    OpalCardNum: "1234123412341234",
    OpalCardPass: "1234",
    OpalCurrBalance: 5,
  },
  {
    name: "Jane",
    type: "Adult",
    OpalCardNum: "4321432143214321",
    OpalCardPass: "4321",
    OpalCurrBalance: 5,
  },
];
