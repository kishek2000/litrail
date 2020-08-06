import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export function ScheduleScreen({ currentUser }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text style={ScreenHeadingStyles}>Schedule</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          Manage your reminders, or view your history.
        </Text>
      </View>
    </SafeAreaView>
  );
}
