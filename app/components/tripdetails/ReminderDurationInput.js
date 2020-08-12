import React from "react";
import { Text, View, TextInput } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function ReminderDurationInput({
  remindWhenDuration,
  setRemindWhenDuration,
}) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 13,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        WITH A DURATION OF...
      </Text>
      <View
        style={{
          flexDirection: "row",
          top: 20,
          marginBottom: 64,
        }}
      >
        <TextInput
          style={{
            height: 35,
            backgroundColor: "white",
            width: "40%",
            borderRadius: 24,
            paddingLeft: 24,
            fontFamily: "WorkSans_500Medium",
            fontSize: 16,
            color: MAIN_PRIMARY_COLOUR,
            elevation: 2,
          }}
          defaultValue={remindWhenDuration}
          placeholder="Enter value"
          onChangeText={(input) => {
            setRemindWhenDuration(input);
          }}
        />
        <Text
          style={{
            fontFamily: "WorkSans_500Medium",
            fontSize: 13,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 7,
            marginLeft: 10,
          }}
        >
          Minute(s)
        </Text>
      </View>
    </>
  );
}
