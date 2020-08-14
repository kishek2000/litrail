import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TripStore } from "../../classes/User";
import { TripDetailsUnexpandedStart } from "./TripDetailsUnexpandedStart";
import { TripDetailsUnexpandedMiddle } from "./TripDetailsUnexpandedMiddle";
import { TripDetailsUnexpandedEnd } from "./TripDetailsUnexpandedEnd";

export function TripDetailsExpandedBody({ trip_id }) {
  const tripInfo = TripStore.get(trip_id);
  const [legExpanded, setLegExpanded] = useState("start");

  return (
    <View
      style={{
        marginTop: 24,
        height: "68%",
        borderRadius: 30,
        backgroundColor: "white",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <TripDetailsUnexpandedStart
            legInfo={tripInfo["legs"][0]}
            legExpanded={legExpanded}
            setLegExpanded={setLegExpanded}
          />
          {tripInfo["legs"].slice(1).map((data, i) => (
            <TripDetailsUnexpandedMiddle
              legInfo={data}
              keyValue={i}
              legExpanded={legExpanded}
              setLegExpanded={setLegExpanded}
            />
          ))}
          <TripDetailsUnexpandedEnd tripInfo={tripInfo} />
        </ScrollView>
      </View>
    </View>
  );
}
