import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";

export function ViewTimesButton({
  navigation,
  editMode,
  navigateTo,
  reminder,
}) {
  return (
    <TouchableOpacity
      style={{
        width: 96,
        height: 28,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        marginTop: 12,
        alignSelf: "flex-end",
        elevation: 2,
        opacity: editMode ? 0.6 : 1,
      }}
      disabled={editMode}
      onPress={() => {
        if (navigateTo) {
          navigation.navigate(navigateTo["route"], navigateTo["arg"]); // navigateTo['arg'] = { tripId: X }
        } else {
          !reminder && navigation.navigate("ROUTES");
        }
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 12,
          color: "white",
        }}
      >
        {reminder ? "EDIT" : "VIEW TIMES"}
      </Text>
    </TouchableOpacity>
  );
}
