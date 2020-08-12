import React, { useState } from "react";
import { SavedTripCard } from "../home/SavedTripCard";
import { TripStore } from "../../classes/User";
import { ReminderFeedbackModal } from "../tripdetails/ReminderFeedbackModal";
import { ReminderModal } from "../tripdetails/ReminderModal";
export function SchedulesReminders({
  navigation,
  currentUserReminders,
  setCurrentUserReminders,
  modalVisible,
  setModalVisible,
}) {
  return currentUserReminders.map((item, key) => {
    const trip_info = TripStore.get(item["trip_id"]);
    const [remindWhen, setRemindWhen] = useState(item["remind_when"]);
    const [remindWhenDuration, setRemindWhenDuration] = useState(
      item["remind_when_duration"]
    );
    return (
      <>
        <ReminderModal
          setRemindWhen={setRemindWhen}
          setRemindWhenDuration={setRemindWhenDuration}
          currReminders={currentUserReminders}
          setCurrReminders={setCurrentUserReminders}
          data={{
            tripId: item["trip_id"],
            numLegs: item["numLegs"],
            remindWhen: remindWhen,
            remindWhenDuration: remindWhenDuration,
          }}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <ReminderFeedbackModal
          data={{
            remindWhen: remindWhen,
            remindWhenDuration: remindWhenDuration,
          }}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <SavedTripCard
          navigation={navigation}
          reminder={setModalVisible}
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
