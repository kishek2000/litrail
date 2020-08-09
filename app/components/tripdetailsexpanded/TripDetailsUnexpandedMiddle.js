import React, { useState } from "react";
import { View, Text } from "react-native";
import { TripDetailsDotColumnNoEndSolid } from "../tripdetails/TripDetailsDotColumnNoEndSolid";
import { ExpandMoreIcon } from "./ExpandMoreIcon";
import { ExpandLessIcon } from "./ExpandLessIcon";
import {
  getRouteString,
  expandedStationStyles,
  expandedTimeStyles,
  expandedRouteStyles,
} from "../../screens/routes/TripDetailsExpanded";

export function TripDetailsUnexpandedMiddle({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const route_string = getRouteString(legInfo);
  const [legExpanded, setLegExpanded] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <TripDetailsDotColumnNoEndSolid
        dots={5}
        style={{}}
      ></TripDetailsDotColumnNoEndSolid>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={expandedStationStyles}>{station_name}</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={expandedTimeStyles}>{time_string}</Text>
          <Text style={expandedRouteStyles}>{route_string}</Text>
        </View>
      </View>
      <View
        style={{
          marginRight: 20,
        }}
      >
        {legExpanded == false ? (
          <ExpandMoreIcon setExpanded={setLegExpanded} />
        ) : (
          <ExpandLessIcon setExpanded={setLegExpanded} />
        )}
      </View>
    </View>
  );
}
