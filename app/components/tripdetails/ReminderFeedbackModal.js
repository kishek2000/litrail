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
import { Strong } from "./Strong";
import { CloseModal } from "./CloseModal";

export function ReminderFeedbackModal({ modalVisible, setModalVisible, data }) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible === "feedback"}
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
                fontFamily: "WorkSans_500Medium",
                fontSize: 20,
                color: MAIN_PRIMARY_COLOUR,
                textAlign: "center",
              }}
            >
              You will be reminded{" "}
              <Strong
                text={`${data["remindWhenDuration"]} minute(s) before `}
              />
              {data["remindWhen"] === "wholetrip"
                ? "your trip begins and ends."
                : "each leg of your trip begins."}
            </Text>
          </View>
          <CloseModal setState={setModalVisible} />
        </View>
      </View>
    </Modal>
  );
}
