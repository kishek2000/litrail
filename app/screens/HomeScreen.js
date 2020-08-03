import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  DefinedTrips,
  editIcon,
  addIcon,
} from "../constants";
import { SavedTripCard } from "../components/home/SavedTripCard";
import { EditTripButton } from "../components/home/EditTripButtons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { User } from "../classes/User";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen({ editMode, setEditMode }) {
  const navigation = useNavigation();
  const newUser = new User();
  const currentUserTrips = newUser.savedTrips;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#EEEEEE",
            alignItems: "center",
            position: "relative",
            paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 54,
              fontFamily: "WorkSans_500Medium",
              color: MAIN_PRIMARY_COLOUR,
              marginTop: 84,
              opacity: editMode ? 0.4 : 1,
            }}
          >
            Saved Trips
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: MAIN_PRIMARY_COLOUR,
              marginTop: 8,
              fontFamily: "WorkSans_400Regular",
              opacity: editMode ? 0.4 : 1,
            }}
          >
            View your saved trips and their details.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              marginLeft: 72,
              marginRight: 72,
              marginTop: 8,
              marginBottom: 16,
              width: "70%",
            }}
          >
            <EditTripButton
              subtext="Add Trip"
              icon={addIcon}
              navigation={navigation}
              disabledState={editMode}
            />
            <EditTripButton
              subtext="Edit Trip"
              icon={editIcon}
              navigation={navigation}
              setState={setEditMode}
              currentState={editMode}
            />
          </View>
          {editMode && (
            <Text
              style={{
                fontSize: 18,
                color: MAIN_PRIMARY_COLOUR,
                marginTop: 0,
                fontFamily: "WorkSans_400Regular",
              }}
            >
              Select trips to delete or drag to reorder.
            </Text>
          )}
          {DefinedTrips.map((tripDetails, index) => (
            <>
              <SavedTripCard
                startStop={tripDetails["startStop"]}
                endStop={tripDetails["endStop"]}
                nextTripTime={tripDetails["nextTripTime"]}
                duration={tripDetails["duration"]}
                cost={tripDetails["cost"]}
                legs={tripDetails["legs"]}
                navigation={navigation}
                keyValue={index}
                editMode={editMode}
              />
            </>
          ))}
          <View style={{ marginBottom: editMode ? 100 : 32 }} />
        </View>
      </ScrollView>
      {editMode && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
            width: "100%",
            height: 60,
            zIndex: 1,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 48,
          }}
        >
          <TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: "black" }}
          >
            <Text>Deletion</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
