import React, { useState } from "react";
import { View } from "react-native";
import { LocationInput } from "./LocationInput";
import { ByTransportStops } from "./ByTransportStops";
import { ByTransportModes } from "./ByTransportModes";
export function CreateByTransportStops({
  route,
  setRoute,
  startStop,
  destStop,
  setStartStop,
  setDestStop,
  setSearch,
  clearText,
  setClearText,
}) {
  const [byTransportMode, setByTransportMode] = useState("route");
  const renderStopsInput =
    (byTransportMode === "route" && route !== "") || byTransportMode === "stop";

  return (
    <View>
      <View style={{ marginBottom: 48 }} />
      <ByTransportModes
        mode={byTransportMode}
        setMode={setByTransportMode}
        route={route}
        setRoute={setRoute}
      />
      <View style={{ marginBottom: 16 }} />
      {byTransportMode === "route" && (
        <LocationInput
          placeholder={"Select a transport route"}
          options={["607X"]}
          onChange={(value) => {
            setRoute(value);
          }}
          text={route}
          clear={clearText}
          toggleClear={setClearText}
          setSearch={setSearch}
        />
      )}
      <View style={{ marginBottom: byTransportMode === "route" ? 24 : 8 }} />
      {renderStopsInput && (
        <ByTransportStops
          startStop={startStop}
          setStartStop={setStartStop}
          destStop={destStop}
          setDestStop={setDestStop}
          setSearch={setSearch}
          clearText={clearText}
          setClearText={setClearText}
        />
      )}
    </View>
  );
}
