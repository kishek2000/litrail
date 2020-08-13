import React from "react";
import { Image, View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, seatAvailabilityIcon } from "../../constants";
import { TripDetailsDotColumnNoEnd } from "./TripDetailsDotColumnNoEnd";

export function TripDetailsLegStart({ legInfo }) {
  const mode = legInfo["mode"];
  const time_string = legInfo["startTime"];
  const station_name = legInfo["startStop"];
  if (mode == "walk") {
    const distance = legInfo["distance"];
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <TripDetailsDotColumnNoEnd dots={12}></TripDetailsDotColumnNoEnd>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "WorkSans_700Bold",
              fontSize: 16,
              color: MAIN_PRIMARY_COLOUR,
              top: -6,
            }}
          >
            {station_name}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans_500Medium",
              marginTop: -4,
              fontSize: 10,
            }}
          >
            {time_string}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={legInfo["image"]}
              style={{
                width: 32,
                height: 32,
                resizeMode: "contain",
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 16,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                Walk for {distance}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    const route = legInfo["route"];
    const duration = legInfo["duration"];
    const seats_free = legInfo["seatAvailability"];
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <TripDetailsDotColumnNoEnd dots={12}></TripDetailsDotColumnNoEnd>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              top: -6,
              fontFamily: "WorkSans_800ExtraBold",
              fontSize: 16,
              color: MAIN_PRIMARY_COLOUR,
            }}
          >
            {station_name}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans_500Medium",
              marginTop: -4,
              fontSize: 12,
            }}
          >
            {time_string}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Image
              source={legInfo["image"]}
              style={{
                width: 32,
                height: 32,
                marginRight: 8,
                resizeMode: "contain",
              }}
            />
            <View style={{ justifyContent: "center", marginTop: -4 }}>
              <Text
                style={{
                  fontFamily: "WorkSans_500Medium",
                  fontSize: 12,
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {route} for {duration}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={seatAvailabilityIcon}
                  style={{
                    width: 20,
                    height: 15,
                  }}
                />
                <Text
                  style={{
                    left: 5,
                    fontFamily: "WorkSans_700Bold",
                    color: MAIN_PRIMARY_COLOUR,
                    marginTop: -3,
                  }}
                >
                  ~ {seats_free} seats free
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
