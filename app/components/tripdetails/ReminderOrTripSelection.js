import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function ReminderOrTripSelection({ reminderOrTrip, setReminderOrTrip }) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 13,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        I WANT TO EDIT OR DELAY MY...
      </Text>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          marginBottom: 24,
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                reminderOrTrip === "reminder" ? MAIN_PRIMARY_COLOUR : "white",
              right: 10,
              height: 40,
              width: 120,
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              elevation: 2,
            }}
            onPress={() => setReminderOrTrip("reminder")}
          >
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                color:
                  reminderOrTrip === "reminder" ? "white" : MAIN_PRIMARY_COLOUR,
              }}
            >
              Reminder
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:
              reminderOrTrip === "wholetrip" ? MAIN_PRIMARY_COLOUR : "white",
            left: 10,
            height: 40,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            elevation: 2,
          }}
          onPress={() => setReminderOrTrip("wholetrip")}
        >
          <Text
            style={{
              color:
                reminderOrTrip === "wholetrip" ? "white" : MAIN_PRIMARY_COLOUR,
              fontFamily: "WorkSans_500Medium",
            }}
          >
            Whole Trip
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
