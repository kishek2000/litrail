import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/Styles";

export function RegisterScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>Register</Text>
      <Text>Username</Text>
      <Text>Password</Text>
    </View>
  );
}
