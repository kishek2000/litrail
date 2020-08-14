import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GoBackButton } from "../routes/GoBackButton";
import { CloseModal } from "../../components/tripdetails/CloseModal";

const Settings = [
  {
    label: "Notifications",
    options: [{ label: "Reminder Notifications", type: "toggle" }],
  },
  {
    label: "Theme",
    options: [
      { label: "Dark Mode", type: "toggle" },
      { label: "Colour-coded Trips", type: "toggle" },
    ],
  },
  {
    label: "Trips",
    options: [
      { label: "Auto-save Trips", type: "toggle" },
      { label: "Update State/Region", type: "select" },
    ],
  },
  {
    label: "Payment",
    options: [{ label: "Update Card Details", type: "modal" }],
  },
];

export function SettingsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        position: "relative",
        paddingHorizontal: 16,
        width: "100%",
      }}
    >
      <GoBackButton navigation={navigation} positionSet={"absolute"} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={ScreenHeadingStyles}>Settings</Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: MAIN_PRIMARY_COLOUR,
          marginTop: 8,
          fontFamily: "WorkSans_400Regular",
        }}
      >
        Customise your experience.
      </Text>
      <View style={{ marginBottom: 24 }} />
      {Settings.map((section) => (
        <>
          <SettingSection sectionData={section} />
          <View style={{ marginBottom: 16 }} />
        </>
      ))}
    </View>
  );
}

function SettingSection({ sectionData }) {
  return (
    <View style={{ width: "100%", paddingHorizontal: 8 }}>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          color: MAIN_PRIMARY_COLOUR,
          fontSize: 10,
          textTransform: "uppercase",
        }}
      >
        {sectionData["label"]}
      </Text>
      <View style={{ marginBottom: 12 }} />
      {sectionData["options"].map((option) => (
        <>
          <View
            style={{
              backgroundColor: "white",
              height: 48,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 13,
                color: MAIN_PRIMARY_COLOUR,
              }}
            >
              {option["label"]}
            </Text>
            <SettingsSelection type={option["type"]} />
          </View>
          <View style={{ marginBottom: 8 }} />
        </>
      ))}
    </View>
  );
}

function SettingsSelection({ type }) {
  return (
    <>
      {type === "toggle" && <SettingsToggle />}
      {type === "select" && <SettingsSelect />}
      {type === "modal" && <SettingsModal />}
    </>
  );
}

function SettingsToggle() {
  const [pressed, setPressed] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        width: 52,
        borderRadius: 24,
        paddingHorizontal: 2,
        paddingVertical: 1,
        backgroundColor: pressed ? "#006EEF" : MAIN_PRIMARY_COLOUR,
        justifyContent: pressed ? "flex-end" : "flex-start",
      }}
    >
      <TouchableOpacity onPress={() => setPressed(!pressed)}>
        <FontAwesome name="circle" size={24} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

function SettingsSelect() {
  const [pressed, setPressed] = useState(false);
  return <SelectOptions options={["NSW", "VIC"]} />;
}

function SettingsModal() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
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
              justifyContent: "center",
            }}
          >
            <View
              style={{
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
                Update Card Details
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                Update your credit/debit card details.
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                  marginTop: 30,
                  marginBottom: 8,
                }}
              >
                Name on Card
              </Text>
              <TextInput
                style={{
                  height: 35,
                  backgroundColor: "white",
                  width: "90%",
                  borderRadius: 24,
                  paddingLeft: 24,
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 12,
                  color: MAIN_PRIMARY_COLOUR,
                  elevation: 2,
                }}
                placeholder="Enter name on card"
                keyboardType={"default"}
                // onChangeText={(input) => {}}
              />
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                  marginTop: 30,
                  marginBottom: 8,
                }}
              >
                Card Number
              </Text>
              <TextInput
                style={{
                  height: 35,
                  backgroundColor: "white",
                  width: "90%",
                  borderRadius: 24,
                  paddingLeft: 24,
                  fontFamily: "WorkSans_400Regular",
                  fontSize: 12,
                  color: MAIN_PRIMARY_COLOUR,
                  elevation: 2,
                }}
                placeholder="Enter card number"
                keyboardType={"numeric"}
                // onChangeText={(input) => {}}
              />
              <Text
                style={{
                  fontFamily: "WorkSans_400Regular",
                  fontSize: 13,
                  color: MAIN_PRIMARY_COLOUR,
                  marginTop: 30,
                  marginBottom: 8,
                }}
              >
                Expiry Date
              </Text>
              <TextInput
                style={{
                  height: 35,
                  backgroundColor: "white",
                  width: "90%",
                  borderRadius: 24,
                  paddingLeft: 24,
                  fontFamily: "WorkSans_400Regular",
                  fontSize: 12,
                  color: MAIN_PRIMARY_COLOUR,
                  elevation: 2,
                }}
                placeholder="Enter expiry date"
                keyboardType={"numeric"}
                // onChangeText={(input) => {}}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: MAIN_PRIMARY_COLOUR,
                  height: 40,
                  width: 140,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  marginTop: 40,
                }}
                // onPress={() => {}}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "WorkSans_700Bold",
                    fontSize: 12,
                  }}
                >
                  UPDATE
                </Text>
              </TouchableOpacity>
            </View>
            <CloseModal setState={setModalVisible} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
        <MaterialIcons
          name="navigate-next"
          size={24}
          color={MAIN_PRIMARY_COLOUR}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function SelectOptions({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setShowOptions(true)}>
        <Text
          style={{
            fontFamily: "WorkSans_400Regular",
            color: MAIN_PRIMARY_COLOUR,
            opacity: 0.7,
            textAlign: "right",
          }}
        >
          {selectedOption}
        </Text>
      </TouchableOpacity>
      {showOptions &&
        options
          .filter((option) => {
            return option !== selectedOption;
          })
          .map((option) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedOption(option);
                setShowOptions(false);
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSans_400Regular",
                  color: MAIN_PRIMARY_COLOUR,
                  textAlign: "right",
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
    </View>
  );
}
