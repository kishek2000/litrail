import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useRoute } from "@react-navigation/native";

import { TripDetailsExpandedBody } from "../../components/tripdetailsexpanded/TripDetailsExpandedBody";
import { hintTextStyles } from "../../components/tripdetails/TripDetailStyles";

export function TripDetailsExpanded({ navigation }) {
  const route = useRoute();
  const trip_id = route.params.trip_id;
  console.log("inside expanded: trip_id: " + trip_id);
  const [expanded, setExpanded] = useState(false); // Controls the hint text

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 40,
              top: 2,
              // backgroundColor: "pink",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("TripDetails", { trip_id: trip_id });
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 18,
                color: MAIN_PRIMARY_COLOUR,
              }}
            >
              BACK
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 40,
            fontFamily: "WorkSans_500Medium",
            color: MAIN_PRIMARY_COLOUR,
            flex: 6,
          }}
        >
          Trip Stops
        </Text>
      </View>
      <View
        style={{
          top: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_400Regular",
            color: MAIN_PRIMARY_COLOUR,
          }}
        >
          View all stops involved in your trip.
        </Text>
      </View>
      <View>
        {expanded == false ? (
          <Text style={hintTextStyles}>
            Click on an arrow to expand the stops!
          </Text>
        ) : (
          <Text style={hintTextStyles}>
            Scroll in each expansion to view all the stops!
          </Text>
        )}
      </View>
      <TripDetailsExpandedBody trip_id={trip_id}></TripDetailsExpandedBody>
    </SafeAreaView>
  );
}
