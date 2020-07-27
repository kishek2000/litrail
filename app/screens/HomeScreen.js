import React from "react";
import { Text, View } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  ScreenHeadingStyles,
  DefinedTrips,
} from "../constants";
import { SavedTripCard } from "../components/SavedTripCard";

export function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          paddingLeft: 16,
          paddingRight: 16,
          position: "relative",
        }}
      >
        <Text style={ScreenHeadingStyles}>Saved Trips</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View your saved trips and their details.
        </Text>
        {DefinedTrips.map((tripDetails, key) => (
          <SavedTripCard
            startStop={tripDetails["startStop"]}
            endStop={tripDetails["endStop"]}
            nextTripTime={tripDetails["nextTripTime"]}
            duration={tripDetails["duration"]}
            cost={tripDetails["cost"]}
            legs={tripDetails["legs"]}
            navigation={navigation}
            key={key}
          />
        ))}
      </View>
    </>
  );
}
