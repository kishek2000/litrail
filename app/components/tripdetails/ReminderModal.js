import React, { useState } from "react";
import { Text, Modal, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { Dimensions } from "react-native";
import { Strong } from "./Strong";
import { ReminderDurationInput } from "./ReminderDurationInput";
import { CloseModal } from "./CloseModal";
import { SetReminderButton } from "./SetReminderButton";
import { ReminderTypeSelection } from "./ReminderTypeSelection";
import { DeleteReminderButton } from "./DeleteReminderButton";
import { UpdateReminderButton } from "./UpdateReminderButton";

export function ReminderModal({
  setRemindWhen,
  setRemindWhenDuration,
  currReminders,
  setCurrReminders,
  setRemindExists,
  modalVisible,
  setModalVisible,
  data,
}) {
  if (modalVisible === "") return <></>;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible === "set" || modalVisible === "edit"}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00000080",
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: "#EEEEEE",
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            width: Dimensions.get("window").width * 0.9,
            height: Dimensions.get("window").height * 0.6,
            flexDirection: "row",
            position: "relative",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 20,
                color: MAIN_PRIMARY_COLOUR,
              }}
            >
              {modalVisible === "set" ? "Set Reminder" : "Edit Reminder"}
            </Text>
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 13,
                color: MAIN_PRIMARY_COLOUR,
                marginBottom: 30,
              }}
            >
              {modalVisible === "set"
                ? "Set a reminder for your trip."
                : "Edit the reminder for this trip."}
            </Text>
            <ReminderTypeSelection
              numLegs={data["numLegs"]}
              setRemindWhen={setRemindWhen}
              remindWhen={data["remindWhen"]}
            />
            <ReminderDurationInput
              remindWhenDuration={data["remindWhenDuration"]}
              setRemindWhenDuration={setRemindWhenDuration}
            />
            <Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                You will be reminded{" "}
                <Strong
                  text={`${data["remindWhenDuration"]} minute(s) before `}
                />
                {data["remindWhen"] === "wholetrip"
                  ? "your trip begins and ends."
                  : "each leg of your trip ends."}
              </Text>
            </Text>
            {modalVisible === "set" ? (
              <SetReminderButton
                tripId={data["tripId"]}
                remindWhen={data["remindWhen"]}
                remindWhenDuration={data["remindWhenDuration"]}
                setCurrReminders={setCurrReminders}
                currReminders={currReminders}
                setRemindExists={setRemindExists}
                setModalVisible={setModalVisible}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  top: 20,
                  marginTop: 20,
                }}
              >
                <DeleteReminderButton
                  currReminders={currReminders}
                  tripId={data["tripId"]}
                  setCurrReminders={setCurrReminders}
                  setRemindExists={setRemindExists}
                  setModalVisible={setModalVisible}
                />
                <View style={{ marginRight: 8 }} />
                <UpdateReminderButton
                  currReminders={currReminders}
                  tripId={data["tripId"]}
                  remindWhen={data["remindWhen"]}
                  remindWhenDuration={data["remindWhenDuration"]}
                  setCurrReminders={setCurrReminders}
                  setModalVisible={setModalVisible}
                />
              </View>
            )}
          </View>
          <CloseModal setState={setModalVisible} />
        </View>
      </View>
    </Modal>
  );
}
