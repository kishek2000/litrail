import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ExpandedTimeTile } from "./ExpandedTimeTile";

export function StopSequenceContainer({ expanded, stop_sequence }) {
  if (expanded) {
    return (
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <ScrollView
          style={{
            height: "72%",
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 10,
            }}
          ></View>
          {stop_sequence.map((data, i) => (
            <ExpandedTimeTile timeInfo={data}></ExpandedTimeTile>
          ))}
          <View
            style={{
              height: 5,
            }}
          ></View>
        </ScrollView>
      </View>
    );
  }
  return <View></View>;
}
