import React from "react";
import { Image } from "react-native";
import { seatAvailabilityIcon } from "../../constants";

export function SeatAvailabilityIcon() {
  return (
    <Image
      source={seatAvailabilityIcon}
      style={{
        width: 20,
        height: 15,
      }}
    />
  );
}
