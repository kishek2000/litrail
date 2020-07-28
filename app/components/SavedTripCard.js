import React from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../constants";
import { TripCardDurationOrCost } from "./TripCardDurationOrCost";
import { ViewTimesButton } from "./ViewTimesButton";
import { TripCardDotsColumn } from "./TripCardDotsColumn";
import { TripCardStops } from "./TripCardStops";

export function SavedTripCard({
  startStop,
  endStop,
  nextTripTime,
  duration,
  cost,
  legs,
  navigation,
  editMode,
}) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 24,
        width: "95%",
        alignSelf: "center",
        height: 175,
        borderRadius: 24,
        marginTop: 16,
        boxShadow: "0px 1px 2px rgba(58, 57, 87, 0.3)",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 2,
        alignItems: "center",
      }}
    >
      <TripCardDotsColumn dots={10} />
      <TripCardStops startStop={startStop} endStop={endStop} legs={legs} />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "right",
          width: 110,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_500Medium",
            fontSize: 10,
            textAlign: "right",
            color: MAIN_PRIMARY_COLOUR,
          }}
        >
          NEXT TRIP IN
        </Text>
        <Text
          style={{
            fontFamily: "WorkSans_800ExtraBold",
            fontSize: 36,
            textAlign: "right",
            marginTop: -12,
            marginRight: -1,
            color: MAIN_PRIMARY_COLOUR,
          }}
        >
          {nextTripTime}
        </Text>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            alignSelf: "flex-end",
            marginTop: 8,
          }}
        >
          <TripCardDurationOrCost subheading="DURATION" subtext={duration} />
          <View style={{ marginRight: 10 }} />
          <TripCardDurationOrCost subheading="COST" subtext={cost} />
        </View>
        <ViewTimesButton navigation={navigation} editMode={editMode} />
      </View>
    </View>
  );
}
