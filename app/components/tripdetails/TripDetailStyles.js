import { MAIN_PRIMARY_COLOUR } from "../../constants";

export const detailsFirstLastStationStyles = {
  fontFamily: "WorkSans_700Bold",
  fontSize: 16,
  color: MAIN_PRIMARY_COLOUR,
  top: -2,
};

export const detailsStationStyles = {
  fontFamily: "WorkSans_700Bold",
  fontSize: 16,
  color: MAIN_PRIMARY_COLOUR,
  top: -3,
};

export const detailsTimeStyles = {
  fontFamily: "WorkSans_500Medium",
  marginTop: -4,
  fontSize: 12,
};

export const detailsRouteStyles = {
  fontFamily: "WorkSans_500Medium",
  fontSize: 12,
  color: MAIN_PRIMARY_COLOUR,
};

export const seatAvailabilityStyles = {
  left: 5,
  fontFamily: "WorkSans_700Bold",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: -3,
};

export const hintTextStyles = {
  fontFamily: "WorkSans_700Bold",
  marginLeft: 20,
  marginTop: 16,
};

export const expandedStationStyles = {
  fontFamily: "WorkSans_700Bold",
  fontSize: 16,
  color: MAIN_PRIMARY_COLOUR,
  marginTop: -2,
  flexWrap: "wrap",
};

export const expandedTimeStyles = {
  fontFamily: "WorkSans_700Bold",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
};

export const expandedRouteStyles = {
  fontFamily: "WorkSans_400Regular",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
  marginLeft: 10,
  flex: 1,
};

// Returns the appropiate description of the route e.g. Walk, Bus Route 607X
export let getRouteString = (legInfo) => {
  const mode = legInfo["mode"];
  let route_string;
  if (mode == "walk") {
    route_string = "Walk";
  } else {
    let route_name = legInfo["route"];
    let route_string_prefix;
    if (mode == "bus") {
      route_string_prefix = "Bus Route ";
    } else if (mode == "lightrail") {
      route_string_prefix = "Light Rail ";
    } else if (mode == "train") {
      route_string_prefix = "Train ";
    } else {
      route_string_prefix = "";
    }
    route_string = route_string_prefix + route_name;
  }
  return route_string;
};
