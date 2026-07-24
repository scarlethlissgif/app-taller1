import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { gameStyles } from "../styles/GameStyles";
import Duck from "../components/Duck";

export default function GameScreen() {

  const navigation = useNavigation<any>();

  const [score, setScore] = useState(0);
  const [hits, setHits] = useState(0);
  const [time, setTime] = useState(30);
  const [bullets] = useState(3);

  const gameData = useRef({
    score: 0,
    hits: 0,
    bullets: 3,
  });

  useEffect(() => {
    gameData.current = {
      score,
      hits,
      bullets,
    };
  }, [score, hits, bullets]);

  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prev) => {

        if (prev <= 1) {

          clearInterval(interval);

          navigation.replace("Score", {
            score: gameData.current.score,
            hits: gameData.current.hits,
            bullets: gameData.current.bullets,
          });

          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, [navigation]);

  function hitDuck() {

    setScore((prev) => prev + 10);
    setHits((prev) => prev + 1);

  }

  return (

    <SafeAreaView style={gameStyles.container}>

      <View style={gameStyles.header}>

        <View style={gameStyles.infoBox}>
          <Text style={gameStyles.label}>PUNTAJE</Text>
          <Text style={gameStyles.value}>{score}</Text>
        </View>

        <View style={gameStyles.infoBox}>
          <Text style={gameStyles.label}>TIEMPO</Text>
          <Text style={gameStyles.value}>{time}</Text>
        </View>

        <View style={gameStyles.infoBox}>
          <Text style={gameStyles.label}>PATOS</Text>
          <Text style={gameStyles.value}>{hits}</Text>
        </View>

      </View>

      <ImageBackground
        source={require("../assets/img/fondoJuego.png")}
        style={gameStyles.gameArea}
        imageStyle={gameStyles.background}
        resizeMode="stretch"
      >

        <Duck onHit={hitDuck} />

      </ImageBackground>

    </SafeAreaView>

  );

}