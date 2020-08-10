import React from "react";
import { Icon } from "react-native-elements";

export function ExpandIcon({ setExpanded, legExpanded, section }) {
  return (
    <>
      {!legExpanded ? (
        <Icon
          name="expand-more"
          type="material"
          size={35}
          onPress={() => {
            console.log("testing expand");
            setExpanded(section);
          }}
        />
      ) : (
        <Icon
          name="expand-less"
          type="material"
          size={35}
          onPress={() => {
            setExpanded("");
          }}
        />
      )}
    </>
  );
}
