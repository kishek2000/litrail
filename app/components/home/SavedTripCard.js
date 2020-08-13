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
        elevation: 2,
        backgroundColor: "white",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 180,
        width: "100%",
        marginTop: 16,
        padding: selected ? 20 : 24,
        borderRadius: 24,
        borderColor: selected ? MAIN_PRIMARY_COLOUR : "none",
        borderWidth: selected ? 4 : 0,
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
      <View style={{ flexDirection: "row" }}>
        <TripCardDotsColumn dots={10} />
        <TripCardStops
          startStop={data["startStop"]}
          endStop={data["endStop"]}
          legs={data["legs"]}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "right",
        }}
      >
        {history ? (
          <HistoryElement
            tripStart={data["tripStart"]}
            tripEnd={data["tripEnd"]}
          />
        ) : (
          <IncomingTripElement nextTripTime={data["nextTripTime"]} />
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
          <View style={{ marginRight: 12 }} />
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
          fontSize: 24,
          textAlign: "right",
          marginTop: -8,
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
          fontSize: 24,
          textAlign: "right",
          marginTop: -8,
          marginRight: -1,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {tripEnd}
      </Text>
    </>
  );
}

function IncomingTripElement({ nextTripTime }) {
  return (
    <>
      <Text
        style={{
          fontFamily: "WorkSans_500Medium",
          fontSize: 8,
          textAlign: "right",
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        NEXT TRIP IN
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          fontSize: 32,
          textAlign: "right",
          marginTop: -10,
          marginRight: -1,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        {nextTripTime}
      </Text>
    </>
  );
}
