import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function FindRoutesButton({ setRoute, startLocation, destLocation }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: MAIN_PRIMARY_COLOUR,
          elevation: 1,
          borderRadius: 24,
          height: 28,
          width: 120,
          flexDirection: "row",
          paddingHorizontal: 24,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
        onPress={() =>
          setRoute({ startStop: startLocation, endStop: destLocation })
        }
      >
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            fontSize: 10,
            color: "white",
          }}
        >
          FIND ROUTES
        </Text>
      </TouchableOpacity>
    </View>
  );
}
