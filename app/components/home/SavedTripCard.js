import React, { useState } from "react";
import { Text, View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TripCardDurationOrCost } from "./TripCardDurationOrCost";
import { ViewTimesButton } from "./ViewTimesButton";
import { TripCardDotsColumn } from "./TripCardDotsColumn";
import { TripCardStops } from "./TripCardStops";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SavedTripCard({
  navigation,
  editMode,
  navigateTo,
  reminder,
  history,
  data,
  deleteTrip,
  setDeleteTrip,
}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: selected ? 20 : 24,
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
        if (editMode) {
          !selected
            ? setDeleteTrip(deleteTrip.concat(data["id"]))
            : setDeleteTrip(
                deleteTrip.filter((trips) => {
                  return trips !== data["id"];
                })
              );
          setSelected(!selected);
        }
      }}
    >
      <TripCardDotsColumn dots={10} />
      <TripCardStops
        startStop={data["startStop"]}
        endStop={data["endStop"]}
        legs={data["legs"]}
      />
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
          <HistoryElement
            tripStart={data["tripStart"]}
            tripEnd={data["tripEnd"]}
          />
        ) : (
          <IncomingTipElement nextTripTime={data["nextTripTime"]} />
        )}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: 8,
          }}
        >
          <TripCardDurationOrCost
            subheading="DURATION"
            subtext={data["duration"]}
          />
          <View style={{ marginRight: 10 }} />
          <TripCardDurationOrCost subheading="COST" subtext={data["cost"]} />
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
