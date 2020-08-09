import React, { useState } from "react";
import { View } from "react-native";
import { TripCreationModes } from "./TripCreationModes";
import { CreateByTransport } from "./CreateByTransport";
import { CreateByLocation } from "./CreateByLocation";
export function TripCreation({ newTripMode, navigation, setNewTripMode }) {
  // States so we keep track of where we are at all times
  // BY LOCATION STATES
  const [startLocation, setStartLocation] = useState("");
  const [destLocation, setDestLocation] = useState("");

  return (
    <View style={{ alignSelf: "flex-start", width: "100%" }}>
      <TripCreationModes
        newTripMode={newTripMode}
        navigation={navigation}
        setNewTripMode={setNewTripMode}
      />
      {newTripMode === "location" ? (
        <CreateByLocation
          navigation={navigation}
          startLocation={startLocation}
          setStartLocation={setStartLocation}
          destLocation={destLocation}
          setDestLocation={setDestLocation}
        />
      ) : (
        <CreateByTransport />
      )}
    </View>
  );
}
