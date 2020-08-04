import React from "react";
import { Text, View, Image } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "./constants";
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
