import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { Dimensions } from "react-native";

export function TripDetailsInfoCorner() {
  const starting_in = 5;
  const last_updated = 56;
  return (
    <View
      style={{
        height: Dimensions.get("screen").height * 0.1,
        width: "30%",
        borderTopRightRadius: Dimensions.get("screen").width * 0.05,
        borderBottomLeftRadius: Dimensions.get("screen").width * 0.05,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: Dimensions.get("screen").height * 0.01,
          color: "white",
          fontFamily: "WorkSans_300Light",
          fontSize: Dimensions.get("screen").height * 0.015,
        }}
      >
        {" "}
        STARTING IN
      </Text>
      <Text
        style={{
          marginTop: Dimensions.get("screen").height * -0.01,
          color: "white",
          fontFamily: "WorkSans_700Bold",
          fontSize: Dimensions.get("screen").height * 0.03,
        }}
      >
        {starting_in} MIN
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "WorkSans_500Medium",
          fontSize: Dimensions.get("screen").height * 0.01,
        }}
      >
        Updated {last_updated} s ago
      </Text>
    </View>
  );
}
