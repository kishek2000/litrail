import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation, useRoute } from "@react-navigation/native";
import { TripFacade } from "../../classes/User";
import { TripDetailsDotColumnNoEnd } from "../../components/tripdetails/TripDetailsDotColumnNoEnd";
import { TripDetailsDotColumnNoEndSolid } from "../../components/tripdetails/TripDetailsDotColumnNoEndSolid";
import { AntDesign } from "@expo/vector-icons";

const hintTextStyles = {
  fontFamily: "WorkSans_700Bold",
  marginLeft: 20,
  marginTop: 16,
};

const expandedStationStyles = {
  fontFamily: "WorkSans_700Bold",
  fontSize: 16,
  color: MAIN_PRIMARY_COLOUR,
  marginTop: -2,
  flexWrap: "wrap",
  flex: 1,
  // backgroundColor: "green",
};

const expandedTimeStyles = {
  fontFamily: "WorkSans_700Bold",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
  // backgroundColor: "aqua",
};

const expandedRouteStyles = {
  fontFamily: "WorkSans_400Regular",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
  marginLeft: 10,
  // backgroundColor: "yellow",
  flex: 1,
};

let getRouteString = (legInfo) => {
  const mode = legInfo["mode"];
  let route_string;
  if (mode == "walk") {
    route_string = "Walk";
  } else {
    let route_name = legInfo["route"];
    let route_string_prefix;
    if (mode == "bus") {
      route_string_prefix = "Bus Route ";
    } else if (mode == "lightrail") {
      route_string_prefix = "Light Rail ";
    } else if (mode == "train") {
      route_string_prefix = "Train ";
    } else if (mode == "metro") {
      route_string_prefix = "Metro";
    } else {
      route_string_prefix = "";
    }
    route_string = route_string_prefix + route_name;
  }
  return route_string;
};

export function TripDetailsUnexpandedStart({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const route_string = getRouteString(legInfo);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "yellow",
      }}
    >
      <TripDetailsDotColumnNoEnd
        dots={5}
        style={{}}
      ></TripDetailsDotColumnNoEnd>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={expandedStationStyles}>{station_name}</Text>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "pink",
            flex: 1,
          }}
        >
          <Text style={expandedTimeStyles}>{time_string}</Text>
          <Text style={expandedRouteStyles}>{route_string}</Text>
        </View>
      </View>
    </View>
  );
}

export function TripDetailsUnexpandedMiddle({ legInfo }) {
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  const route_string = getRouteString(legInfo);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <TripDetailsDotColumnNoEndSolid
        dots={5}
        style={{}}
      ></TripDetailsDotColumnNoEndSolid>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={expandedStationStyles}>{station_name}</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={expandedTimeStyles}>{time_string}</Text>
          <Text style={expandedRouteStyles}>{route_string}</Text>
        </View>
      </View>
    </View>
  );
}

export function TripDetailsUnexpandedEnd({ tripInfo }) {
  const time_string = tripInfo["endTime"];
  const station_name = tripInfo["endStop"];
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "yellow",
        height: 40,
      }}
    >
      <View
        style={{
          marginRight: 8,
          marginLeft: 22,
          top: 2,
        }}
      >
        <AntDesign
          name="downcircle"
          size={16}
          color="#E36C2F"
          style={{ marginBottom: 2 }}
        />
      </View>
      <View style={{}}>
        <Text style={expandedStationStyles}>{station_name}</Text>
        <Text style={expandedTimeStyles}>{time_string}</Text>
      </View>
    </View>
  );
}

export function TripDetailsExpandedBody({ trip_id }) {
  const tripInfo = TripFacade.get(trip_id);
  console.log(tripInfo);
  return (
    <View
      style={{
        marginTop: 24,
        height: "70%",
        borderRadius: 30,
        backgroundColor: "white",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <View
        style={{
          width: "80%",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 20,
            marginBottom: 20,
            // backgroundColor: "pink"
          }}
        >
          <TripDetailsUnexpandedStart
            legInfo={tripInfo["legs"][0]}
          ></TripDetailsUnexpandedStart>
          {tripInfo["legs"].slice(1).map((data, i) => (
            <TripDetailsUnexpandedMiddle
              legInfo={data}
            ></TripDetailsUnexpandedMiddle>
          ))}
          <TripDetailsUnexpandedEnd
            tripInfo={tripInfo}
          ></TripDetailsUnexpandedEnd>
        </ScrollView>
      </View>
    </View>
  );
}

export function TripDetailsExpanded({ navigation }) {
  const route = useRoute();
  const trip_id = route.params.trip_id;
  console.log("inside expanded: trip_id: " + trip_id);
  const [expanded, setExpanded] = useState(false); // Controls the hint text

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 40,
              top: 2,
              // backgroundColor: "pink",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("TripDetails", { trip_id: trip_id });
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 18,
                color: MAIN_PRIMARY_COLOUR,
              }}
            >
              BACK
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 40,
            fontFamily: "WorkSans_500Medium",
            color: MAIN_PRIMARY_COLOUR,
            flex: 6,
          }}
        >
          Trip Stops
        </Text>
      </View>
      <View
        style={{
          top: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_400Regular",
            color: MAIN_PRIMARY_COLOUR,
          }}
        >
          View all stops involved in your trip.
        </Text>
      </View>
      <View>
        {expanded == false ? (
          <Text style={hintTextStyles}>
            Click on an arrow to expand the stops!
          </Text>
        ) : (
          <Text style={hintTextStyles}>
            Scroll in each expansion to view all the stops!
          </Text>
        )}
      </View>
      <TripDetailsExpandedBody trip_id={trip_id}></TripDetailsExpandedBody>
    </SafeAreaView>
  );
}
