import React, { useEffect, useRef, useState } from "react";
import {

  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Vibration,
} from "react-native";

import { useAudioPlayer } from "expo-audio";
import { useNavigation } from "@react-navigation/native";

import Duck from "../components/Duck";
import { gameStyles } from "../styles/GameStyle";
import { gameMenuStyles } from "../styles/GameMenuStyles";
import { ref, push, set } from "firebase/database";
import { db } from "../firebase/configfire";


export default function GameScreen({ navigation }: any) {


  const player = useAudioPlayer(
    require("../assets/audio/design77mw-little-duck-loves-to-sing-287639.mp3")
  );
  const [score, setScore] = useState(0);
  const [hits, setHits] = useState(0);
  const [time, setTime] = useState(15);

  // Configuración del juego
  const [gameStarted, setGameStarted] = useState(false);
  const [maxBullets, setMaxBullets] = useState(5);
  const [bullets, setBullets] = useState(5);
  const [duckKey, setDuckKey] = useState(0);
  const [musicEnabled, setMusicEnabled] = useState(true);

  const [gameOver, setGameOver] = useState(false);

  const gameData = useRef({
    score: 0,
    hits: 0,
    bullets: 5,
  });

  useEffect(() => {
    gameData.current = {
      score,
      hits,
      bullets,
    };
  }, [score, hits, bullets]);

  async function guardarPuntaje(puntaje: number) {
    try {
      const nuevo = push(ref(db, "scores"));

      await set(nuevo, {
        nombre: "Jugador",
        nick: "Invitado",
        puntaje: puntaje,
      });

    } catch (error) {
      console.log(error);
    }
  }

  function iniciarJuego() {

    setScore(0);
    setHits(0);
    setTime(15);
    setBullets(maxBullets);
    setDuckKey(0);


    player.pause();
    setGameStarted(true);
    setGameOver(false);



    if (musicEnabled) {
      player.seekTo(0);
      player.play();
    }

  }
  function newDuck() {

    setDuckKey((prev) => prev + 1);

  }
  //mirella@gmail.com

  useEffect(() => {

    if (!gameStarted) return;

    const interval = setInterval(() => {

      setTime((prev) => {

        if (prev <= 1) {

          clearInterval(interval);

          guardarPuntaje(gameData.current.score);
          setGameStarted(false);

          setGameOver(true);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, [gameStarted]);

  function hitDuck() {

    setScore((prev) => prev + 5);
    setHits((prev) => prev + 1);

  }


  return (

    <View style={gameStyles.container}>
      {gameOver ? (

        <View style={gameMenuStyles.menu}>

          <Text style={gameMenuStyles.titleMenu}>
            GAME OVER
          </Text>

          <Text style={gameMenuStyles.subtitle}>
            ¡Se acabó el tiempo!
          </Text>

          <Text style={gameMenuStyles.option}>
            🏆 Puntaje: {score}
          </Text>

          <Text style={gameMenuStyles.option}>
            🦆 Patos eliminados: {hits}
          </Text>

          <Text style={gameMenuStyles.option}>
            🔫 Balas restantes: {bullets}/{maxBullets}
          </Text>

          <TouchableOpacity
            style={gameMenuStyles.startButtonContainer}
            onPress={iniciarJuego}
          >
            <Text style={gameMenuStyles.startButton}>
              JUGAR OTRA VEZ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={gameMenuStyles.startButtonContainer}
            onPress={() => {

              player.pause();

              setGameOver(false);
              setGameStarted(false);

              navigation.navigate("Home");

            }}
          >
            <Text style={gameMenuStyles.startButton}>
              VOLVER AL INICIO
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={gameMenuStyles.startButtonContainer}
            onPress={() =>
              navigation.navigate("Score", {
                score,
                hits,
                bullets,
              })
            }
          >
            <Text style={gameMenuStyles.startButton}>
              VER SCORE
            </Text>
          </TouchableOpacity>

        </View>



      ) : !gameStarted ? (

        <View style={gameMenuStyles.menu}>

          <Text style={gameMenuStyles.titleMenu}>
            DUCK HUNT
          </Text>

          <Text style={gameMenuStyles.subtitle}>
            CONFIGURAR PARTIDA
          </Text>

          <Text style={gameMenuStyles.option}>
            🔫 ¿Cuántas balas deseas usar?
          </Text>

          <View style={gameMenuStyles.row}>

            <Text
              style={gameMenuStyles.control}
              onPress={() => {
                if (maxBullets > 3) {
                  setMaxBullets(maxBullets - 1);
                }
              }}
            >
              _
            </Text>

            <Text style={gameMenuStyles.number}>
              {maxBullets}
            </Text>

            <Text
              style={gameMenuStyles.control}
              onPress={() => {
                if (maxBullets < 10) {
                  setMaxBullets(maxBullets + 1);
                }
              }}
            >
              +
            </Text>

          </View>

          <Text style={gameMenuStyles.info}>
            Mínimo: 3 | Máximo: 10
          </Text>
          <View style={gameMenuStyles.musicContainer}>

            <Text style={gameMenuStyles.option}>
              🎵 Música
            </Text>

            <TouchableOpacity
              style={[
                gameMenuStyles.musicButton,
                !musicEnabled && gameMenuStyles.musicButtonOff,
              ]}
              onPress={() => {

                if (musicEnabled) {
                  player.pause();
                } else {
                  player.play();
                }

                setMusicEnabled(!musicEnabled);

              }}
            >

              <Text style={gameMenuStyles.musicButtonText}>
                {musicEnabled ? "ON" : "OFF"}
              </Text>

            </TouchableOpacity>

          </View>

          <Text
            style={gameMenuStyles.startButton}
            onPress={iniciarJuego}
          >
            COMENZAR
          </Text>

        </View>

      ) : (

        <>

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

            <View style={gameStyles.infoBox}>
              <Text style={gameStyles.label}>BALAS</Text>
              <Text style={gameStyles.value}>
                {bullets}/{maxBullets}
              </Text>
            </View>

          </View>

          <ImageBackground
            source={require("../assets/img/fondoJuego.png")}
            style={gameStyles.gameArea}
            imageStyle={gameStyles.background}
            resizeMode="stretch"
          >

            {gameStarted && (
              <Duck
                key={duckKey}
                onHit={() => {

                  Vibration.vibrate(300);

                  if (bullets <= 1) {

                    setBullets(0);

                    guardarPuntaje(gameData.current.score);

                    setGameStarted(false);
                    setGameOver(true);

                    return;
                  }

                  setBullets((prev) => prev - 1);
                  setScore((prev) => prev + 10);
                  setHits((prev) => prev + 1);

                }}
                onFinish={newDuck}
              />
            )}
            

          </ImageBackground>

        </>

      )}

    </View>

  );
}