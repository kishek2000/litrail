import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, DefinedTrips } from "../../constants";
import { SavedTripCard } from "../home/SavedTripCard";

export function AllPossibleRoutes({ navigation, locationRoutes }) {
  var matchingRoutes = {};
  if (Object.keys(locationRoutes).length > 0) {
    matchingRoutes = DefinedTrips.filter((trips, key) => {
      if (
        trips["startStop"].toLowerCase() ===
          locationRoutes["startStop"].toLowerCase() &&
        trips["endStop"].toLowerCase() ===
          locationRoutes["endStop"].toLowerCase()
      ) {
        return trips;
      }
    });
  }

  if (Object.keys(matchingRoutes).length > 0) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 54,
            fontFamily: "WorkSans_500Medium",
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 48,
          }}
        >
          All Trips
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View all available equivalent routes.{" "}
        </Text>
        {matchingRoutes.map((trip, key) => (
          <SavedTripCard
            startStop={trip["startStop"]}
            endStop={trip["endStop"]}
            nextTripTime={trip["nextTripTime"]}
            duration={trip["duration"]}
            cost={trip["cost"]}
            legs={trip["legs"]}
            navigation={navigation}
            navigateTo={{
              route: "TripTimes",
              params: {
                tripId: trip["id"],
              },
            }}
            keyValue={key}
          />
        ))}
      </View>
    );
  }
  return <View></View>;
}
