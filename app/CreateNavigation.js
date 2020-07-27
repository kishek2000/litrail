import React from "react";
import { Image } from "react-native";
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
} from "./constants";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { BalanceScreen } from "./screens/BalanceScreen";
import { SchedulesScreen } from "./screens/SchedulesScreen";
import { RoutesScreen } from "./screens/RoutesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export const Tab = createBottomTabNavigator();

export function CreateNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: MAIN_PRIMARY_COLOUR,
          inactiveTintColor: "#7472AB",
          labelStyle: {
            fontSize: 12,
            paddingBottom: 6,
            fontFamily: "WorkSans_500Medium",
          },
          style: {
            height: 70,
          },
        }}
        screenOptions={({ route }) => ({
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
            } else if (route.name === "SCHEDULES") {
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
              return focused ? (
                <Image
                  source={balanceTabFocused}
                  style={{
                    width: 36,
                    height: 28,
                    resizeMode: "contain",
                    marginBottom: -10,
                  }}
                />
              ) : (
                <Image
                  source={balanceTab}
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
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="ROUTES" component={RoutesScreen} />
        <Tab.Screen name="SCHEDULES" component={SchedulesScreen} />
        <Tab.Screen name="BALANCE" component={BalanceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
