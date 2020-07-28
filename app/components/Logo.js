import React from "react";
import { Text, View, Image } from "react-native";
import { MAIN_PRIMARY_COLOUR, logoInnerIcon } from "../constants";

export function Logo() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 36,
        left: 16,
      }}
    >
      <Image
        source={logoInnerIcon}
        style={{ width: 16, height: 16, resizeMode: "contain", marginRight: 6 }}
      />
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          color: MAIN_PRIMARY_COLOUR,
          fontSize: 12,
        }}
      >
        transport.me
      </Text>
    </View>
  );
}
