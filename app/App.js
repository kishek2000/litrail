import React from "react";
import { Text, View, Image } from "react-native";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "./constants";
import { AppLoading } from "expo";
import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
} from "@expo-google-fonts/work-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <HomeScreen />;
  }
}

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EEEEEE",
        alignItems: "center",
      }}
    >
      <Text style={ScreenHeadingStyles}>Saved Trips</Text>
      <Text
        style={{
          fontSize: 18,
          color: MAIN_PRIMARY_COLOUR,
          fontFamily: "WorkSans_400Regular",
          marginTop: 8,
        }}
      >
        View your saved trips and their details.
      </Text>
    </View>
  );
}

function SplashScreen() {
  return (
    <View
      style={{
        backgroundColor: MAIN_PRIMARY_COLOUR,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={require("./assets/logo.png")}
          style={{ alignSelf: "center", width: 33.6, height: 42 }}
        />
        <Text
          style={{
            fontSize: 42,
            fontFamily: "WorkSans_800ExtraBold",
            textAlign: "center",
            color: "white",
            marginBottom: 14,
          }}
        >
          transport.me
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            color: "white",
            fontFamily: "WorkSans_400Regular",
          }}
        >
          Manage your complete transport NSW experience.
        </Text>
      </View>
    </View>
  );
}
