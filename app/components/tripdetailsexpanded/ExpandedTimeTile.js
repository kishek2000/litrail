import React from "react";
import { View, Text } from "react-native";
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
      }}
    >
      <Text style={timeStyling}>{timeInfo["time"]}</Text>
      <Text style={stopStyling}>{timeInfo["stop"]}</Text>
    </View>
  );
}
