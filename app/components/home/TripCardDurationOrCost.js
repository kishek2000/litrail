import React from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";

export function TripCardDurationOrCost({ subheading, subtext }) {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: 10,
          textAlign: "right",
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {subheading}
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 16,
          textAlign: "right",
          marginTop: -5,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {subtext}
      </Text>
    </View>
  );
}
