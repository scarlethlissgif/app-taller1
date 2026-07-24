import { StyleSheet } from "react-native";

export const gameStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#6EC6FF",
  },

  header: {
    height: 90,
    backgroundColor: "#2F3542",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#222",
  },

  infoBox: {
    alignItems: "center",
  },

  label: {
    color: "#FFD54F",
    fontWeight: "bold",
    fontSize: 14,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },

  gameArea: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  duck: {
    position: "absolute",
    width: 80,
    height: 80,
  },
backgroundImage: {
    width: "100%",
    height: "100%",
},
overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
},

gameOver: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
},

finalScore: {
    fontSize: 28,
    color: "#FFD54F",
    marginBottom: 40,
},

button: {
    backgroundColor: "#db2b0c",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
},

buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
},
background: {
    width: "100%",
    height: "100%",
},
});