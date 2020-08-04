import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function TripCreationModes({ newTripMode, setNewTripMode, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor:
            newTripMode === "location" ? MAIN_PRIMARY_COLOUR : "white",
          height: 36,
          marginRight: 16,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        onPress={() => setNewTripMode("location")}
      >
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            color: newTripMode === "location" ? "white" : MAIN_PRIMARY_COLOUR,
          }}
        >
          BY LOCATION
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor:
            newTripMode === "location" ? "white" : MAIN_PRIMARY_COLOUR,
          height: 36,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        onPress={() => setNewTripMode("transport")}
      >
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            color: newTripMode === "location" ? MAIN_PRIMARY_COLOUR : "white",
          }}
        >
          BY TRANSPORT
        </Text>
      </TouchableOpacity>
    </View>
  );
}
