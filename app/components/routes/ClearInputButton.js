import React from "react";
import { Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
export function ClearInputButton({ clearState, toggleClear }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        borderBottomRightRadius: 24,
        borderTopRightRadius: 24,
        height: 46,
        paddingRight: 24,
        paddingLeft: 18,
        justifyContent: "center",
      }}
      onPress={() => {
        clearState.map((setState) => {
          setState("");
        });
        toggleClear(false);
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_300Light",
          fontSize: 16,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        X
      </Text>
    </TouchableOpacity>
  );
}
