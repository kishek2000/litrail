import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
      <View
        style={{ flexDirection: "row", marginTop: 84, alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("OpalScreen")}
          style={{ marginRight: 48 }}
        >
          <Text style={{ fontSize: 16, fontFamily: "WorkSans_300Light" }}>
            BACK
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 54,
            fontFamily: "WorkSans_500Medium",
            color: MAIN_PRIMARY_COLOUR,
            marginRight: 84,
          }}
        >
          Settings
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
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
          fontFamily: "WorkSans_700Bold",
          color: MAIN_PRIMARY_COLOUR,
          fontSize: 10,
        }}
      >
        {sectionData["label"]}
      </Text>
      <View style={{ marginBottom: 8 }} />
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
                fontSize: 16,
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
    <TouchableOpacity>
      <MaterialIcons
        name="navigate-next"
        size={24}
        color={MAIN_PRIMARY_COLOUR}
      />
    </TouchableOpacity>
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
