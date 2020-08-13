import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function TripCardDotsColumn({ dots }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginRight: 8,
        marginLeft: -3,
        alignSelf: "center",
      }}
    >
      <AntDesign
        name="upcircle"
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
      <View style={{ scaleY: -1, marginTop: 5 }}>
        <AntDesign name="upcircle" size={16} color="#E36C2F" />
      </View>
    </View>
  );
}
