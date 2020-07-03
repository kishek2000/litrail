import React from "react";
import { Text, View } from "react-native";
import { styles } from "../syles/Styles";

export function LoginScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>Login</Text>
      <Text>Username</Text>
      <Text>Password</Text>
    </View>
  );
}
