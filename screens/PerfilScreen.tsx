import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../styles/EstilosGlobales";
import { supabase } from "../supabase/config";
import * as ImagePicker from "expo-image-picker";


export default function PerfilScreen({ navigation }: any) {
const [editando, setEditando] = useState(false);
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
 

  const [fontsLoaded] = useFonts({
    Minecraft: require("../assets/fonts/Minecraftia-Regular.ttf"),
    Pixel: require("../assets/fonts/Pixel Digivolve.otf"),
  });

  useEffect(() => {
    cargarPerfil();
  }, []);

  async function actualizarPerfil() {

  const { error } = await supabase
    .from("usuario")
    .update({
      nombre: usuario.nombre,
      nick: usuario.nick,
      edad: Number(usuario.edad),
    })
    .eq("id", usuario.id);

  if (error) {
    Alert.alert("Error", error.message);
    return;
  }

  Alert.alert("Éxito", "Perfil actualizado");
  setEditando(false);

}

  async function cargarPerfil() {

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

async function cerrarSesion() {

  const { error } = await supabase.auth.signOut();

  if (error) {
    Alert.alert("Error", error.message);
    return;
  }

  navigation.navigate("Login");

}

  if (!fontsLoaded || loading) {
    return (
      <View style={globalStyles.loading}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }


  async function cambiarFoto() {

  const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permiso.granted) {
    Alert.alert("Permiso", "Debes permitir acceder a la galería.");
    return;
  }

  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
  });

  if (resultado.canceled) return;

  const imagen = resultado.assets[0];

  const response = await fetch(imagen.uri);
  const blob = await response.blob();

  const nombreArchivo = `${Date.now()}.jpg`;

  const { error: uploadError } = await supabase.storage
    .from("DuckHunt")
    .upload(nombreArchivo, blob, {
      upsert: true,
      contentType: "image/jpeg",
    });

  if (uploadError) {
    Alert.alert("Error", uploadError.message);
    return;
  }

  const { error } = await supabase
    .from("usuario")
    .update({
      foto: nombreArchivo,
    })
    .eq("id", usuario.id);

  if (error) {
    Alert.alert("Error", error.message);
    return;
  }

  setUsuario({
    ...usuario,
    foto: nombreArchivo,
  });

  Alert.alert("Éxito", "Foto actualizada.");

}


return (

  <ImageBackground
    source={require("../assets/img/fondoJuego.png")}
    style={globalStyles.container}
    resizeMode="cover"
  >

    <Text style={globalStyles.tituloHome}>
      MI PERFIL
    </Text>

    <Image
      source={{
        uri: `https://xdyumruypxoowhuqaxac.supabase.co/storage/v1/object/public/DuckHunt/${usuario?.foto}`,
      }}
      style={globalStyles.foto}
    />

    <View style={globalStyles.card}>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>Nombre</Text>

        {editando ? (
          <TextInput
            style={globalStyles.input}
            value={usuario?.nombre}
            onChangeText={(text) =>
              setUsuario({ ...usuario, nombre: text })
            }
          />
        ) : (
          <Text style={globalStyles.valor}>
            {usuario?.nombre}
          </Text>
        )}

      </View>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>Nick</Text>

        {editando ? (
          <TextInput
            style={globalStyles.input}
            value={usuario?.nick}
            onChangeText={(text) =>
              setUsuario({ ...usuario, nick: text })
            }
          />
        ) : (
          <Text style={globalStyles.valor}>
            @{usuario?.nick}
          </Text>
        )}

      </View>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>Correo</Text>
        <Text style={globalStyles.valor}>
          {usuario?.correo}
        </Text>
      </View>

      <View style={globalStyles.item}>
        <Text style={globalStyles.label}>Edad</Text>

        {editando ? (
          <TextInput
            style={globalStyles.input}
            value={String(usuario?.edad)}
            keyboardType="numeric"
            onChangeText={(text) =>
              setUsuario({ ...usuario, edad: text })
            }
          />
        ) : (
          <Text style={globalStyles.valor}>
            {usuario?.edad}
          </Text>
        )}

      </View>

    </View>

    <TouchableOpacity
      style={globalStyles.botonPerfil}
      onPress={() => {
        if (editando) {
          actualizarPerfil();
        } else {
          setEditando(true);
        }
      }}
    >
      

      <Ionicons
        name={editando ? "save" : "create"}
        size={22}
        color="#FFF"
      />

      <Text style={globalStyles.textoBotonPerfil}>
        {editando ? "Guardar Cambios" : "Editar Perfil"}
      </Text>

    </TouchableOpacity>

    <TouchableOpacity
      style={globalStyles.botonFoto}
      onPress={cambiarFoto}
    >

      <Ionicons
        name="image"
        size={22}
        color="#FFF"
      />

      <Text style={globalStyles.textoBotonPerfil}>
        Cambiar Foto
      </Text>

    </TouchableOpacity>

    <TouchableOpacity
      style={globalStyles.botonCerrar}
      onPress={cerrarSesion}
    >

      <Ionicons
        name="log-out"
        size={22}
        color="#FFF"
      />

      <Text style={globalStyles.textoBotonPerfil}>
        Cerrar Sesión
      </Text>

    </TouchableOpacity>

  </ImageBackground>

);

}