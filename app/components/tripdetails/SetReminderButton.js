import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function SetReminderButton({
  tripId,
  remindWhen,
  remindWhenDuration,
  setCurrReminders,
  currReminders,
  setRemindExists,
  setModalVisible,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: MAIN_PRIMARY_COLOUR,
        height: 40,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 20,
      }}
      onPress={() => {
        const new_reminder = {
          trip_id: tripId,
          remind_when: remindWhen,
          remind_when_duration: remindWhenDuration,
        };
        setCurrReminders(currReminders.concat([new_reminder]));
        setRemindExists(true);
        setModalVisible("feedback");
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "WorkSans_700Bold",
        }}
      >
        SET
      </Text>
    </TouchableOpacity>
  );
}
