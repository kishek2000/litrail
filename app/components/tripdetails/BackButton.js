import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export function BackButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get("screen").width * 0.15,
        height: Dimensions.get("screen").height * 0.05,
        marginRight: Dimensions.get("screen").width * 0.03,
        marginLeft: Dimensions.get("screen").width * 0.025,
        marginTop: Dimensions.get("screen").height * 0.1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        navigation.navigate("TripTimes");
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          fontSize: 16,
          marginRight: 18,
        }}
      >
        BACK
      </Text>
    </TouchableOpacity>
  );
}
