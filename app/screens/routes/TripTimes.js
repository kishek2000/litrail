import React, { useState } from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import {
  ScreenHeadingStyles,
  MAIN_PRIMARY_COLOUR,
  AllTripTimes,
  DefinedTrips,
} from "../../constants";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import { TripCardDotsColumn } from "../../components/home/TripCardDotsColumn";
import { TripCardStops } from "../../components/home/TripCardStops";
import { TripCardDurationOrCost } from "../../components/home/TripCardDurationOrCost";
import onTime from "../../assets/onTime.png";

const TripTimeCard = ({ tripTimeData, navigation }) => (
  <View
    style={{
      backgroundColor: "white",
      padding: 24,
      width: "95%",
      alignSelf: "center",
      height: 200,
      borderRadius: 24,
      marginTop: 16,
      flexDirection: "row",
      alignItems: "center",
      elevation: 2,
    }}
  >
    <TripCardDotsColumn dots={12} />
    <TripCardStops
      startStop={tripTimeData["startStopExtended"]}
      endStop={tripTimeData["endStopExtended"]}
      startTime={tripTimeData["startTime"]}
      endTime={tripTimeData["endTime"]}
    />
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "right",
        maxWidth: "45%",
        height: "90%",
        paddingRight: 16,
      }}
    >
      <View style={{ flexDirection: "column" }}>
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
          {tripTimeData["nextTripTime"]}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <Image
          source={onTime}
          style={{ width: 8, height: 8, marginRight: 4 }}
        />
        <Text
          style={{
            fontFamily: "WorkSans_700Bold",
            color: "#1BC300",
            marginTop: -0.5,
          }}
        >
          ON TIME
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginTop: 8,
        }}
      >
        <TripCardDurationOrCost
          subheading="DURATION"
          subtext={tripTimeData["duration"]}
        />
        <View style={{ marginRight: 10 }} />
        <TripCardDurationOrCost
          subheading="COST"
          subtext={tripTimeData["cost"]}
        />
      </View>
      <SeeMoreButton navigation={navigation} />
    </View>
  </View>
);

function Time(hour, minutes) {
  if (hour > 12) {
    return `${hour - 12}:${minutes}pm`;
  } else if (hour === 12) {
    return `${12}:${minutes}pm`;
  }
  return `${hour}:${minutes}am`;
}

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
        paddingHorizontal: 8,
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
        <FlatList
          data={AllTimes}
          renderItem={RenderTripTimeCard}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ marginBottom: 38 }} />
      </View>
    </SafeAreaView>
  );

  function GetAllTimes(tripFinal, totalTrips) {
    const arr = [];
    for (let x = 1; x <= totalTrips; x++) {
      arr.push({
        startTime: Time(
          Math.floor(
            (tripFinal.times["startHour"] * 60 +
              x * tripFinal.times["timesInterval"]) /
              60
          ),
          (
            "0" +
            ((tripFinal.times["startHour"] * 60 +
              x * tripFinal.times["timesInterval"]) %
              60)
          ).slice(-2)
        ),
        endTime: Time(
          Math.floor(
            (tripFinal.times["startHour"] * 60 +
              x * tripFinal.times["timesInterval"] +
              tripFinal.times["totalMinutes"]) /
              60
          ),
          (
            "0" +
            ((tripFinal.times["startHour"] * 60 +
              x * tripFinal.times["timesInterval"] +
              tripFinal.times["totalMinutes"]) %
              60)
          ).slice(-2)
        ),
        startStopExtended: tripFinal.times["startStopExtended"],
        endStopExtended: tripFinal.times["endStopExtended"],
        nextTripTime: `${tripFinal.times["timesInterval"] * x} MIN`,
        duration: tripFinal.details["duration"],
        cost: tripFinal.details["cost"],
      });
    }
    return arr;
  }
}

function SeeMoreButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: 96,
        height: 28,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        marginTop: 12,
        alignSelf: "flex-end",
        elevation: 2,
      }}
      onPress={() => {
        navigation.navigate("TripDetails");
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 12,
          color: "white",
        }}
      >
        SEE MORE
      </Text>
    </TouchableOpacity>
  );
}
