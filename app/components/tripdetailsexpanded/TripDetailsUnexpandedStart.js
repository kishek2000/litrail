import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TripDetailsDotColumnNoEnd } from "../tripdetails/TripDetailsDotColumnNoEnd";
import { ExpandMoreIcon } from "./ExpandMoreIcon";
import { ExpandLessIcon } from "./ExpandLessIcon";
import {
  getRouteString,
  expandedStationStyles,
  expandedTimeStyles,
  expandedRouteStyles,
} from "../../screens/routes/TripDetailsExpanded";
import { MAIN_PRIMARY_COLOUR } from "../../constants";

export function ExpandedTimeTile({ timeInfo }) {
  const timeStyling = {
    color: MAIN_PRIMARY_COLOUR,
    fontFamily: "WorkSans_500Medium",
  };
  const stopStyling = {
    color: MAIN_PRIMARY_COLOUR,
    fontFamily: "WorkSans_400Regular",
    marginLeft: 5,
    flex: 1,
  };
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        marginBottom: 5,
        // backgroundColor: "gray",
      }}
    >
      <Text style={timeStyling}>{timeInfo["time"]}</Text>
      <Text style={stopStyling}>{timeInfo["stop"]}</Text>
    </View>
  );
}

export function StopSequenceContainer({ expanded, stop_sequence }) {
  if (expanded) {
    return (
      <View
        style={{
          marginLeft: 20,
          // backgroundColor: "pink",
        }}
      >
        <ScrollView
          style={{
            height: "72%",
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 10,
            }}
          ></View>
          {stop_sequence.map((data, i) => (
            <ExpandedTimeTile timeInfo={data}></ExpandedTimeTile>
          ))}
          <View
            style={{
              height: 5,
            }}
          ></View>
        </ScrollView>
      </View>
    );
  }
  return <View></View>;
}

export function TripDetailsUnexpandedStart({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const stop_sequence = legInfo["stopSequence"];
  console.log(stop_sequence);
  const route_string = getRouteString(legInfo);
  const [legExpanded, setLegExpanded] = useState(false);
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        // backgroundColor: "orange",
        height: legExpanded ? 227 : 65,
      }}
    >
      <View
        style={{
          flex: 1,
          // height: "60%",
          flexDirection: "row",
          // backgroundColor: "pink",
          // height: legExpanded ? "40%" : "10%",
        }}
      >
        <View>
          {legExpanded == false ? (
            <TripDetailsDotColumnNoEnd dots={5} />
          ) : (
            <TripDetailsDotColumnNoEnd dots={24} />
          )}
        </View>
        <View
          style={{
            flex: 1,
            // height: "50%",
            // backgroundColor: "yellow",
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
            expanded={legExpanded}
            stop_sequence={stop_sequence}
          ></StopSequenceContainer>
        </View>
      </View>
      <View
        style={{
          marginRight: 10,
          // backgroundColor: "aqua",
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
