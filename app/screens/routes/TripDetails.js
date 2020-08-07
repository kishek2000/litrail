import React, { useState } from "react";
import { Image, View, SafeAreaView, Text } from "react-native";
import {
  ScreenHeadingStyles,
  MAIN_PRIMARY_COLOUR,
  expandIcon,
  busIconIcon,
  walkIconIcon,
  seatAvailabilityIcon,
} from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

export function TripDetailsDotColumnNoEnd({ dots }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginRight: 8,
        marginLeft: 22,
        marginTop: 35,
        alignSelf: "center",
      }}
    >
      <AntDesign
        name="upcircle"
        size={16}
        color="#52ABF7"
        style={{ marginBottom: 2 }}
      />
      {[...Array(dots)].map((e, i) => (
        <FontAwesome
          name="circle"
          size={5}
          key={i}
          color="#E5D5D5"
          style={{
            marginTop: 3,
          }}
        />
      ))}
    </View>
  );
}


export function TripDetailsLegStart() {
  const station_name = "Bella Vista Station";
  const time_string = "12:05 PM";
  const route = "607X";
  const duration = "45 min";
  const seats_free = 25;
  return (
    <View style={{
      flex: 1,
      flexDirection: "row",
    }}>
      <View>
        <TripDetailsDotColumnNoEnd dots={12}></TripDetailsDotColumnNoEnd>
      </View>
      <View style={{
        flex: 1,
      }}>
        <Text style={{
          marginTop: 27,
          fontFamily: "WorkSans_700Bold",
          fontSize: 20,
          color: MAIN_PRIMARY_COLOUR,
        }}>{station_name}</Text>
        <Text style={{
          fontFamily: "WorkSans_700Bold",
          marginTop: -4,
        }}>{time_string}</Text>
        <View style={{
          flex: 1,
          flexDirection: "row",
        }}>
          <Image source={busIconIcon} style={{
            top: 17,
            left: 10,
            width: 35,
            height: 35
          }}/>
          <View style={{
            flex: 1,
            left: 20,
            top: 10,
          }}>
              <Text style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 16,
                color: MAIN_PRIMARY_COLOUR,
              }}>{route} for {duration}</Text>
              <View style={{
                flex: 1,
                flexDirection: "row",
              }}>
                <Image source={seatAvailabilityIcon} style={{
                  top: 5,
                  width: 20,
                  height: 15,
                }}/>
                <Text style={{
                  left: 5,
                  fontFamily: "WorkSans_700Bold",
                  color: MAIN_PRIMARY_COLOUR,
                }}>~ {seats_free} seats free</Text>
              </View>
          </View>
        </View>
          
      </View>
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
          flex: 1,
        }}
      >
        <TripDetailsLegStart></TripDetailsLegStart>
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


