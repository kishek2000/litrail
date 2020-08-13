import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScreenHeadingStyles, MAIN_PRIMARY_COLOUR } from "../../constants";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { TripCreation } from "../../components/routes/TripCreation";
import { TripTimes } from "./TripTimes";
import { TripDetails } from "./TripDetails";
import { TripDetailsExpanded } from "./TripDetailsExpanded";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export function RoutesScreen({
  route,
  setCurrentUserTrips,
  currentUserTrips,
  currentUser,
  currentUserReminders,
  setCurrentUserReminders,
}) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RoutesHome" component={RoutesHomeScreen} />
      <Stack.Screen
        name="TripTimes"
        children={() => (
          <TripTimes
            currentUserTrips={currentUserTrips}
            setCurrentUserTrips={setCurrentUserTrips}
            currentUser={currentUser}
          />
        )}
      />
      <Stack.Screen
        name="TripDetails"
        children={() => (
          <TripDetails
            currentUserReminders={currentUserReminders}
            setCurrentUserReminders={setCurrentUserReminders}
          />
        )}
      />
      <Stack.Screen
        name="TripDetailsExpanded"
        component={TripDetailsExpanded}
      />
    </Stack.Navigator>
  );
}

export function RoutesHomeScreen({ navigation }) {
  const [newTripMode, setNewTripMode] = useState("location");
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            position: "relative",
          }}
        >
          <Text style={ScreenHeadingStyles}>New Trip</Text>
          <Text
            style={{
              fontSize: 16,
              color: MAIN_PRIMARY_COLOUR,
              marginTop: 8,
              fontFamily: "WorkSans_400Regular",
            }}
          >
            Create a new trip and view its times.
          </Text>
          <TripCreation
            newTripMode={newTripMode}
            navigation={navigation}
            setNewTripMode={setNewTripMode}
          />
          <View style={{ marginBottom: 250 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
