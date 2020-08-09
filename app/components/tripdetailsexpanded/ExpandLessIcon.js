import React from "react";
import { Icon } from "react-native-elements";

export function ExpandLessIcon({ setExpanded }) {
  return (
    <Icon
      name="expand-less"
      type="material"
      size={35}
      style={{
        // backgroundColor: "orange",
        flex: 1,
        marginRight: 20,
      }}
      onPress={() => {
        setExpanded(false);
      }}
    ></Icon>
  );
}
