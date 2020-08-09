import React from "react";
import { View, Text, Image } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripCardDotsColumn } from "../home/TripCardDotsColumn";
import { TripCardStops } from "../home/TripCardStops";
import { TripCardDurationOrCost } from "../home/TripCardDurationOrCost";
import onTime from "../../assets/onTime.png";
import { SeeMoreButton } from "./SeeMoreButton";
import { useNavigation } from "@react-navigation/native";

export function TripTimeCard({ tripTimeData, tripId }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 24,
        height: 200,
        //   width: "100%",
        borderRadius: 24,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        <TripCardDotsColumn dots={12} />
        <TripCardStops
          startStop={tripTimeData["startStopExtended"]}
          endStop={tripTimeData["endStopExtended"]}
          startTime={tripTimeData["startTime"]}
          endTime={tripTimeData["endTime"]}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
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
        <SeeMoreButton navigation={navigation} tripId={tripId} />
      </View>
    </View>
  );
}
