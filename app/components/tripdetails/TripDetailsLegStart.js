import React from "react";
import { Image, View, Text } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,


  seatAvailabilityIcon
} from "../../constants";
import { TripDetailsDotColumnNoEnd } from "./TripDetailsDotColumnNoEnd";



export function TripDetailsLegStart({ legInfo }) {
  const mode = legInfo["mode"];
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  if (mode == "walk") {
    const distance = legInfo["distance"];
    return (
      <View style={{
        flexDirection: "row",
        height: 125
      }}>
        <View>
          <TripDetailsDotColumnNoEnd dots={12}></TripDetailsDotColumnNoEnd>
        </View>
        <View>
          <Text style={{
           
            fontFamily: "WorkSans_700Bold",
            fontSize: 20,
            color: MAIN_PRIMARY_COLOUR,
            top: -6,
          }}>{station_name}</Text>
          <Text style={{
            fontFamily: "WorkSans_700Bold",
            marginTop: -4,
          }}>{time_string}</Text>
          <View style={{
            flex: 1,
            flexDirection: "row",
          }}>
            <Image source={legInfo["image"]} style={{
              top: 17,
              left: 10,
              width: 35,
              height: 35,
              resizeMode: "contain"
            }} />
            <View style={{
              flex: 1,
              left: 20,
              top: 10,
            }}>
              <Text style={{
                top: 10,
                fontFamily: "WorkSans_500Medium",
                fontSize: 16,
                color: MAIN_PRIMARY_COLOUR,
              }}>Walk for {distance}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  else {
    const route = legInfo["route"];
    const duration = legInfo["duration"];
    const seats_free = legInfo["seatAvailability"];
    return (
      <View style={{
        flexDirection: "row",
        height: 125,
        // backgroundColor: "pink"
      }}>
        <View>
          <TripDetailsDotColumnNoEnd dots={12}></TripDetailsDotColumnNoEnd>
        </View>
        <View style= {{
            // backgroundColor: "aqua",
            flex: 1,
        }}>
          <Text style={{
            // backgroundColor: "green",
            top: -6,
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
            <Image source={legInfo["image"]} style={{
              top: 17,
              left: 10,
              width: 35,
              height: 35,
              resizeMode: "contain"
            }} />
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
                }} />
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
}
