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
}

const expandedTimeStyles = {
  fontFamily: "WorkSans_700Bold",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
  // backgroundColor: "aqua",
}

const expandedRouteStyles = {
  fontFamily: "WorkSans_400Regular",
  color: MAIN_PRIMARY_COLOUR,
  fontSize: 14,
  marginLeft: 10,
  // backgroundColor: "yellow",
  flex: 1,
}

export function TripDetailsUnexpandedStart ({ legInfo }) {
  return <View style={{
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "yellow",
  }}>
    <TripDetailsDotColumnNoEnd dots={5} style={{
    }}></TripDetailsDotColumnNoEnd>
    <View style={{
      flex: 1,
    }}>
        <Text style={expandedStationStyles}>Bella Vista Station, Mawson Ave, Stand A</Text>
      <View style={{
        flexDirection: "row",
        // backgroundColor: "pink",
        flex: 1,
      }}>
        <Text style={expandedTimeStyles}>12:05 PM</Text>
        <Text style={expandedRouteStyles}>Bus route 607X</Text>
      </View>
    </View>
  </View>
}

export function TripDetailsUnexpandedMiddle({ legInfo }) {
  return <View style={{
    flex: 1,
    flexDirection: "row",
  }}>
    <TripDetailsDotColumnNoEndSolid dots={5} style={{
    }}></TripDetailsDotColumnNoEndSolid>
    <View style={{
      flex: 1,
    }}>
      <Text style={expandedStationStyles}>QVB, York St, Stand E</Text>
      <View style={{
        flexDirection: "row",
        flex: 1,
      }}>
        <Text style={expandedTimeStyles}>12:50 PM</Text>
        <Text style={expandedRouteStyles}>Walk</Text>
      </View>
    </View>
  </View>
}

export function TripDetailsUnexpandedEnd({ tripInfo }) {
  return (
    <View style={{
        flexDirection: "row",
        // backgroundColor: "yellow",
        height: 40,
        }}>
        <View style={{
            marginRight: 8,
            marginLeft: 22,
            top: 2,
        }}>
            <AntDesign
            name="downcircle"
            size={16}
            color="#E36C2F"
            style={{ marginBottom: 2 }} />
        </View>
        <View style={{}}>
            <Text style={expandedStationStyles}>UNSW</Text>
            <Text style={expandedTimeStyles}>1:25 PM</Text>
        </View>
    </View>
  );
}



export function TripDetailsExpandedBody({ trip_id }) {
  const tripInfo = TripFacade.get(trip_id);
  console.log(tripInfo);
  return (
    <View style={{
      marginTop: 24,
      height: "70%",
      borderRadius: 30,
      backgroundColor: "white",
      flexDirection: "row",
      marginLeft: 20,
      marginRight: 20,
    }}>
      <View style={{
        width: "80%",
      }}>
        <ScrollView showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
          marginBottom: 20,
          // backgroundColor: "pink"
        }}>
          <TripDetailsUnexpandedStart></TripDetailsUnexpandedStart>
          <TripDetailsUnexpandedMiddle></TripDetailsUnexpandedMiddle>
          <TripDetailsUnexpandedMiddle></TripDetailsUnexpandedMiddle>
          <TripDetailsUnexpandedMiddle></TripDetailsUnexpandedMiddle>
          <TripDetailsUnexpandedEnd></TripDetailsUnexpandedEnd>
        </ScrollView>
      </View>

    </View>
  )
}


export function TripDetailsExpanded({ navigation }) {
  const route = useRoute();
  const trip_id = route.params.trip_id;
  console.log("inside expanded: trip_id: " + trip_id);
  const [expanded, setExpanded] = useState(false); // Controls the hint text

  return <SafeAreaView>
    <View style={{
      flexDirection: "row",
      marginTop: "20%",
      justifyContent: "center"
    }}>
      <View style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <TouchableOpacity 
        style={{
          width: 60,
          height: 40,
          top: 2,
          // backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={()=> {
          navigation.navigate("TripDetails", {"trip_id" : trip_id})
        }
        }>
          <Text style={{
            fontFamily: "WorkSans_400Regular",
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
          }}>BACK</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{
        fontSize: 40,
        fontFamily: "WorkSans_500Medium",
        color: MAIN_PRIMARY_COLOUR,
        flex: 6
      }}>Trip Stops</Text>
    </View>
    <View style={{
      top: 5,
      alignItems: "center"
    }}>
      <Text style={{
        fontFamily: "WorkSans_400Regular",
        color: MAIN_PRIMARY_COLOUR,
      }}>View all stops involved in your trip.</Text>
    </View>
    <View>
      {
        (expanded == false) ? 
          <Text style={hintTextStyles}>Click on an arrow to expand the stops!</Text> : 
          <Text style={hintTextStyles}>Scroll in each expansion to view all the stops!</Text>
      }
      
    </View>
    <TripDetailsExpandedBody trip_id={trip_id}></TripDetailsExpandedBody>
    

  </SafeAreaView>;
}
