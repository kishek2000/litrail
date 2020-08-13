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

export function HomeScreen({
  editMode,
  setEditMode,
  currentUserTrips,
  setCurrentUserTrips,
}) {
  const navigation = useNavigation();
  return (
    <HomeContainer
      editMode={editMode}
      setEditMode={setEditMode}
      allUserTrips={currentUserTrips}
      setCurrentUserTrips={setCurrentUserTrips}
      navigation={navigation}
    />
  );
}

export function HomeContainer({
  editMode,
  setEditMode,
  allUserTrips,
  setCurrentUserTrips,
  navigation,
}) {
  const [deleteTrip, setDeleteTrip] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            position: "relative",
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontSize: 42,
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
              fontSize: 16,
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
              marginTop: 16,
              marginBottom: 24,
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
          <RenderTripCards
            allUserTrips={allUserTrips}
            navigation={navigation}
            editMode={editMode}
            deleteTrip={deleteTrip}
            setDeleteTrip={setDeleteTrip}
          />
          <View style={{ marginBottom: editMode ? 100 : 32 }} />
        </View>
      </ScrollView>
      {editMode && (
        <DeleteTripsButtons
          deleteTrip={deleteTrip}
          allUserTrips={allUserTrips}
          setCurrentUserTrips={setCurrentUserTrips}
          setEditMode={setEditMode}
        />
      )}
    </SafeAreaView>
  );
}

function RenderTripCards({
  navigation,
  editMode,
  deleteTrip,
  setDeleteTrip,
  allUserTrips,
}) {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      {allUserTrips.length > 0 ? (
        allUserTrips.map((trip, index) => (
          <SavedTripCard
            data={{
              startStop: trip["startStop"],
              endStop: trip["endStop"],
              nextTripTime: trip["nextTripTime"],
              duration: trip["duration"],
              cost: trip["cost"],
              legs: trip["legs"],
              id: trip["id"],
            }}
            navigation={navigation}
            navigateTo={{
              route: "ROUTES",
              arg: {
                screen: "TripTimes",
                params: {
                  tripId: trip["id"],
                },
              },
            }}
            editMode={editMode}
            deleteTrip={deleteTrip}
            setDeleteTrip={setDeleteTrip}
          />
        ))
      ) : (
        <Text
          style={{
            fontSize: 18,
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
    </View>
  );
}

function DeleteTripsButtons({
  deleteTrip,
  allUserTrips,
  setCurrentUserTrips,
  setEditMode,
}) {
  return (
    <View
      style={{
        bottom: 0,
        width: "100%",
        height: 60,
        position: "absolute",
        alignSelf: "center",
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
          backgroundColor: "#C90808",
          elevation: 2,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          deleteTrip.map((deletion) => {
            const updatedTrips = allUserTrips.filter((trip) => {
              return trip.id !== deletion;
            });
            setCurrentUserTrips(updatedTrips);
            if (Object.keys(updatedTrips).length === 0) {
              setEditMode(false);
            }
          });
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
  );
}
