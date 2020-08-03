import React, { useState } from "react";
import { View } from "react-native";
import { TripCreationModes } from "./TripCreationModes";
import { CreateByTransport } from "./CreateByTransport";
import { CreateByLocation } from "./CreateByLocation";
export function TripCreation({ newTripMode, navigation, setNewTripMode }) {
  // States so we keep track of where we are at all times
  // BY LOCATION STATES
  const [locationStart, setLocationStart] = useState("");
  const [locationDest, setLocationDest] = useState("");
  const [startMatches, setStartMatches] = useState([]);
  const [destMatches, setDestMatches] = useState([]);
  const [selectedStart, setSelectedStart] = useState(false);
  const [selectedDest, setSelectedDest] = useState(false);
  const [locationRoutes, setLocationRoutes] = useState({});

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
          locationStart={locationStart}
          setLocationStart={setLocationStart}
          locationDest={locationDest}
          setLocationDest={setLocationDest}
          startMatches={startMatches}
          setStartMatches={setStartMatches}
          destMatches={destMatches}
          setDestMatches={setDestMatches}
          selectedStart={selectedStart}
          setSelectedStart={setSelectedStart}
          selectedDest={selectedDest}
          setSelectedDest={setSelectedDest}
          locationRoutes={locationRoutes}
          setLocationRoutes={setLocationRoutes}
        />
      ) : (
        <CreateByTransport />
      )}
    </View>
  );
}
