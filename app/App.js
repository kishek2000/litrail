import React, { useState } from "react";
import { ScrollView } from "react-native";
import { MenuBar } from "./constants";
import { AppLoading } from "expo";
import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
} from "@expo-google-fonts/work-sans";
import { CreateNavigation } from "./CreateNavigation";

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
    return <CreateNavigation />;
  }
}
