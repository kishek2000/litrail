import React, { useState } from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { Dimensions } from "react-native";
import { Strong } from "./Strong";
import { ReminderDurationInput } from "./ReminderDurationInput";
import { CloseModal } from "./CloseModal";
import { SetReminderButton } from "./SetReminderButton";
import { ReminderTypeSelection } from "./ReminderTypeSelection";
import { DeleteReminderButton } from "./DeleteReminderButton";
import { UpdateReminderButton } from "./UpdateReminderButton";
import { ReminderOrTripSelection } from "./ReminderOrTripSelection";
import { ScrollView } from "react-native-gesture-handler";

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
  const [reminderOrTrip, setReminderOrTrip] = useState("reminder");
  const availableTimes = [
    "7:35PM",
    "7:40PM",
    "7:45PM",
    "7:50PM",
    "7:55PM",
    "8:OOPM",
  ];

  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);

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
            height:
              reminderOrTrip === "wholetrip"
                ? Dimensions.get("window").height * 0.8
                : modalVisible === "edit"
                ? Dimensions.get("window").height * 0.7
                : Dimensions.get("window").height * 0.6,
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
                : "Change your trip reminder, or delay your trip."}
            </Text>
            {modalVisible === "edit" && (
              <ReminderOrTripSelection
                reminderOrTrip={reminderOrTrip}
                setReminderOrTrip={setReminderOrTrip}
              ></ReminderOrTripSelection>
            )}
            {reminderOrTrip === "wholetrip" && (
              <Text
                style={{
                  fontFamily: "WorkSans_700Bold",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                AVAILABLE TRIP TIMES...
              </Text>
            )}
            {reminderOrTrip === "wholetrip" && (
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  marginBottom: 20,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                Scroll through and select your new trip time.
              </Text>
            )}
            {reminderOrTrip === "wholetrip" && (
              <View
                style={{
                  height: Dimensions.get("window").height * 0.2,
                  marginBottom: 20,
                }}
              >
                <ScrollView>
                  {availableTimes.map((time) => (
                    <TouchableOpacity
                      style={{
                        backgroundColor:
                          selectedTime === time ? MAIN_PRIMARY_COLOUR : "white",
                        height: 40,
                        width: 200,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        elevation: 2,
                        marginBottom: 10,
                      }}
                      onPress={() => setSelectedTime(time)}
                    >
                      <Text>
                        <Text
                          style={{
                            fontFamily: "WorkSans_500Medium",
                            color:
                              selectedTime === time
                                ? "white"
                                : MAIN_PRIMARY_COLOUR,
                          }}
                        >
                          STARTING AT
                        </Text>
                        <Text
                          style={{
                            fontFamily: "WorkSans_700Bold",
                            fontSize: 20,
                            color:
                              selectedTime === time
                                ? "white"
                                : MAIN_PRIMARY_COLOUR,
                          }}
                        >
                          {" " + time}
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
            {reminderOrTrip === "wholetrip" && (
              <Text
                style={{
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "WorkSans_500Medium",
                    color: MAIN_PRIMARY_COLOUR,
                  }}
                >
                  CURRENT SELECTION IS
                </Text>
                <Text
                  style={{
                    fontFamily: "WorkSans_700Bold",
                    fontSize: 20,
                    color: MAIN_PRIMARY_COLOUR,
                  }}
                >
                  {" " + selectedTime}
                </Text>
              </Text>
            )}
            {reminderOrTrip === "reminder" && (
              <ReminderTypeSelection
                setRemindWhen={setRemindWhen}
                remindWhen={data["remindWhen"]}
              />
            )}
            {reminderOrTrip === "reminder" && (
              <ReminderDurationInput
                remindWhenDuration={data["remindWhenDuration"]}
                setRemindWhenDuration={setRemindWhenDuration}
              />
            )}
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
