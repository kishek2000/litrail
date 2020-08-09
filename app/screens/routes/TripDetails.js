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
import { SetReminderModal } from "../../components/tripdetails/SetReminderModal";

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

export function TripDetails({ navigation }) {
  const routes = useRoute();
  const tripId = routes.params.trip_id;
  const [setRemindModalVisible, changeSetRemindModalVisible] = useState(false);

  let trip_info = TripFacade.get(tripId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SetReminderModal
        setRemindModalVisible={setRemindModalVisible}
        changeSetRemindModalVisible={changeSetRemindModalVisible}
        num_legs={trip_info.legs.length}
      ></SetReminderModal>
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
<<<<<<< HEAD
=======
          onPress={() => {
            changeSetRemindModalVisible(true);
          }}
>>>>>>> b2a5876909467bc70ad9d080f83428de27bd2d82
        >
          <Text
            style={{
              color: "white",
              fontFamily: "WorkSans_700Bold",
            }}
          >
            SET REMINDER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
