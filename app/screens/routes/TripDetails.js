import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { TripStore } from "../../classes/User";
import { TripDetailsInfoCorner } from "../../components/tripdetails/TripDetailsInfoCorner";
import { ExpandButton } from "../../components/tripdetails/ExpandButton";
import { TripDetailsLegStart } from "../../components/tripdetails/TripDetailsLegStart";
import { TripDetailsLegMiddle } from "../../components/tripdetails/TripDetailsLegMiddle";
import { TripDetailsTripEnd } from "../../components/tripdetails/TripDetailsTripEnd";
import { ReminderModal } from "../../components/tripdetails/ReminderModal";
import { ReminderFeedbackModal } from "../../components/tripdetails/ReminderFeedbackModal";
import { GoBackButton } from "../../components/routes/GoBackButton";

export const TestScreenHeadingStyles = {
  fontSize: Dimensions.get("screen").width * 0.09,
  fontFamily: "WorkSans_500Medium",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: 84,
};

export function TripDetailsBody({ tripInfo }) {
  return (
    <View
      style={{
        marginTop: 24,
        width: Dimensions.get("screen").width * 0.9,
        height: Dimensions.get("screen").height * 0.525,
        borderRadius: Dimensions.get("screen").width * 0.06,
        backgroundColor: "white",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "70%",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TripDetailsLegStart
            legInfo={tripInfo["legs"][0]}
          ></TripDetailsLegStart>
          {tripInfo["legs"].slice(1).map((data, i) => (
            <TripDetailsLegMiddle legInfo={data}></TripDetailsLegMiddle>
          ))}
          <TripDetailsTripEnd tripInfo={tripInfo}></TripDetailsTripEnd>
        </ScrollView>
      </View>
      <TripDetailsInfoCorner></TripDetailsInfoCorner>
    </View>
  );
}

export function TripDetails({ currentUserReminders, setCurrentUserReminders }) {
  const navigation = useNavigation();
  const routes = useRoute();
  const tripId = routes.params.trip_id;
  const [modalVisible, setModalVisible] = useState("");

  const [remindWhen, setRemindWhen] = useState(() => {
    let result = currentUserReminders.filter((rem) => {
      return rem.trip_id === tripId;
    });

    if (result.length === 0) {
      return "wholetrip";
    } else {
      return result[0].remind_when;
    }
  });
  const [remindWhenDuration, setRemindWhenDuration] = useState(() => {
    let result = currentUserReminders.filter((rem) => {
      return rem.trip_id === tripId;
    });

    if (result.length === 0) {
      return "1";
    } else {
      return result[0].remind_when_duration;
    }
  });
  const [remindExists, setRemindExists] = useState(
    currentUserReminders.filter((rem) => {
      return rem.trip_id === tripId;
    }).length !== 0
  );

  const trip_info = TripStore.get(tripId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setRemindWhen={setRemindWhen}
        setRemindWhenDuration={setRemindWhenDuration}
        currReminders={currentUserReminders}
        setCurrReminders={setCurrentUserReminders}
        setRemindExists={setRemindExists}
        data={{
          tripId: tripId,
          numLegs: trip_info["legs"].length,
          remindWhen: remindWhen,
          remindWhenDuration: remindWhenDuration,
        }}
      />
      <ReminderFeedbackModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={{
          remindWhen: remindWhen,
          remindWhenDuration: remindWhenDuration,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          position: "absolute",
          alignItems: "center",
          marginTop: 106,
          paddingLeft: 36,
          paddingRight: 16,
        }}
      >
        <GoBackButton navigation={navigation} positionSet={"relative"} />
        <ExpandButton navigation={navigation} trip_id={tripId} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={ScreenHeadingStyles}>Trip Details</Text>
      </View>

      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          fontSize: 16,
          color: MAIN_PRIMARY_COLOUR,
          marginTop: 8,
        }}
      >
        View further details of your trip.
      </Text>

      <TripDetailsBody tripInfo={trip_info}></TripDetailsBody>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          top: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E36C2F",
            right: 10,
            height: 40,
            width: 80,
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
            MAP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: MAIN_PRIMARY_COLOUR,
            left: 10,
            height: 40,
            width: 160,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
          onPress={() => {
            if (remindExists) {
              setModalVisible("edit");
            } else {
              setModalVisible("set");
            }
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "WorkSans_700Bold",
            }}
          >
            {remindExists ? "EDIT REMINDER" : "SET REMINDER"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
