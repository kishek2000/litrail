import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useRoute } from "@react-navigation/native";

import { TripDetailsExpandedBody } from "../../components/tripdetailsexpanded/TripDetailsExpandedBody";
import { hintTextStyles } from "../../components/tripdetails/TripDetailStyles";
import { GoBackButton } from "../../components/routes/GoBackButton";

export function TripDetailsExpanded({ navigation }) {
  const route = useRoute();
  const trip_id = route.params.trip_id;
  const [expanded, setExpanded] = useState(false); // Controls the hint text

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          width: "100%",
          justifyContent: "center",
          justifyContent: "space-between",
          position: "absolute",
          alignItems: "center",
          marginTop: 106,
          paddingLeft: 36,
        }}
      >
        <View>
          <GoBackButton navigation={navigation} />
        </View>
      </View>
      <View>
        <Text style={ScreenHeadingStyles}>Trip Stops</Text>
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
