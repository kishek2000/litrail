import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function ByTransportModeButton({ mode, setMode, option }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: mode === option ? MAIN_PRIMARY_COLOUR : "white",
        height: 36,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
      onPress={() => setMode(option)}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          color: mode === option ? "white" : MAIN_PRIMARY_COLOUR,
          fontSize: 16,
        }}
      >
        {option === "stop" ? "BY STOP" : "BY ROUTE"}
      </Text>
    </TouchableOpacity>
  );
}
