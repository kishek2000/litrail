import React, { useState } from "react";
import { View } from "react-native";
import { AllTripTimes } from "../../constants";
import { AllPossibleRoutes } from "./AllPossibleRoutes";
import { LocationInput } from "./LocationInput";
import { FindRoutesButton } from "./FindRoutesButton";

export function CreateByLocation({
  setStartLocation,
  setDestLocation,
  navigation,
  options,
  startLocation,
  destLocation,
}) {
  const [clearText, setClearText] = useState(false);
  const [search, setSearch] = useState({});

  return (
    <View>
      <View style={{ marginBottom: 16 }} />
      <LocationInput
        placeholder={"Enter start..."}
        options={["Bella Vista Station"]}
        onChange={(value) => {
          setStartLocation(value);
        }}
        text={startLocation}
        clear={clearText}
        toggleClear={setClearText}
        setSearch={setSearch}
      />
      <View style={{ marginBottom: 8 }} />
      <LocationInput
        placeholder={"Enter dest..."}
        options={["UNSW"]}
        onChange={(value) => {
          setDestLocation(value);
        }}
        text={destLocation}
        clear={clearText}
        toggleClear={setClearText}
        setSearch={setSearch}
      />
      <View style={{ marginBottom: 24 }} />
      {startLocation !== "" && destLocation !== "" && (
        <FindRoutesButton
          setRoute={setSearch}
          startLocation={startLocation}
          destLocation={destLocation}
        />
      )}
      {Object.keys(search).length > 0 && (
        <AllPossibleRoutes navigation={navigation} locationRoutes={search} />
      )}
    </View>
  );
}
