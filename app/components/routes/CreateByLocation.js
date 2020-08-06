import React from "react";
import { View } from "react-native";
import { MAIN_PRIMARY_COLOUR } from "../../constants";
import { LocationButton } from "./LocationButton";
import { LocationInputBox } from "./LocationInputBox";
import { AllPossibleRoutes } from "./AllPossibleRoutes";
import { TextInput } from "react-native-gesture-handler";

export function CreateByLocation({
  navigation,
  locationStart,
  setLocationStart,
  locationDest,
  setLocationDest,
  startMatches,
  setStartMatches,
  destMatches,
  setDestMatches,
  selectedStart,
  setSelectedStart,
  selectedDest,
  setSelectedDest,
  locationRoutes,
  setLocationRoutes,
}) {
  return (
    <View style={{ marginTop: 16 }}>
      <LocationInputBox
        text={locationStart}
        setText={setLocationStart}
        placeholder={"Enter Start e.g. Kellyville Station..."}
        matches={startMatches}
        setMatches={setStartMatches}
        selected={selectedStart}
        setSelected={setSelectedStart}
      />
      <View style={{ marginBottom: 8 }} />
      <LocationInputBox
        text={locationDest}
        setText={setLocationDest}
        placeholder={"Enter Destination e.g. Central Station..."}
        matches={destMatches}
        setMatches={setDestMatches}
        selected={selectedDest}
        setSelected={setSelectedDest}
      />
      <View style={{ marginBottom: 24 }} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <LocationButton
          condition={locationStart !== "" || locationDest !== ""}
          label={"CLEAR"}
          bgColor="white"
          setState={{
            start: setLocationStart,
            dest: setLocationDest,
            startSelected: setSelectedStart,
            destSelected: setSelectedDest,
            locationRoutes: setLocationRoutes,
          }}
        />
        <LocationButton
          condition={
            selectedStart &&
            selectedDest &&
            typeof selectedStart === "string" &&
            typeof selectedDest === "string"
          }
          label={"FIND ROUTES"}
          bgColor={MAIN_PRIMARY_COLOUR}
          setState={setLocationRoutes}
          states={{ start: selectedStart, dest: selectedDest }}
        />
      </View>
      <AllPossibleRoutes
        navigation={navigation}
        locationRoutes={locationRoutes}
      />
    </View>
  );
}

// DRAFT FOR REFACTORING THE ABOVE

// export const DummyComponent = () => {
//   return (
//     <LocationInput
//       placeholder="Enter start..."
//       options={["Bella Vista Station", "Ryde"]}
//       onChange={(value) => {
//         setStartLocation(value);
//       }}
//     />
//     <LocationInput
//       placeholder="Enter dest..."
//       options={["Bella Vista Station", "Ryde"]}
//       onChange={(value) => {
//         setDestLocation(value);
//       }}
//     />
//   );
// };

// export const LocationInput = ({ placeholder, options, onChange }) => {
//   const [value, setValue] = useState(undefined);
//   const [isValid, setIsValid] = useState(false);
//   return (
//     <View>
//       <TextInput
//         style={{ borderRadius: 16, backgroundColor: "white", padding: 16 }}
//         onChangeText={(text) => {
//           setValue(text);
//           if (options.includes(text)) {
//             onChange(text);
//             setIsValid(true);
//           }
//         }}
//       />
//       {!isValid && <View />} {/* Render options until valid one not found */}
//     </View>
//   );
// };
