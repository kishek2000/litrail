import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  expandedStationStyles,
  expandedTimeStyles,
} from "../tripdetails/TripDetailStyles";

export function TripDetailsUnexpandedEnd({ tripInfo }) {
  const time_string = tripInfo["endTime"];
  const station_name = tripInfo["endStop"];
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
      }}
    >
      <View
        style={{
          marginRight: 8,
          marginLeft: 22,
          top: 2,
        }}
      >
        <AntDesign
          name="downcircle"
          size={16}
          color="#E36C2F"
          style={{ marginBottom: 2 }}
        />
      </View>
      <View style={{}}>
        <Text style={expandedStationStyles}>{station_name}</Text>
        <Text style={expandedTimeStyles}>{time_string}</Text>
      </View>
    </View>
  );
}
