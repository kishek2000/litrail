import React, { useState } from "react";
import { View, SafeAreaView, Text, ScrollView } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ScheduleSection } from "../../components/schedules/ScheduleSection";

export function ScheduleScreen({
  currentUserReminders,
  setCurrentUserReminders,
}) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 8,
          position: "relative",
        }}
      >
        <Text
          style={{
            fontSize: 42,
            fontFamily: "WorkSans_500Medium",
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 84,
            alignSelf: "center",
          }}
        >
          Schedule
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: MAIN_PRIMARY_COLOUR,
            marginBottom: 24,
            fontFamily: "WorkSans_400Regular",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Manage your reminders, or view your history.
        </Text>
        <ScrollView showsVerticalScrollIndicato={false}>
          <ScheduleSection
            text="Live Reminders"
            navigation={navigation}
            currentUserReminders={currentUserReminders}
            setCurrentUserReminders={setCurrentUserReminders}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <View style={{ marginBottom: 16 }} />
          <ScheduleSection
            calendar
            text="Your History"
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
