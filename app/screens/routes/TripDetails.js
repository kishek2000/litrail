import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { TripFacade } from "../../classes/User";
import { TripDetailsInfoCorner } from "../../components/tripdetails/TripDetailsInfoCorner";
import { BackButton } from "../../components/tripdetails/BackButton";
import { ExpandButton } from "../../components/tripdetails/ExpandButton";
import { TripDetailsLegStart } from "../../components/tripdetails/TripDetailsLegStart";
import { TripDetailsLegMiddle } from "../../components/tripdetails/TripDetailsLegMiddle";
import { TripDetailsTripEnd } from "../../components/tripdetails/TripDetailsTripEnd";
import { ReminderModal } from "../../components/tripdetails/ReminderModal";
import { ReminderFeedbackModal } from "../../components/tripdetails/ReminderFeedbackModal";
import { EditReminderModal } from "../../components/tripdetails/EditReminderModal";

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
        height: Dimensions.get("screen").height * 0.58,
        width: Dimensions.get("screen").width * 0.9,
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
  const [remindModalVisible, setRemindModalVisible] = useState(false);
  const [remindFeedbackModalVisible, setRemindFeedbackModalVisible] = useState(
    false
  );
  const [editRemindModalVisible, setEditRemindModalVisible] = useState(false);

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

  const trip_info = TripFacade.get(tripId);

  console.log(remindExists);
  console.log(remindWhen);
  console.log(remindWhenDuration);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ReminderModal
        remindModalVisible={remindModalVisible}
        setRemindModalVisible={setRemindModalVisible}
        remindWhen={remindWhen}
        setRemindWhen={setRemindWhen}
        setRemindWhenDuration={setRemindWhenDuration}
        remindWhenDuration={remindWhenDuration}
        numLegs={trip_info.legs.length}
        currReminders={currentUserReminders}
        setCurrReminders={setCurrentUserReminders}
        tripId={tripId}
        setRemindFeedbackModalVisible={setRemindFeedbackModalVisible}
        remindExists={remindExists}
        setRemindExists={setRemindExists}
      />
      <ReminderFeedbackModal
        remindFeedbackModalVisible={remindFeedbackModalVisible}
        setRemindFeedbackModalVisible={setRemindFeedbackModalVisible}
        remindWhenDuration={remindWhenDuration}
        remindWhen={remindWhen}
      />
      {editRemindModalVisible && (
        <EditReminderModal
          editRemindModalVisible={editRemindModalVisible}
          setEditRemindModalVisible={setEditRemindModalVisible}
          remindWhen={remindWhen}
          setRemindWhen={setRemindWhen}
          setRemindWhenDuration={setRemindWhenDuration}
          remindWhenDuration={remindWhenDuration}
          numLegs={trip_info.legs.length}
          currReminders={currentUserReminders}
          setCurrReminders={setCurrentUserReminders}
          tripId={tripId}
          setRemindFeedbackModalVisible={setRemindFeedbackModalVisible}
          setRemindExists={setRemindExists}
        />
      )}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <BackButton navigation={navigation} />
        <Text style={TestScreenHeadingStyles}>Trip Details</Text>
        <ExpandButton navigation={navigation} trip_id={tripId}></ExpandButton>
      </View>

      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: Dimensions.get("screen").width * 0.035,
          marginTop: 24,
        }}
      >
        View the seat availability and stops of your trip.
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
              setEditRemindModalVisible(true);
            } else {
              setRemindModalVisible(true);
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
