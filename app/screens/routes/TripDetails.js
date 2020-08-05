import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const TestScreenHeadingStyles = {
  fontSize: Dimensions.get('screen').width * 0.07,
  fontFamily: "WorkSans_500Medium",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: 84,
};

export function TripDetails({ navigation, route }) {
  console.log("TRIP DETAILS REACHED");
  return (<SafeAreaView>
    <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text style={TestScreenHeadingStyles}>
          Trip Details
        </Text>
      </View>
  </SafeAreaView>);
}
