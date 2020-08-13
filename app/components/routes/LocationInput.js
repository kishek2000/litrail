import React, { useState } from "react";
import { View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { TextInput } from "react-native-gesture-handler";
import { LocationOptions } from "./LocationOptions";
import { ClearInputButton } from "./ClearInputButton";
export function LocationInput({
  placeholder,
  options,
  onChange,
  text,
  toggleClear,
  setSearch,
}) {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <TextInput
          style={{
            height: 46,
            backgroundColor: "white",
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            paddingLeft: 24,
            fontFamily: "WorkSans_300Light",
            fontSize: 12,
            width: "87%",
            color: MAIN_PRIMARY_COLOUR,
          }}
          onChangeText={(input) => {
            setValue(input);
            setIsValid(options.includes(input));
          }}
          placeholder={placeholder}
          value={value === "" && text !== "" ? text : value}
        />
        <ClearInputButton
          clearState={[setValue, onChange, setSearch]}
          toggleClear={toggleClear}
        />
      </View>
      {!isValid && value !== "" && (
        <LocationOptions
          options={options}
          text={value}
          onChange={onChange}
          onSelection={{ valid: setIsValid, value: setValue }}
        />
      )}
    </>
  );
}
