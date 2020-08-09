import React, { useState } from "react";
import { View, SafeAreaView, Text, ScrollView } from "react-native";
import {
  ScreenHeadingStyles,
  MAIN_PRIMARY_COLOUR,
  DefinedTrips,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import { SavedTripCard } from "../../components/home/SavedTripCard";

export function ScheduleScreen({ currentUser }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,

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
            marginBottom: 12,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          Manage your reminders, or view your history.
        </Text>
        <ScrollView showsVerticalScrollIndicato={false}>
          <ScheduleSection text="Live Reminders" navigation={navigation} />
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

function ScheduleSection({ calendar, text, navigation }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  });
  const [selectedDay, setSelectedDay] = useState();

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 16,
        marginTop: calendar ? 24 : 12,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "WorkSans_500Medium",
          color: MAIN_PRIMARY_COLOUR,
          alignSelf: "center",
          marginBottom: 12,
        }}
      >
        {text}
      </Text>
      {!calendar &&
        DefinedTrips.slice(0, 1).map((item, key) => (
          <SavedTripCard
            startStop={item["startStop"]}
            endStop={item["endStop"]}
            nextTripTime={item["nextTripTime"]}
            duration={item["duration"]}
            cost={item["cost"]}
            legs={item["legs"]}
            navigation={navigation}
            // navigateTo={} TODO AFTER REMINDERS IMPLEMENTED
            reminder={true}
            keyValue={key}
            data={{
              startStop: item["startStop"],
              endStop: item["endStop"],
              nextTripTime: item["nextTripTime"],
              duration: item["duration"],
              cost: item["cost"],
              legs: item["legs"],
            }}
          />
        ))}
      {calendar && (
        <SchedulesHistory
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          navigation={navigation}
        />
      )}
    </View>
  );
}

function SchedulesHistory({ selectedDay, setSelectedDay, navigation }) {
  return (
    <>
      <View style={{ paddingHorizontal: 12 }}>
        <View style={{ marginBottom: 12 }} />
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
      <View>
        {selectedDay && (
          <>
            <Text
              style={{
                fontFamily: "WorkSans_700Bold",
                fontSize: 16,
                color: MAIN_PRIMARY_COLOUR,
                marginTop: 24,
              }}
            >
              Trips from {Object.keys(selectedDay)[0]}
            </Text>
            {DefinedTrips.slice(0, 1).map((item, key) => (
              <SavedTripCard
                startStop={item["startStop"]}
                endStop={item["endStop"]}
                tripStart="12:05pm"
                tripEnd="1:25pm"
                duration={item["duration"]}
                cost={item["cost"]}
                legs={item["legs"]}
                navigation={navigation}
                // navigateTo={} TODO AFTER REMINDERS IMPLEMENTED
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
