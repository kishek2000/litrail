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

export function ReminderFeedbackModal({
  remindFeedbackModalVisible,
  setRemindFeedbackModalVisible,
  remindWhenDuration,
  remindWhen,
}) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={remindFeedbackModalVisible}
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
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 20,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                You will be reminded{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_700Bold",
                  fontSize: 20,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {remindWhenDuration} minute(s) before{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 20,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {remindWhen === "wholetrip"
                  ? "your trip begins and ends."
                  : "each leg of your trip begins."}
              </Text>
            </Text>
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
              onPress={() => setRemindFeedbackModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
