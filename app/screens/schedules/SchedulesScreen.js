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
import { TripFacade } from "../../classes/User";
import { EditReminderModal } from "../../components/tripdetails/EditReminderModal";
import { ReminderFeedbackModal } from "../../components/tripdetails/ReminderFeedbackModal";

export function ScheduleScreen({
  currentUserReminders,
  setCurrentUserReminders,
}) {
  const navigation = useNavigation();
  console.log("current reminders:");
  console.log(currentUserReminders);
  const [editRemindModalVisible, setEditRemindModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          position: "relative",
        }}
      >
        <Text
          style={{
            fontSize: 54,
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
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            marginBottom: 12,
            fontFamily: "WorkSans_400Regular",
            alignSelf: "center",
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
            editRemindModalVisible={editRemindModalVisible}
            setEditRemindModalVisible={setEditRemindModalVisible}
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

function ScheduleSection({
  calendar,
  text,
  navigation,
  currentUserReminders,
  setCurrentUserReminders,
  editRemindModalVisible,
  setEditRemindModalVisible,
}) {
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
          marginBottom: 12,
        }}
      >
        {text}
      </Text>
      {!calendar && currentUserReminders.length > 0 ? (
        <SchedulesReminders
          currentUserReminders={currentUserReminders}
          setCurrentUserReminders={setCurrentUserReminders}
          editRemindModalVisible={editRemindModalVisible}
          setEditRemindModalVisible={setEditRemindModalVisible}
        />
      ) : (
        !calendar && <Text>You currently have no reminders set.</Text>
      )}
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

function SchedulesReminders({
  navigation,
  currentUserReminders,
  setCurrentUserReminders,
  editRemindModalVisible,
  setEditRemindModalVisible,
}) {
  const [remindFeedbackModalVisible, setRemindFeedbackModalVisible] = useState(
    false
  );

  return currentUserReminders.map((item, key) => {
    const trip_info = TripFacade.get(item["trip_id"]);
    const [remindWhen, setRemindWhen] = useState(item["remind_when"]);
    const [remindWhenDuration, setRemindWhenDuration] = useState(
      item["remind_when_duration"]
    );
    return (
      <>
        {console.log("item:", item)}
        {editRemindModalVisible && (
          <EditReminderModal
            setEditRemindModalVisible={setEditRemindModalVisible}
            remindWhen={remindWhen}
            setRemindWhen={setRemindWhen}
            remindWhenDuration={remindWhenDuration}
            setRemindWhenDuration={setRemindWhenDuration}
            currReminders={currentUserReminders}
            setCurrReminders={setCurrentUserReminders}
            numLegs={trip_info["legs"].length}
            setRemindFeedbackModalVisible={setRemindFeedbackModalVisible}
            tripId={item["trip_id"]}
          />
        )}
        <ReminderFeedbackModal
          remindFeedbackModalVisible={remindFeedbackModalVisible}
          setRemindFeedbackModalVisible={setRemindFeedbackModalVisible}
          remindWhenDuration={remindWhenDuration}
          remindWhen={remindWhen}
        />
        <SavedTripCard
          startStop={trip_info["startStop"]}
          endStop={trip_info["endStop"]}
          nextTripTime={trip_info["nextTripTime"]}
          duration={trip_info["duration"]}
          cost={trip_info["cost"]}
          legs={trip_info["legs"]}
          navigation={navigation}
          reminder={setEditRemindModalVisible}
          keyValue={key}
          data={{
            startStop: trip_info["startStop"],
            endStop: trip_info["endStop"],
            nextTripTime: trip_info["nextTripTime"],
            duration: trip_info["duration"],
            cost: trip_info["cost"],
            legs: trip_info["legs"],
          }}
        />
      </>
    );
  });
}
