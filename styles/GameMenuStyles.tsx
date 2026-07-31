import { StyleSheet } from "react-native";

export const gameMenuStyles = StyleSheet.create({

  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#87CEEB",
  },

  titleMenu: {
    fontFamily: "Minecraft",
    fontSize: 36,
    color: "#D97706",
    marginBottom: 12,
    textShadowColor: "#5C2C06",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },

  subtitle: {
    fontFamily: "Minecraft",
    fontSize: 18,
    color: "#333",
    marginBottom: 40,
  },

  option: {
    fontFamily: "Minecraft",
    fontSize: 16,
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  control: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: "#FFD700",
    borderWidth: 2,
    borderColor: "#D97706",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Minecraft",
    fontSize: 28,
    color: "#000",
  },

  number: {
    width: 80,
    textAlign: "center",
    fontFamily: "Minecraft",
    fontSize: 32,
    color: "#222",
  },

  info: {
    marginTop: 10,
    fontFamily: "Minecraft",
    fontSize: 14,
    color: "#555",
  },

  startButton: {
    marginTop: 45,
    backgroundColor: "#D97706",
    color: "#FFF",
    fontFamily: "Minecraft",
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
  },
  // ===== MÚSICA =====

musicContainer: {
  width: "100%",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 25,
},

musicButton: {
  width: 120,
  height: 45,
  backgroundColor: "#4CAF50",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#ffffff",
},

musicButtonOff: {
  backgroundColor: "#d32f2f",
},

musicButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},
startButtonContainer: {
  backgroundColor: "#4CAF50",
  paddingVertical: 14,
  borderRadius: 10,
  marginTop: 15,
  alignItems: "center",
},

});