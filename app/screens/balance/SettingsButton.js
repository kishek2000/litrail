import React from "react";
import { TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export function SettingsButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{ position: "absolute", top: 36, right: 16 }}
      onPress={() => navigation.navigate("Settings")}
    >
      <Ionicons name="ios-settings" size={28} color={MAIN_PRIMARY_COLOUR} />
    </TouchableOpacity>
  );
}
