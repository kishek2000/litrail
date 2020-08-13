import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripDetailsDotColumnNoEnd } from "./TripDetailsDotColumnNoEnd";
import {
  detailsTimeStyles,
  detailsFirstLastStationStyles,
  detailsRouteStyles,
  seatAvailabilityStyles,
} from "./TripDetailStyles";
import { DetailsTransportIcon } from "./DetailsTransportIcon";
import { SeatAvailabilityIcon } from "./SeatAvailabilityIcon";

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
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={detailsFirstLastStationStyles}>{station_name}</Text>
          <Text style={detailsTimeStyles}>{time_string}</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <DetailsTransportIcon img={legInfo["image"]} />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={detailsRouteStyles}>Walk for {distance}</Text>
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
          height: 125,
        }}
      >
        <View>
          <TripDetailsDotColumnNoEnd dots={12} />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={detailsFirstLastStationStyles}>{station_name}</Text>
          <Text style={detailsTimeStyles}>{time_string}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <DetailsTransportIcon img={legInfo["image"]} />
            <View style={{ justifyContent: "center", marginTop: -4 }}>
              <Text style={detailsRouteStyles}>
                {route} for {duration}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SeatAvailabilityIcon />
                <Text style={seatAvailabilityStyles}>
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
