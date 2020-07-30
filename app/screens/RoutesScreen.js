import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../constants";

// Within each screen, you can have a stack of screens
// Creating a stack nav, react navigation docs
// 4 screens in stack:
//  -> initial screen => saved trip card component (same as homescreen)
//  -> times => trip time component (similar to above component)
//  -> details for a trip => trip detail component
//  -> expand details for a trip => expand view component (similar to above component)

export function RoutesScreen({ navigation }) {
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
        <Text style={ScreenHeadingStyles}>New Trip</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          Create a new trip and view its times.
        </Text>
      </View>
    </SafeAreaView>
  );
}
