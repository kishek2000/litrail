import React, { useState } from "react";
import {
  Image,
  Text,
  Modal,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function ReminderModal({
  remindModalVisible,
  setRemindModalVisible,
  remindWhen,
  setRemindWhen,
  setRemindWhenDuration,
  remindWhenDuration,
  numLegs,
  currReminders,
  setCurrReminders,
  tripId,
  setRemindFeedbackModalVisible,
  remindExists,
  setRemindExists,
}) {
  console.log(numLegs);
  const init_remind_when = remindWhenDuration;

  return (
    <Modal animationType="fade" transparent={true} visible={remindModalVisible}>
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
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            width: Dimensions.get("window").width * 0.9,
            height: Dimensions.get("window").height * 0.6,
            flexDirection: "row",
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
              Set Reminder
            </Text>
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 13,
                color: MAIN_PRIMARY_COLOUR,
                marginBottom: 30,
              }}
            >
              Set a reminder for your trip.
            </Text>
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
                flexDirection: "row",
                top: 20,
                marginBottom: 70,
              }}
            >
              {numLegs == 1 ? (
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        remindWhen === "eachleg"
                          ? MAIN_PRIMARY_COLOUR
                          : "white",
                      right: 10,
                      height: 40,
                      width: 120,
                      marginBottom: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 7,
                    }}
                    disabled={true}
                  >
                    <Text
                      style={{
                        fontFamily: "WorkSans_500Medium",
                        color: "lightgrey",
                      }}
                    >
                      Each Leg
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "WorkSans_500Medium",
                      fontSize: 8,
                      color: MAIN_PRIMARY_COLOUR,
                    }}
                  >
                    This trip only has one leg.
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      remindWhen === "eachleg" ? MAIN_PRIMARY_COLOUR : "white",
                    right: 10,
                    height: 40,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                  }}
                  onPress={() => setRemindWhen("eachleg")}
                >
                  <Text
                    style={{
                      fontFamily: "WorkSans_500Medium",
                      color:
                        remindWhen === "eachleg"
                          ? "white"
                          : MAIN_PRIMARY_COLOUR,
                    }}
                  >
                    Each Leg
                  </Text>
                </TouchableOpacity>
              )}
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
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 7,
                }}
                onPress={() => setRemindWhen("wholetrip")}
              >
                <Text
                  style={{
                    color:
                      remindWhen === "wholetrip"
                        ? "white"
                        : MAIN_PRIMARY_COLOUR,
                    fontFamily: "WorkSans_500Medium",
                  }}
                >
                  Whole Trip
                </Text>
              </TouchableOpacity>
            </View>
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
                marginBottom: 50,
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
                  elevation: 7,
                }}
                defaultValue={init_remind_when}
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
            <Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                You will be reminded{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_700Bold",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {remindWhenDuration} minute(s) before{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {remindWhen === "wholetrip"
                  ? "your trip begins and ends."
                  : "each leg of your trip ends."}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                top: 20,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#DE0000",
                  right: 10,
                  height: 40,
                  width: 140,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "WorkSans_700Bold",
                    color: "white",
                  }}
                >
                  CANCEL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: MAIN_PRIMARY_COLOUR,
                  left: 10,
                  height: 40,
                  width: 140,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
                onPress={() => {
                  const new_reminder = {
                    trip_id: tripId,
                    remind_when: remindWhen,
                    remind_when_duration: remindWhenDuration,
                  };
                  setCurrReminders(currReminders.concat([new_reminder]));
                  setRemindExists(true);
                  setRemindFeedbackModalVisible(true);
                  setRemindModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "WorkSans_700Bold",
                  }}
                >
                  SET
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginLeft: -20,
            }}
          >
            <AntDesign
              name="close"
              size={24}
              color={MAIN_PRIMARY_COLOUR}
              onPress={() => setRemindModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
