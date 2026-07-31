import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontFamily: "Minecraft",
    fontSize: 48,
    color: "#111",
    marginTop: -150,
    marginBottom: 10,
    textShadowColor: "#ffffff",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },

  subtitulo: {
    fontFamily: "Minecraft",
    fontSize: 36,
    color: "#db2b0c",
    marginBottom: 35,
    textShadowColor: "#ffffff",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },

 inputlogin: {
  width: "85%",
  height: 60,

  backgroundColor: "#F7E7B6",

  borderWidth: 4,
  borderColor: "#7A4A12",

  borderRadius: 12,

  paddingHorizontal: 18,

  fontSize: 18,
  color: "#2E1A00",

  marginBottom: 18,

  elevation: 10,

  shadowColor: "#000",
  shadowOpacity: 0.35,
  shadowRadius: 6,
  shadowOffset: {
    width: 2,
    height: 4,
  },
},
 inputPassword: {
  width: "85%",
  height: 60,

  backgroundColor: "#F7E7B6",

  borderWidth: 4,
  borderColor: "#7A4A12",

  borderRadius: 12,

  paddingHorizontal: 18,

  flexDirection: "row",
  alignItems: "center",

  marginBottom: 20,

  elevation: 10,

  shadowColor: "#000",
  shadowOpacity: 0.35,
  shadowRadius: 6,
  shadowOffset: {
    width: 2,
    height: 4,
  },
},
  passwordText: {
    flex: 1,
    fontSize: 17,
  },

  iconoOjo: {
    color: "#666",
  },

  boton: {
  width: "85%",
  marginTop: 15,
  borderRadius: 20,
  overflow: "hidden",
  
},

  textoRegistro: {
  marginTop: 15,
  color: "#f5f3f3",
  fontSize: 20,
  
},

registro: {
  color: "red",
  fontWeight: "bold",
  fontSize: 18,
  marginTop: 5,
},


 tituloRegistro: {
  fontFamily: "Minecraft",
  fontSize: 42,
  color: "#111",
  marginTop: 20,
  marginBottom: 15,

  textShadowColor: "#ffffff",
  textShadowOffset: {
    width: 2,
    height: 2,
  },
  textShadowRadius: 2,
},

scroll: {
  width: "100%",
},

contenidoRegistro: {
  alignItems: "center",
  paddingTop: 40,
  paddingBottom: 40,
},

fotoContainer: {
  width: 110,
  height: 110,
  borderRadius: 55,

  backgroundColor: "#fcfaf63b",

  borderWidth: 4,
  borderColor: "#7A4A12",

  justifyContent: "center",
  alignItems: "center",

  marginBottom: 10,

  elevation: 10,

  shadowColor: "#000",
  shadowOpacity: 0.35,
  shadowRadius: 6,
  shadowOffset: {
    width: 2,
    height: 4,
  },
},

fotoPerfil: {
  width: 85,
  height: 85,
  borderRadius: 42,
  resizeMode: "contain",
},

cambiarFoto: {
    
    marginBottom: 25,
  color: "#f53808",
  fontWeight: "bold",
  fontSize: 20,
 

  textShadowColor: "#270a01",
  textShadowOffset: {
    width: 1,
    height: 1,
  },
  textShadowRadius: 2,
},
panelRegistro: {
  width: "90%",
  backgroundColor: "#F8E9C6",

  borderWidth: 4,
  borderColor: "#7A4A12",

  borderRadius: 25,

  alignItems: "center",

  paddingTop: 25,
  paddingBottom: 30,

  elevation: 12,

  shadowColor: "#000",
  shadowOpacity: 0.35,
  shadowRadius: 8,
  shadowOffset: {
    width: 2,
    height: 4,
  },
},

loading: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#87CEEB",
},

tituloHome: {
  fontFamily: "Minecraft",
  fontSize: 60,
  color: "#D97706",
  marginTop:40,

  textShadowColor: "#5C2C06",
  textShadowOffset: {
    width: 4,
    height: 4,
  },
  textShadowRadius: 1,

  letterSpacing: 2,
  marginBottom: 30,
},

foto: {
  width: 140,
  height: 140,
  borderRadius: 70,
  borderWidth: 4,
  borderColor: "#ffffff42",
  marginBottom: 18,
},

bienvenido: {
  fontFamily: "Minecraft",
  fontSize: 20,
  color: "#f7f6f4",
},

nombre: {
  fontFamily: "Pixel",
  fontSize: 34,
  color: "#FFE066",

  textShadowColor: "#000",
  textShadowOffset: {
    width: 2,
    height: 2,
  },
  textShadowRadius: 1,

  marginTop: 5,
},

nick: {
  fontFamily: "Minecraft",
  fontSize: 16,
  color: "#FFF",
  marginBottom: 25,
},

card: {
  width: "88%",
  backgroundColor: "rgba(0,0,0,0.70)",
  borderRadius: 18,
  padding: 20,
  
},

item: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 10,
},

label: {
  fontFamily: "Minecraft",
  color: "#FFF",
  fontSize: 15,
},

valor: {
  fontFamily: "Minecraft",
  color: "#FFD700",
  fontSize: 15,
},

frase: {
  marginTop: 30,
  fontFamily: "Pixel",
  fontSize: 22,
  color: "#FFF",
  textAlign: "center",

  textShadowColor: "#000",
  textShadowOffset: {
    width: 2,
    height: 2,
  },
  textShadowRadius: 1,
},
botonPerfil: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "88%",
  backgroundColor: "#2E7D32",
  padding: 14,
  borderRadius: 12,
  marginTop: 20,
},

botonFoto: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "88%",
  backgroundColor: "#1976D2",
  padding: 14,
  borderRadius: 12,
  marginTop: 12,
},

botonCerrar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "88%",
  backgroundColor: "#C62828",
  padding: 14,
  borderRadius: 12,
  marginTop: 12,
},

textoBotonPerfil: {
  fontFamily: "Minecraft",
  color: "#FFF",
  fontSize: 14,
  marginLeft: 10,
},
cardRanking: {
  width: "92%",
  backgroundColor: "rgba(0,0,0,0.75)",
  borderRadius: 18,
  padding: 18,
  flex: 1,
  marginBottom: 25,
},

subTitulo: {
  fontFamily: "Minecraft",
  color: "#FFD700",
  fontSize: 18,
  textAlign: "center",
  marginBottom: 20,
},

filaRanking: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: "rgba(255,255,255,.15)",
},

posicion: {
  width: 40,
  fontFamily: "Minecraft",
  color: "#FFF",
  fontSize: 16,
},

nombreRanking: {
  fontFamily: "Pixel",
  color: "#FFF",
  fontSize: 18,
},

nickRanking: {
  fontFamily: "Minecraft",
  color: "#CCC",
  fontSize: 12,
},

puntajeRanking: {
  fontFamily: "Minecraft",
  color: "#FFD700",
  fontSize: 18,
},

sinDatos: {
  fontFamily: "Minecraft",
  color: "#FFF",
  textAlign: "center",
  marginTop: 40,
},
input: {
  width: "100%",
  backgroundColor: "#F5F5DC",
  borderWidth: 3,
  borderColor: "#5C4033",
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 12,
  fontFamily: "Pixel",
  fontSize: 14,
  color: "#3E2723",
  marginTop: 5,
},
botonHuella: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 15,
},
});