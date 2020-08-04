import React from "react";
import { Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function LocationButton({
  condition,
  label,
  bgColor,
  setState,
  states,
}) {
  return (
    condition && (
      <TouchableOpacity
        style={{
          backgroundColor: `${bgColor}`,
          elevation: 1,
          borderRadius: 24,
          height: 20,
          paddingHorizontal: 24,
          justifyContent: "center",
        }}
        onPress={() => {
          if (label === "CLEAR") {
            setState["start"]("");
            setState["dest"]("");
            setState["startSelected"](true);
            setState["destSelected"](true);
            setState["locationRoutes"]({});
          } else {
            setState({ startStop: states["start"], endStop: states["dest"] });
          }
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            fontSize: 10,
            color: label === "CLEAR" ? MAIN_PRIMARY_COLOUR : "white",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    )
  );
}
