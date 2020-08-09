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
import { StopSequenceContainer } from "./TripDetailsUnexpandedStart";

export function TripDetailsUnexpandedMiddle({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const stop_sequence = legInfo["stopSequence"];
  const route_string = getRouteString(legInfo);
  const [legExpanded, setLegExpanded] = useState(false);
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        height: legExpanded ? 227 : 65,
        // backgroundColor: "pink",
      }}
    >
      <View>
        {legExpanded == false ? (
          <TripDetailsDotColumnNoEndSolid dots={5} />
        ) : (
          <TripDetailsDotColumnNoEndSolid dots={24} />
        )}
      </View>

      <View
        style={{
          flex: 1,
          //   backgroundColor: "aqua",
        }}
      >
        <Text style={expandedStationStyles}>{station_name}</Text>
        <View
          style={{
            flexDirection: "row",
            // flex: 1,
          }}
        >
          <Text style={expandedTimeStyles}>{time_string}</Text>
          <Text style={expandedRouteStyles}>{route_string}</Text>
        </View>
        <StopSequenceContainer
          expanded={legExpanded}
          stop_sequence={stop_sequence}
        ></StopSequenceContainer>
      </View>
      <View
        style={{
          marginRight: 10,
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
