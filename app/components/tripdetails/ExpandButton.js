import React from "react";
import { Image, Text } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  expandIcon
} from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export function ExpandButton({ navigation, trip_id}) {
  return (
    <TouchableOpacity
      style={{
        width: 80,
        height: 25,
        marginLeft: Dimensions.get("screen").width * 0.03,
        marginBottom: Dimensions.get("screen").height * 0.015,
        marginTop: Dimensions.get("screen").height * 0.115,
        flexDirection: "row",
        backgroundColor: MAIN_PRIMARY_COLOUR,
        borderBottomLeftRadius: Dimensions.get("screen").width * 0.05,
        borderTopLeftRadius: Dimensions.get("screen").width * 0.05,
        borderTopRightRadius: Dimensions.get("screen").width * 0.05,
        borderBottomRightRadius: Dimensions.get("screen").width * 0.05,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        console.log("expand pressed");
        console.log("trip_id is: " + trip_id)
        navigation.navigate("TripDetailsExpanded", {
            "trip_id" : trip_id
        });
      }}
    >
      <Image
        source={expandIcon}
        style={{
          width: Dimensions.get("screen").width * 0.04,
          height: Dimensions.get("screen").width * 0.04,
        }} />
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          color: "white",
          fontSize: Dimensions.get("screen").width * 0.03,
        }}
      >
        Expand
      </Text>
    </TouchableOpacity>
  );
}
