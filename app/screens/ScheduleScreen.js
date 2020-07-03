import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/Styles";

export function ScheduleScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.innerHeading}>New Trip</Text>
      <View style={styles.innerPage}></View>
    </View>
  );
}
