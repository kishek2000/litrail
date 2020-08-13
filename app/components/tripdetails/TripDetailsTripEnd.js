import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import {
  detailsStationStyles,
  detailsTimeStyles,
  detailsFirstLastStationStyles,
} from "./TripDetailStyles";

export function TripDetailsTripEnd({ tripInfo }) {
  const time_string = tripInfo["endTime"];
  const station_name = tripInfo["endStop"];
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "yellow",
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
        <Text style={detailsFirstLastStationStyles}>{station_name}</Text>
        <Text style={detailsTimeStyles}>{time_string}</Text>
      </View>
    </View>
  );
}
