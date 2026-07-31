import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";

import { globalStyles } from "../styles/EstilosGlobales";
import { supabase } from "../supabase/config";

export default function HomeScreen() {

  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    Minecraft: require("../assets/fonts/Minecraftia-Regular.ttf"),
    Pixel: require("../assets/fonts/Pixel Digivolve.otf"),
  });

  useEffect(() => {
    cargarUsuario();
  }, []);

  async function cargarUsuario() {

    const { data: auth } = await supabase.auth.getUser();

    if (!auth.user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("usuario")
      .select("*")
      .eq("id", auth.user.id)
      .single();

    setUsuario(data);
    setLoading(false);
  }

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
    resizeMode="cover"
  >

    <Text style={globalStyles.tituloHome}>
      DUCK HUNT
    </Text>

    <Image
      source={{
        uri: `https://xdyumruypxoowhuqaxac.supabase.co/storage/v1/object/public/DuckHunt/${usuario?.foto}`,
      }}
      style={globalStyles.foto}
    />

    <Text style={globalStyles.bienvenido}>
      ¡Bienvenido!
    </Text>

    <Text style={globalStyles.nombre}>
      {usuario?.nombre}
    </Text>

    <Text style={globalStyles.nick}>
      @{usuario?.nick}
    </Text>

    <View style={globalStyles.card}>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>🎯 Partidas</Text>
        <Text style={globalStyles.valor}>0</Text>
      </View>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>🏆 Mejor Puntaje</Text>
        <Text style={globalStyles.valor}>0</Text>
      </View>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>🦆 Patos Cazados</Text>
        <Text style={globalStyles.valor}>0</Text>
      </View>

    </View>

    <Text style={globalStyles.frase}>
      ¡La cacería te espera!
    </Text>

  </ImageBackground>
);
}

const styles = StyleSheet.create({});