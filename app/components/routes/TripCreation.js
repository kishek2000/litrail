import React, { useState } from "react";
import { View } from "react-native";
import { TripCreationModes } from "./TripCreationModes";
import { CreateByTransport } from "./CreateByTransport";
import { CreateByLocation } from "./CreateByLocation";

export function TripCreation({ newTripMode, navigation, setNewTripMode }) {
  // BY LOCATION STATES
  const [startLocation, setStartLocation] = useState("");
  const [destLocation, setDestLocation] = useState("");

  // BY TRANSPORT STATES
  const [transport, setTransport] = useState("");
  const [startStop, setStartStop] = useState("");
  const [destStop, setDestStop] = useState("");
  const [route, setRoute] = useState("");

  return (
    <View style={{ alignSelf: "flex-start", width: "100%" }}>
      <TripCreationModes
        newTripMode={newTripMode}
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
        <CreateByTransport
          navigation={navigation}
          startStop={startStop}
          setStartStop={setStartStop}
          destStop={destStop}
          setDestStop={setDestStop}
          transport={transport}
          setTransport={setTransport}
          route={route}
          setRoute={setRoute}
        />
      )}
    </View>
  );
}
