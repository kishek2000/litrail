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

export function TripDetailsUnexpandedStart({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const route_string = getRouteString(legInfo);
  const [legExpanded, setLegExpanded] = useState(false);
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          {legExpanded == false ? (
            <TripDetailsDotColumnNoEnd dots={5} />
          ) : (
            <TripDetailsDotColumnNoEnd dots={24} />
          )}
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
            {legExpanded ? (
              <View
                style={{
                  flex: 1,
                  marginLeft: 20,
                }}
              >
                <ScrollView>
                  <Text>Some stuff here</Text>
                  <Text>Some more stuff here</Text>
                </ScrollView>
              </View>
            ) : (
              <View></View>
            )}
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
    </View>
  );
}
