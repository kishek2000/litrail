import React from "react";
import { Image } from "react-native";

export function DetailsTransportIcon({ img }) {
  return (
    <Image
      source={img}
      style={{
        width: 32,
        height: 32,
        resizeMode: "contain",
        marginRight: 8,
      }}
    />
  );
}
