import React, { useState, useCallback } from "react";
import { Image, Text } from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  homeTab,
  routesTab,
  schedulesTab,
  balanceTab,
  homeTabFocused,
  routesTabFocused,
  schedulesTabFocused,
  balanceTabFocused,
} from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/home/HomeScreen";
import { BalanceScreen } from "../screens/balance/BalanceScreen";
import { ScheduleScreen } from "../screens/schedules/SchedulesScreen";
import { RoutesScreen } from "../screens/routes/RoutesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Logo } from "../components/Logo";
import { User } from "../classes/User";
export const Tab = createBottomTabNavigator();

export function CreateNavigation() {
  const [editMode, setEditMode] = useState(false);
  const newUser = new User();
  const [currentUserTrips, setCurrentUserTrips] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 70,
            display: editMode ? "none" : null,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text
                style={{
                  fontSize: 12,
                  paddingBottom: 6,
                  fontFamily: "WorkSans_700Bold",
                  color: MAIN_PRIMARY_COLOUR,
                }}
              >
                {route.name}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 12,
                  paddingBottom: 6,
                  fontFamily: "WorkSans_500Medium",
                  color: "#7472AB",
                }}
              >
                {route.name}
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === "HOME") {
              return focused ? (
                <Image
                  source={homeTabFocused}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              ) : (
                <Image
                  source={homeTab}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              );
            } else if (route.name === "ROUTES") {
              return focused ? (
                <Image
                  source={routesTabFocused}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              ) : (
                <Image
                  source={routesTab}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              );
            } else if (route.name === "SCHEDULE") {
              return focused ? (
                <Image
                  source={schedulesTabFocused}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              ) : (
                <Image
                  source={schedulesTab}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              );
            } else if (route.name === "BALANCE") {
              return (
                <Image
                  source={focused ? balanceTabFocused : balanceTab}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen
          name="HOME"
          children={() => (
            <HomeScreen
              editMode={editMode}
              setEditMode={setEditMode}
              currentUserTrips={currentUserTrips}
            />
          )}
        />
        <Tab.Screen
          name="ROUTES"
          children={() => (
            <RoutesScreen
              currentUser={newUser}
              setCurrentUserTrips={setCurrentUserTrips}
              currentUserTrips={currentUserTrips}
            />
          )}
        />
        <Tab.Screen
          name="SCHEDULE"
          children={() => <ScheduleScreen currentUser={newUser} />}
        />
        <Tab.Screen
          name="BALANCE"
          children={() => <BalanceScreen currentUser={newUser} />}
        />
      </Tab.Navigator>
      <Logo />
    </NavigationContainer>
  );
}

// 4 tabs, one for each screen
