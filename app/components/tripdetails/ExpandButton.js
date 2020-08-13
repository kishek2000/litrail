import React from "react";
import { Image, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, expandIcon } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function ExpandButton({ navigation, trip_id }) {
  return (
    <TouchableOpacity
      style={{
        position: "relative",
        flexDirection: "row",
        backgroundColor: MAIN_PRIMARY_COLOUR,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 2,
      }}
      onPress={() => {
        navigation.navigate("TripDetailsExpanded", {
          trip_id: trip_id,
        });
      }}
    >
      <Image
        source={expandIcon}
        style={{
          width: 12,
          height: 12,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          color: "white",
          fontSize: 10,
        }}
      >
        Expand
      </Text>
    </TouchableOpacity>
  );
}
