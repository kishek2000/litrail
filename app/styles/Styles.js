import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerPage: {
    flex: 1,
    alignItems: "center",
  },
  outerHeading: {
    fontFamily: "WorkSans_700Bold",
    fontSize: 48,
  },
  innerHeading: {
    fontFamily: "WorkSans_700Bold",
    fontSize: 48,
    textAlign: "left",
    marginTop: 64,
    marginLeft: 36,
  },
  paragraph: {
    fontFamily: "WorkSans_300Light",
    fontSize: 18,
  },
  gapVertical: {
    marginBottom: 8,
  },
  gapHorizontal: {
    marginLeft: 8,
  },
});
