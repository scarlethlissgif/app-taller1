import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { ref, onValue } from "firebase/database";

import { globalStyles } from "../styles/EstilosGlobales";
import { db } from "../firebase/configfire";


interface Score {
  id: string;
  nombre: string;
  nick: string;
  puntaje: number;
}

export default function ScoreScreen() {

  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    Minecraft: require("../assets/fonts/Minecraftia-Regular.ttf"),
    Pixel: require("../assets/fonts/Pixel Digivolve.otf"),
  });

  useEffect(() => {

    const referencia = ref(db, "scores");

    const unsubscribe = onValue(referencia, (snapshot) => {

      const datos = snapshot.val();

      if (datos) {

        const lista = Object.keys(datos).map((key) => ({
          id: key,
          ...datos[key],
        }));

        lista.sort((a, b) => b.puntaje - a.puntaje);

        setScores(lista);

      } else {

        setScores([]);

      }

      setLoading(false);

    });

    return () => unsubscribe();

  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={globalStyles.loading}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return (

    <ImageBackground
      source={require("../assets/img/fondoJuego.png")}
      style={globalStyles.container}
    >

      <Text style={globalStyles.tituloHome}>
        PUNTAJES
      </Text>

      <View style={globalStyles.cardRanking}>

        <Text style={globalStyles.subTitulo}>
          TOP JUGADORES
        </Text>

        <FlatList
          data={scores}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (

            <View style={globalStyles.filaRanking}>

              <Text style={globalStyles.posicion}>

                {index == 0
                  ? "🥇"
                  : index == 1
                  ? "🥈"
                  : index == 2
                  ? "🥉"
                  : `${index + 1}.`}

              </Text>

              <View style={{ flex: 1 }}>

                <Text style={globalStyles.nombreRanking}>
                  {item.nombre}
                </Text>

                <Text style={globalStyles.nickRanking}>
                  @{item.nick}
                </Text>

              </View>

              <Text style={globalStyles.puntajeRanking}>
                {item.puntaje}
              </Text>

            </View>

          )}
          ListEmptyComponent={
            <Text style={globalStyles.sinDatos}>
              Aún no existen puntajes.
            </Text>
          }
        />

      </View>

    </ImageBackground>

  );

}