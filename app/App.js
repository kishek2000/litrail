import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
} from "@expo-google-fonts/work-sans";
import { CreateNavigation } from "./config/CreateNavigation";

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
