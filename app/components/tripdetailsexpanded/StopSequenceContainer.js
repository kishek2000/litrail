import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ExpandedTimeTile } from "./TripDetailsUnexpandedStart";

export function StopSequenceContainer({ expanded, stop_sequence }) {
  if (expanded) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          marginLeft: 20,
        }}
        style={{
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {stop_sequence.map((data, i) => (
          <ExpandedTimeTile timeInfo={data}></ExpandedTimeTile>
        ))}
      </ScrollView>
    );
  }
  return <View></View>;
}
