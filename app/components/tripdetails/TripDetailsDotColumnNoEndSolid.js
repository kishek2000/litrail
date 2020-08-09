import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function TripDetailsDotColumnNoEndSolid({ dots }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginRight: 8,
        marginLeft: 23,
        alignSelf: "center",
        marginTop: 2,
      }}
    >
      <FontAwesome
        name="circle"
        size={16}
        color="#52ABF7"
        style={{ marginBottom: 2 }}
      />
      {[...Array(dots)].map((e, i) => (
        <FontAwesome
          name="circle"
          size={5}
          key={i}
          color="#E5D5D5"
          style={{
            marginTop: 3,
          }}
        />
      ))}
    </View>
  );
}
