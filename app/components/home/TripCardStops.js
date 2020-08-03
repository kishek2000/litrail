import React from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripCardTransport } from "./TripCardTransport";

export function TripCardStops({ startStop, endStop, legs }) {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        marginRight: 16,
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 24,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {startStop}
      </Text>
      <TripCardTransport legs={legs} />
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 24,
          bottom: 0,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {endStop}
      </Text>
    </View>
  );
}
