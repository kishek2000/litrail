import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function UpdateReminderButton({
  currReminders,
  tripId,
  remindWhen,
  remindWhenDuration,
  setCurrReminders,
  setModalVisible,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: MAIN_PRIMARY_COLOUR,
        left: 10,
        height: 40,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
      onPress={() => {
        const clone_array = currReminders.filter(() => {
          return true;
        });
        for (const rem of clone_array) {
          if (rem.trip_id === tripId) {
            rem.remind_when = remindWhen;
            rem.remind_when_duration = remindWhenDuration;
          }
        }
        setCurrReminders(clone_array);
        setModalVisible("feedback");
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "WorkSans_700Bold",
        }}
      >
        UPDATE
      </Text>
    </TouchableOpacity>
  );
}
