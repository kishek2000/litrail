import React, { useState } from "react";
import { Image, View, SafeAreaView, Text } from "react-native";
import {
  ScreenHeadingStyles,
  MAIN_PRIMARY_COLOUR,
  expandIcon,
} from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const TestScreenHeadingStyles = {
  fontSize: Dimensions.get("screen").width * 0.09,
  fontFamily: "WorkSans_500Medium",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: 84,
};

export function BackButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get("screen").width * 0.15,
        height: Dimensions.get("screen").height * 0.05,
        marginTop: Dimensions.get("screen").height * 0.122,
        marginRight: Dimensions.get("screen").width * 0.05,
        marginLeft: Dimensions.get("screen").width * 0.01,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'red'
      }}
      onPress={() => {
        navigation.navigate("TripTimes");
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          fontSize: 16,
          marginRight: 18,
        }}
      >
        BACK
      </Text>
    </TouchableOpacity>
  );
}

export function ExpandButton() {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get("screen").width * 0.18,
        marginTop: Dimensions.get("screen").height * 0.135,
        marginLeft: Dimensions.get("screen").width * 0.04,
        marginBottom: Dimensions.get("screen").height * 0.015,
        flex: 1,
        flexDirection: "row",
        backgroundColor: MAIN_PRIMARY_COLOUR,
        borderBottomLeftRadius: Dimensions.get("screen").width * 0.05,
        borderTopLeftRadius: Dimensions.get("screen").width * 0.05,
        borderTopRightRadius: Dimensions.get("screen").width * 0.05,
        borderBottomRightRadius: Dimensions.get("screen").width * 0.05,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={expandIcon}
        style={{
          width: Dimensions.get("screen").width * 0.04,
          height: Dimensions.get("screen").width * 0.04,
        }}
      />
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          color: "white",
          fontSize: Dimensions.get("screen").width * 0.03,
        }}
      >
        Expand
      </Text>
    </TouchableOpacity>
  );
}

export function TripDetailsInfoCorner() {
  const starting_in = 5;
  const last_updated = 56;
  return (
    <View
      style={{
        height: Dimensions.get("screen").height * 0.1,
        width: "30%",
        borderTopRightRadius: Dimensions.get("screen").width * 0.05,
        borderBottomLeftRadius: Dimensions.get("screen").width * 0.05,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: Dimensions.get("screen").height * 0.01,
          color: "white",
          fontFamily: "WorkSans_300Light",
          fontSize: Dimensions.get("screen").height * 0.015,
        }}
      >
        {" "}
        STARTING IN
      </Text>
      <Text
        style={{
          marginTop: Dimensions.get("screen").height * -0.01,
          color: "white",
          fontFamily: "WorkSans_700Bold",
          fontSize: Dimensions.get("screen").height * 0.03,
        }}
      >
        {starting_in} MIN
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "WorkSans_500Medium",
          fontSize: Dimensions.get("screen").height * 0.01,
        }}
      >
        Updated {last_updated} s ago
      </Text>
    </View>
  );
}

export function TripDetailsBody() {
  const start_in = 5;
  const last_updated = 56;
  return (
    <View
      style={{
        marginTop: Dimensions.get("screen").height * 0.015,
        height: Dimensions.get("screen").height * 0.6,
        width: Dimensions.get("screen").width * 0.9,
        borderRadius: Dimensions.get("screen").width * 0.06,
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "70%",
        }}
      >
        <Text>Testing</Text>
      </View>

      <TripDetailsInfoCorner></TripDetailsInfoCorner>
    </View>
  );
}

export function TripDetails({ navigation, route }) {
  console.log("TRIP DETAILS REACHED");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <BackButton navigation={navigation} />
        <Text style={TestScreenHeadingStyles}>Trip Details</Text>
        <ExpandButton></ExpandButton>
      </View>
      <View
        style={{
          marginTop: Dimensions.get("screen").height * 0.005,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_500Medium",
            fontSize: Dimensions.get("screen").width * 0.035,
          }}
        >
          View the seat availability and stops of your trip.
        </Text>
      </View>
      <TripDetailsBody></TripDetailsBody>
    </SafeAreaView>
  );
}
