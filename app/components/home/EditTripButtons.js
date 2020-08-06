import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { MAIN_PRIMARY_COLOUR, editIconFocused } from "../../constants";
import { NavigationHelpersContext } from "@react-navigation/native";

export function EditTripButton({
  subtext,
  icon,
  navigation,
  setState,
  currentState,
  disabledState,
  noEdit,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor:
          subtext === "Edit Trip" && currentState
            ? MAIN_PRIMARY_COLOUR
            : "white",
        elevation: 1,
        width: subtext === "Add Trip" && !noEdit ? "100%" : null,
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
        paddingVertical: 10,
        opacity: disabledState ? 0.4 : 1,
      }}
      disabled={disabledState}
      onPress={() => {
        subtext === "Add Trip" &&
          navigation.navigate("ROUTES", { screen: "RoutesHome" }); // We have pressed on Add Trip
        setState && setState(!currentState); // We have pressed on Edit Trip
      }}
    >
      {subtext === "Edit Trip" && currentState ? (
        <Image
          source={editIconFocused}
          style={{
            alignSelf: "center",
            width: 15,
            height: 15,
            resizeMode: "contain",
            marginRight: 12,
          }}
        />
      ) : (
        <Image
          source={icon}
          style={{
            alignSelf: "center",
            width: 15,
            height: 15,
            resizeMode: "contain",
            marginRight: 12,
          }}
        />
      )}
      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          fontSize: 18,
          color:
            subtext === "Edit Trip" && currentState
              ? "white"
              : MAIN_PRIMARY_COLOUR,
          textAlign: "left",
        }}
      >
        {subtext}
      </Text>
    </TouchableOpacity>
  );
}
