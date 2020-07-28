import React from "react";
import { View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { TripCardTransportIndividual } from "./TripCardTransportIndividual";

export function TripCardTransport({ legs }) {
  return (
    <View
      style={{
        flexDirection: "row",
        // justifyContent: "space-between",
        paddingVertical: 14,
      }}
    >
      {legs.map((item, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TripCardTransportIndividual
            image={item["image"]}
            keyNum={key}
            desc={item["desc"]}
          />
          {key + 1 !== legs.length && (
            <Ionicons
              name="ios-arrow-round-forward"
              size={24}
              color={MAIN_PRIMARY_COLOUR}
              style={{ marginTop: 8, marginLeft: 4, marginRight: 4 }}
            />
          )}
        </View>
      ))}
    </View>
  );
}
