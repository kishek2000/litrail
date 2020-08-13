import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, DefinedTrips } from "../../constants";
import { Calendar } from "react-native-calendars";
import { SavedTripCard } from "../../components/home/SavedTripCard";

export function SchedulesHistory({ selectedDay, setSelectedDay, navigation }) {
  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 8 }} />
        <Calendar
          onDayPress={(day) => {
            const dateString = day.dateString;
            const selection = {
              [dateString]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
            };
            setSelectedDay(selection);
          }}
          markedDates={selectedDay}
        />
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        {selectedDay && (
          <>
            <Text
              style={{
                fontFamily: "WorkSans_700Bold",
                fontSize: 16,
                color: MAIN_PRIMARY_COLOUR,
                marginTop: 24,
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Trips from {Object.keys(selectedDay)[0]}
            </Text>
            {DefinedTrips.slice(0, 1).map((item, key) => (
              <SavedTripCard
                navigation={navigation}
                history={true}
                keyValue={key}
                data={{
                  startStop: item["startStop"],
                  endStop: item["endStop"],
                  tripStart: "12:05pm",
                  tripEnd: "1:25pm",
                  duration: item["duration"],
                  cost: item["cost"],
                  legs: item["legs"],
                }}
              />
            ))}
          </>
        )}
      </View>
      <View paddingBottom={36} />
    </>
  );
}
