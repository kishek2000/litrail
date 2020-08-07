import React, { useState } from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripCardDurationOrCost } from "./TripCardDurationOrCost";
import { ViewTimesButton } from "./ViewTimesButton";
import { TripCardDotsColumn } from "./TripCardDotsColumn";
import { TripCardStops } from "./TripCardStops";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SavedTripCard({
  startStop,
  endStop,
  nextTripTime,
  duration,
  cost,
  legs,
  navigation,
  editMode,
  keyValue,
  navigateTo,
  reminder,
  history,
  tripStart,
  tripEnd,
}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: selected ? 20 : 24,
        // width: "100%",
        alignSelf: "center",
        height: 175,
        borderRadius: 24,
        borderColor: selected ? MAIN_PRIMARY_COLOUR : "none",
        borderWidth: selected ? 4 : 0,
        marginTop: 16,
        flexDirection: "row",
        elevation: 2,
        alignItems: "center",
      }}
      disabled={!editMode}
      onPress={() => {
        setSelected(!selected);
      }}
      key={keyValue}
    >
      <TripCardDotsColumn dots={10} />
      <TripCardStops startStop={startStop} endStop={endStop} legs={legs} />
      <View style={{ marginRight: 16 }} />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "right",
          width: 110,
        }}
      >
        {history ? (
          <HistoryElement tripStart={tripStart} tripEnd={tripEnd} />
        ) : (
          <IncomingTipElement nextTripTime={nextTripTime} />
        )}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: 8,
          }}
        >
          <TripCardDurationOrCost subheading="DURATION" subtext={duration} />
          <View style={{ marginRight: 10 }} />
          <TripCardDurationOrCost subheading="COST" subtext={cost} />
        </View>
        {!history && (
          <ViewTimesButton
            navigation={navigation}
            editMode={editMode}
            navigateTo={navigateTo}
            reminder={reminder}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

function HistoryElement({ tripStart, tripEnd }) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: 10,
          textAlign: "right",
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        FROM
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 28,
          textAlign: "right",
          marginTop: -12,
          marginRight: -1,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {tripStart}
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: 10,
          textAlign: "right",
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        TO
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 28,
          textAlign: "right",
          marginTop: -12,
          marginRight: -1,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {tripEnd}
      </Text>
    </>
  );
}

function IncomingTipElement({ nextTripTime }) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: 10,
          textAlign: "right",
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        NEXT TRIP IN
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 36,
          textAlign: "right",
          marginTop: -12,
          marginRight: -1,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {nextTripTime}
      </Text>
    </>
  );
}
