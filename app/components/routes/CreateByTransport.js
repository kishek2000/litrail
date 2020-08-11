import React, { useState } from "react";
import { View } from "react-native";
import { LocationInput } from "./LocationInput";
import { FindRoutesButton } from "./FindRoutesButton";
import { AllPossibleRoutes } from "./AllPossibleRoutes";
import { CreateByTransportStops } from "./CreateByTransportStops";

export function CreateByTransport({
  navigation,
  startStop,
  setStartStop,
  destStop,
  setDestStop,
  transport,
  setTransport,
  route,
  setRoute,
}) {
  const [clearText, setClearText] = useState(false);
  const [search, setSearch] = useState({});

  return (
    <View>
      <View style={{ marginBottom: 16 }} />
      <LocationInput
        placeholder={"Choose your mode of transport..."}
        options={["Bus", "Train", "Light Rail"]}
        onChange={(value) => {
          setTransport(value);
        }}
        text={transport}
        clear={clearText}
        toggleClear={setClearText}
        setSearch={setSearch}
      />
      {transport !== "" && (
        <CreateByTransportStops
          route={route}
          setRoute={setRoute}
          startStop={startStop}
          destStop={destStop}
          setStartStop={setStartStop}
          setDestStop={setDestStop}
          setSearch={setSearch}
          clearText={clearText}
          setClearText={setClearText}
        />
      )}
      {startStop !== "" && destStop !== "" && (
        <>
          <View style={{ marginBottom: 24 }} />
          <FindRoutesButton
            setRoute={setSearch}
            startLocation={startStop}
            destLocation={destStop}
          />
        </>
      )}
      {Object.keys(search).length > 0 && (
        <AllPossibleRoutes navigation={navigation} locationRoutes={search} />
      )}
    </View>
  );
}
