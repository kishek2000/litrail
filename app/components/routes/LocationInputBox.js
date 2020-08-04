import React from "react";
import { View, Text } from "react-native";
import { MAIN_PRIMARY_COLOUR, Locations } from "../../constants";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

export function LocationInputBox({
  text,
  setText,
  placeholder,
  matches,
  setMatches,
  selected,
  setSelected,
}) {
  return (
    <View style={{ flexDirection: "column" }}>
      <TextInput
        style={{
          height: 46,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 24,
          paddingLeft: 24,
          fontFamily: "WorkSans_300Light",
          fontSize: 16,
          color: MAIN_PRIMARY_COLOUR,
        }}
        value={text}
        placeholder={placeholder}
        onSubmitEditing={() => {
          if (!selected && typeof selected !== "string") {
            setSelected(true);
          }
        }}
        onFocus={() => {
          if (text !== "") {
            setSelected(false);
          }
        }}
        onChangeText={(input) => {
          setText(input);
          setSelected(false);
          input !== ""
            ? setMatches(
                Locations.filter((storedLocations, index) => {
                  return storedLocations
                    .toLowerCase()
                    .includes(input.toLowerCase());
                })
              )
            : setMatches([]);
        }}
      />
      {matches !== [] &&
        !selected &&
        matches.map((searchResult, key) => (
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
              setText(searchResult);
              setSelected(searchResult);
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
    </View>
  );
}
