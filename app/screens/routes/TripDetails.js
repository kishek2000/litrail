import React, { useState } from "react";
import { Image, View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR, expandIcon } from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const TestScreenHeadingStyles = {
  fontSize: Dimensions.get("screen").width * 0.09,
  fontFamily: "WorkSans_500Medium",
  color: MAIN_PRIMARY_COLOUR,
  marginTop: 84,
};


export function BackButton() {
  return (
    <TouchableOpacity style={{
      width: Dimensions.get("screen").width * 0.15,
      height: Dimensions.get("screen").height * 0.05,
      marginTop: Dimensions.get("screen").height * 0.122,
      marginRight: Dimensions.get("screen").width * 0.05,
      marginLeft: Dimensions.get("screen").width * 0.01,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: 'red'
    }}>
      <Text style={{
        fontFamily: "WorkSans_700Bold",
        color: MAIN_PRIMARY_COLOUR,
        fontSize: Dimensions.get("screen").width * 0.04
      }}>&lt; BACK</Text>
    </TouchableOpacity>
  )
}

export function ExpandButton() {
  return (
    <TouchableOpacity style={{
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
      alignItems: "center"
    }}>
      <Image 
        source={expandIcon}
        style={{
          width: Dimensions.get("screen").width * 0.04,
          height: Dimensions.get("screen").width * 0.04,
        }}
      />
      <Text style={{
        fontFamily: "WorkSans_500Medium",
        color: "white",
        fontSize: Dimensions.get("screen").width * 0.03,

      }}>Expand</Text>
    </TouchableOpacity>
  )
}

export function TripDetails({ navigation, route }) {
  console.log("TRIP DETAILS REACHED");
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    }}>
        <View style={{
          flexDirection: "row"
        }}>
          <BackButton></BackButton>
          <Text style={TestScreenHeadingStyles}>Trip Details</Text>
          <ExpandButton></ExpandButton>
        </View>
       
    </SafeAreaView>
  );
}
