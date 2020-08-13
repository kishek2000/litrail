import React from "react";
import { View, Text } from "react-native";
import { LocationInput } from "./LocationInput";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function ByTransportStops({
  startStop,
  destStop,
  setStartStop,
  setDestStop,
  setSearch,
  clearText,
  setClearText,
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "WorkSans_700Bold",
          color: MAIN_PRIMARY_COLOUR,
          marginBottom: 8,
        }}
      >
        Select your start and end stops.
      </Text>
      <LocationInput
        placeholder={"Select your start stop"}
        options={["Bella Vista Station"]}
        onChange={(value) => {
          setStartStop(value);
        }}
        text={startStop}
        clear={clearText}
        toggleClear={setClearText}
        setSearch={setSearch}
      />
      <View style={{ marginBottom: 8 }} />
      <LocationInput
        placeholder={"Select your end stop"}
        options={["QVB"]}
        onChange={(value) => {
          setDestStop(value);
        }}
        text={destStop}
        clear={clearText}
        toggleClear={setClearText}
        setSearch={setSearch}
      />
    </View>
  );
}
