import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "../styles/Styles";
import { GapVertical, GapHorizontal } from "../styles/Gap";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>transport.me</Text>
      <Text style={styles.paragraph}>All your travel needs in one place</Text>
      <GapVertical />
      <GapVertical />
      <GapVertical />

      <View style={{ width: 150 }}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="#002ABF"
        />
      </View>
      <GapVertical />
      <View style={{ width: 150 }}>
        <Button
          title="Schedules"
          onPress={() => navigation.navigate("Schedule")}
          color="#333333"
        />
      </View>

      <Text
        style={{
          ...styles.paragraph,
          position: "absolute",
          bottom: 48,
          right: 81,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        I'm New
      </Text>
    </View>
  );
}
