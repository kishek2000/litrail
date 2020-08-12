import React from "react";
import { Text, TouchableOpacity } from "react-native";
export function DeleteReminderButton({
  currReminders,
  tripId,
  setCurrReminders,
  setRemindExists,
  setModalVisible,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#DE0000",
        height: 40,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
      onPress={() => {
        const new_array = currReminders.filter((rem) => {
          return rem.trip_id !== tripId;
        });
        setCurrReminders(new_array);
        setRemindExists && setRemindExists(false);
        setModalVisible("");
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          color: "white",
          textAlign: "center",
        }}
      >
        DELETE
      </Text>
    </TouchableOpacity>
  );
}
