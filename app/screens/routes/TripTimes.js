import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import {
  ScreenHeadingStyles,
  MAIN_PRIMARY_COLOUR,
  AllTripTimes,
  DefinedTrips,
} from "../../constants";
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native-gesture-handler";
import { TripTimeCard } from "./TripTimeCard";
import { GetAllTimes } from "./GetAllTimes";

export function TripTimes({ navigation, route }) {
  const tripTime = AllTripTimes.filter((trip) => {
    return trip["tripId"] === route.params.tripId;
  });
  const tripDetails = [];
  DefinedTrips.filter((trip) => {
    if (trip["id"] === route.params.tripId) {
      tripDetails.push({
        cost: trip["cost"],
        duration: trip["duration"],
      });
    }
  });
  const tripFinal = {
    times: tripTime[0],
    details: tripDetails[0],
  };
  const totalTrips =
    (24 * 60 -
      tripFinal.times["startHour"] * 60 -
      tripFinal.times["startMinute"]) /
    tripFinal.times["timesInterval"];

  const AllTimes = GetAllTimes(tripFinal, totalTrips);

  const RenderTripTimeCard = ({ item: tripTimeData }) => {
    return <TripTimeCard tripTimeData={tripTimeData} />;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("RoutesHome")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text style={ScreenHeadingStyles}>Trip Times</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View the incoming times of your trip.
        </Text>
        <View style={{ marginBottom: 16 }} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={AllTimes}
              renderItem={RenderTripTimeCard}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 36,
                paddingTop: 16,
                paddingHorizontal: 16,
              }}
            />
          </ScrollView>
        </View>
        <View style={{ marginBottom: 38 }} />
      </View>
    </SafeAreaView>
  );
}
