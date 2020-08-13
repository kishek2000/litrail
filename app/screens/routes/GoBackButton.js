import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function GoBackButton({ navigation, positionSet }) {
  return (
    <View
      style={{
        position: positionSet,
        top: positionSet === "absolute" ? 106 : 0,
        left: positionSet === "absolute" ? 36 : 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontFamily: "WorkSans_400Regular",
            fontSize: 12,
          }}
        >
          BACK
        </Text>
      </TouchableOpacity>
    </View>
  );
}
