import React from "react";
import { View, SafeAreaView, Text, TextInput } from "react-native";
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export function BalanceScreen({ currentUser }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EEEEEE",
          alignItems: "center",
          position: "relative",
          paddingHorizontal: 16,

        }}
      >
        <Text style={ScreenHeadingStyles}>Balance</Text>
        <Text
          style={{
            fontSize: 18,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View and manage your Opal Balance.
        </Text>
      <Text style={{
        fontFamily: "WorkSans_700Bold",
        marginTop: 24,
        textAlign: "left",
        alignSelf: "flex-start",
      }}>OPAL BALANCE</Text>
      <OpalCardInput placeholder = "Opal Card Number..."/>
      <OpalCardInput placeholder = "Opal Security Code or Password..."/>
      </View>
    </SafeAreaView>
  );
}

function OpalCardInput({placeholder}) {
  return (
  <TextInput style= {{
    height: 46,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 24,
    paddingLeft: 24,
    fontFamily: "WorkSans_300Light",
    fontSize: 16,
    color: MAIN_PRIMARY_COLOUR,
    marginTop: 8,
  }}
  placeholder = {placeholder}
  />)
}
