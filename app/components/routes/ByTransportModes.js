import React from "react";
import { View } from "react-native";
import { ByTransportModeButton } from "./ByTransportModeButton";
export function ByTransportModes({ mode, setMode }) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ByTransportModeButton mode={mode} setMode={setMode} option={"route"} />
        <View style={{ marginRight: 16 }} />
        <ByTransportModeButton mode={mode} setMode={setMode} option={"stop"} />
      </View>
    </View>
  );
}
