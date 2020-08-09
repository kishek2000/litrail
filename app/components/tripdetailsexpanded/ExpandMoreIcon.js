import React from "react";
import { Icon } from "react-native-elements";

export function ExpandMoreIcon({ setExpanded }) {
  return (
    <Icon
      name="expand-more"
      type="material"
      size={35}
      onPress={() => {
        console.log("testing expand");
        setExpanded(true);
      }}
    ></Icon>
  );
}
