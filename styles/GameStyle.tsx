import { StyleSheet } from "react-native";

export const gameStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
  },

  header: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5DEB3",
    borderBottomWidth: 3,
    borderBottomColor: "#8B5A2B",
    paddingHorizontal: 10,
  },

  infoBox: {
    alignItems: "center",
  },

  label: {
    fontFamily: "Minecraft",
    fontSize: 12,
    color: "#5C2C06",
  },

  value: {
    fontFamily: "Minecraft",
    fontSize: 18,
    color: "#D97706",
    marginTop: 4,
  },

  gameArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    resizeMode: "stretch",
  },

});