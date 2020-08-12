import React from "react";
import { View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
export function CloseModal({ setState }) {
  return (
    <View
      style={{
        position: "absolute",
        top: 24,
        right: 24,
      }}
    >
      <AntDesign
        name="close"
        size={24}
        color={MAIN_PRIMARY_COLOUR}
        onPress={() => setState(false)}
      />
    </View>
  );
}
