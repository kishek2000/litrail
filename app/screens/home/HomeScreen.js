import React, { useState, useCallback } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  DefinedTrips,
  editIcon,
  addIcon,
} from "../../constants";
import { SavedTripCard } from "../../components/home/SavedTripCard";
import { EditTripButton } from "../../components/home/EditTripButtons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen({ editMode, setEditMode, currentUserTrips }) {
  const navigation = useNavigation();
  return (
    <HomeContainer
      editMode={editMode}
      setEditMode={setEditMode}
      allUserTrips={currentUserTrips}
      navigation={navigation}
    />
  );
}

export function HomeContainer({
  editMode,
  setEditMode,
  allUserTrips,
  navigation,
}) {
  console.log("trips", allUserTrips);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#EEEEEE",
            alignItems: "center",
            position: "relative",
            paddingHorizontal: 16,
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
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 16,
            }}
          >
            <EditTripButton
              subtext="Add Trip"
              icon={addIcon}
              navigation={navigation}
              disabledState={editMode}
              noEdit={allUserTrips.length}
            />
            {allUserTrips.length > 0 && (
              <>
                <View style={{ marginRight: 8 }} />
                <EditTripButton
                  subtext="Edit Trip"
                  icon={editIcon}
                  navigation={navigation}
                  setState={setEditMode}
                  currentState={editMode}
                />
              </>
            )}
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
          {allUserTrips.length > 0 ? (
            allUserTrips.map((tripDetails, index) => (
              <>
                <SavedTripCard
                  startStop={tripDetails["startStop"]}
                  endStop={tripDetails["endStop"]}
                  nextTripTime={tripDetails["nextTripTime"]}
                  duration={tripDetails["duration"]}
                  cost={tripDetails["cost"]}
                  legs={tripDetails["legs"]}
                  navigation={navigation}
                  navigateTo={{
                    route: "ROUTES",
                    arg: {
                      screen: "TripTimes",
                      params: {
                        tripId: tripDetails["id"],
                      },
                    },
                  }}
                  keyValue={index}
                  editMode={editMode}
                />
              </>
            ))
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: MAIN_PRIMARY_COLOUR,
                marginTop: 8,
                textAlign: "center",
                paddingHorizontal: 24,
                fontFamily: "WorkSans_400Regular",
                opacity: editMode ? 0.4 : 1,
              }}
            >
              You currently have no saved trips. Add a trip to begin!
            </Text>
          )}
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
            justifyContent: "center",
            paddingHorizontal: 48,
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              // height: 40,
              backgroundColor: MAIN_PRIMARY_COLOUR,
              elevation: 2,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "WorkSans_700Bold",
                fontSize: 12,
              }}
            >
              CLEAR
            </Text>
          </TouchableOpacity>
          <View style={{ marginRight: 8 }} />
          <TouchableOpacity
            style={{
              width: 100,
              // height: 40,
              backgroundColor: "#C90808",
              elevation: 2,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "white",
                fontFamily: "WorkSans_700Bold",
                fontSize: 12,
              }}
            >
              DELETE
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
