import React, { useState, useRef } from "react";
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
import { TripTimeCard } from "../../components/routes/TripTimeCard";
import { GetAllTimes } from "../../components/routes/GetAllTimes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TripStore } from "../../classes/User";

export function TripTimes({ setCurrentUserTrips, currentUserTrips }) {
  const navigation = useNavigation();
  const route = useRoute();

  const tripTime = AllTripTimes.filter((trip) => {
    return trip["tripId"] === route.params.tripId;
  });
  if (tripTime.length === 0) {
    return <TripTimesHeader navigation={navigation} />;
  }
  const trip = TripStore.get(route.params.tripId);
  const [isSaved, setIsSaved] = useState(currentUserTrips.includes(trip));

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
    return (
      <TripTimeCard tripTimeData={tripTimeData} tripId={route.params.tripId} />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,

          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 84,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("RoutesHome")}>
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 16,
                marginRight: 36,
              }}
            >
              BACK
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 54,
              fontFamily: "WorkSans_500Medium",
              color: MAIN_PRIMARY_COLOUR,
              marginRight: 72,
            }}
          >
            Trip Times
          </Text>
        </View>
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
        <View style={{ width: "100%", paddingHorizontal: 24 }}>
          <TouchableOpacity
            style={{
              backgroundColor: isSaved ? "white" : MAIN_PRIMARY_COLOUR,
              elevation: 1,
              width: "100%",
              borderRadius: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingHorizontal: 24,
              paddingVertical: 10,
            }}
            onPress={() => {
              const trip = TripStore.get(route.params.tripId);
              if (!currentUserTrips.includes(trip)) {
                setCurrentUserTrips(currentUserTrips.concat([trip]));
                setIsSaved(true);
              }
            }}
            disabled={isSaved}
          >
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 18,
                color: isSaved ? MAIN_PRIMARY_COLOUR : "white",
                textAlign: "left",
              }}
            >
              {isSaved ? "Trip Already Saved" : "+ Save Trip"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 16 }} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatList
            data={AllTimes}
            renderItem={RenderTripTimeCard}
            keyExtractor={(item) => item.uniqueId}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 36,
              paddingTop: 16,
              paddingHorizontal: 16,
            }}
            initialNumToRender={3}
            maxToRenderPerBatch={4}
            updateCellsBatchingPeriod={50}
          />
        </View>
        <View style={{ marginBottom: 38 }} />
      </View>
    </SafeAreaView>
  );
}

function TripTimesHeader({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,

          alignItems: "center",
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 84,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("RoutesHome")}>
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 16,
                marginRight: 18,
              }}
            >
              BACK
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 54,
              fontFamily: "WorkSans_500Medium",
              color: MAIN_PRIMARY_COLOUR,
              marginRight: 48,
            }}
          >
            Trip Times
          </Text>
        </View>
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
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 32,
            paddingHorizontal: 36,
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: "WorkSans_800ExtraBold",
          }}
        >
          There are currently no times available for your trip.
        </Text>
      </View>
    </SafeAreaView>
  );
}
