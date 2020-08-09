import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { AntDesign } from "@expo/vector-icons";

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
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            fontSize: 20,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: -5,
          }}
        >
          {station_name}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            marginTop: -4,
          }}
        >
          {time_string}
        </Text>
      </View>
    </View>
  );
}
