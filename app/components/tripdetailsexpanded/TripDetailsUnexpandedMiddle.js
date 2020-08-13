import React from "react";
import { View, Text } from "react-native";
import { TripDetailsDotColumnNoEndSolid } from "../tripdetails/TripDetailsDotColumnNoEndSolid";
import { ExpandIcon } from "./ExpandIcon";
import {
  getRouteString,
  expandedStationStyles,
  expandedTimeStyles,
  expandedRouteStyles,
} from "../tripdetails/TripDetailStyles";
import { StopSequenceContainer } from "./StopSequenceContainer";

export function TripDetailsUnexpandedMiddle({
  legInfo,
  legExpanded,
  setLegExpanded,
  keyValue,
}) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const stop_sequence = legInfo["stopSequence"];
  const route_string = getRouteString(legInfo);

  return (
    <View
      style={{
        flexDirection: "row",
        maxHeight: 227,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View>
          <TripDetailsDotColumnNoEndSolid dots={5} />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={expandedStationStyles}>{station_name}</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={expandedTimeStyles}>{time_string}</Text>
            <Text style={expandedRouteStyles}>{route_string}</Text>
          </View>
          <StopSequenceContainer
            expanded={legExpanded === `middle ${keyValue}`}
            stop_sequence={stop_sequence}
          />
        </View>
        <View
          style={{
            marginRight: 10,
          }}
        >
          <ExpandIcon
            setExpanded={setLegExpanded}
            legExpanded={legExpanded === `middle ${keyValue}`}
            section={`middle ${keyValue}`}
          />
        </View>
      </View>
    </View>
  );
}
