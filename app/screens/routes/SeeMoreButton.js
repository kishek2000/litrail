import React from "react";
import { Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SeeMoreButton({ navigation }) {
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
      }}
      onPress={() => {
        console.log("see more pressed");
        navigation.navigate("TripDetails");
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 12,
          color: "white",
        }}
      >
        SEE MORE
      </Text>
    </TouchableOpacity>
  );
}
