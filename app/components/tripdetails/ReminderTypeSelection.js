import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
export function ReminderTypeSelection({ numLegs, setRemindWhen, remindWhen }) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          fontSize: 13,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        REMIND ME BEFORE...
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
                remindWhen === "eachleg" ? MAIN_PRIMARY_COLOUR : "white",
              right: 10,
              height: 40,
              width: 120,
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              elevation: 2,
            }}
            disabled={numLegs === 1}
            onPress={() => setRemindWhen("eachleg")}
          >
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                color:
                  numLegs === 1
                    ? "lightgrey"
                    : remindWhen === "eachleg"
                    ? "white"
                    : MAIN_PRIMARY_COLOUR,
              }}
            >
              Each Leg
            </Text>
          </TouchableOpacity>
          {numLegs === 1 && (
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 8,
                color: MAIN_PRIMARY_COLOUR,
              }}
            >
              This trip only has one leg.
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:
              remindWhen === "wholetrip" ? MAIN_PRIMARY_COLOUR : "white",
            left: 10,
            height: 40,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            elevation: 2,
          }}
          onPress={() => setRemindWhen("wholetrip")}
        >
          <Text
            style={{
              color: remindWhen === "wholetrip" ? "white" : MAIN_PRIMARY_COLOUR,
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
