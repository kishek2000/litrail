import React from "react";
import { Text, View, Image } from "react-native";

export function TripCardTransportIndividual({ image, desc, keyNum }) {
  return (
    <View style={{ flexDirection: "column" }} key={keyNum}>
      <Image
        source={image}
        style={{
          alignSelf: "center",
          width: 32,
          height: 32,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          color: "#65657C",
          fontSize: 12,
          fontFamily: "WorkSans_700Bold",
          marginTop: 2,
        }}
      >
        {desc}
      </Text>
    </View>
  );
}
