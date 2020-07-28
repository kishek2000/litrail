import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "../constants";

export function BalanceScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text style={ScreenHeadingStyles}>Balance</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View and manage your Opal Balance.
        </Text>
      </View>
    </SafeAreaView>
  );
}
