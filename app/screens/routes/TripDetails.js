import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";

export function TripDetails({ navigation, route }) {
  return <View>{console.log(route.params)}</View>;
}
