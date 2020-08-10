import React from "react";
import { Text } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export function LocationOptions({ options, text, onChange, onSelection }) {
  const matches = options.filter((location) => {
    return location.toLowerCase().includes(text.toLowerCase());
  });
  return (
    <>
      {matches.map((searchResult, key) => (
        <TouchableOpacity
          style={{
            width: "100%",
            height: 24,
            backgroundColor: "white",
            elevation: 1,
            paddingLeft: 24,
            borderRadius: 24,
            height: 36,
            justifyContent: "center",
          }}
          onPress={() => {
            onSelection.valid(true);
            onSelection.value(searchResult);
            onChange(searchResult);
          }}
        >
          <Text
            style={{
              color: MAIN_PRIMARY_COLOUR,
              fontSize: 16,
              fontFamily: "WorkSans_300Light",
            }}
          >
            {searchResult}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
}
