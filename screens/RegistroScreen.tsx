import React, { useState } from "react";
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    Button,
    Image,
    ScrollView,
    Alert,
    TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { File } from "expo-file-system";

import { globalStyles } from "../styles/EstilosGlobales";
import { supabase } from "../supabase/config";

export default function RegistroScreen({ navigation }: any) {


    const [mostrar, setMostrar] = useState(false);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [edad, setEdad] = useState("");
    const [nick, setNick] = useState("");

    const [image, setImage] = useState<string | null>(null);

    const [rutaFoto, setRutaFoto] = useState("");

    const abrirGaleria = async () => {
        const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permiso.granted) {
            Alert.alert(
                "Permiso denegado",
                "Debe permitir acceder a la galería."
            );
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,

            aspect: [1, 1],
            quality: 1,
        });

        if (!resultado.canceled) {
            setImage(resultado.assets[0].uri);
        }
    };

    const abrirCamara = async () => {
        const permiso = await ImagePicker.requestCameraPermissionsAsync();
        if (!permiso.granted) {

            Alert.alert(
                "Permiso denegado",
                "Debe permitir acceder a la cámara."
            );
            return;
        }

        const resultado = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!resultado.canceled) {

            setImage(resultado.assets[0].uri);
        }

    };
    const cambiarFoto = () => {

        Alert.alert(
            "Foto de perfil",
            "Seleccione una opción",
            [
                {
                    text: "Cámara",
                    onPress: abrirCamara,
                },
                {
                    text: "Galería",
                    onPress: abrirGaleria,
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                },
            ]
        );

    };




    async function subirImagen() {

        if (!image) {
            return "";
        }

        const avatarFile = await new File(image).bytes();

        const nombreImagen = `${Date.now()}-${nick}.png`;

        const ruta = nombreImagen;

        const { data, error } = await supabase
            .storage
            .from("DuckHunt")
            .upload(ruta, avatarFile, {
                contentType: "image/jpeg",
                cacheControl: "no-cache",
                upsert: false,
            });

        console.log("DATA:", data);
        console.log("ERROR:", error);

        if (error) {
            Alert.alert(
                "Error",
                JSON.stringify(error, null, 2)
            );
            return "";
        }

        setRutaFoto(ruta);

        return ruta;
    }




    async function guardarUsuario(uid: string, foto: string) {

        const { error } = await supabase
            .from("usuario")
            .insert({
                id: uid,
                nombre: nombre,
                correo: correo,
                edad: edad,
                nick: nick,
                foto: foto
            })

        if (error) {
            Alert.alert("Error", error.message);
        }

    }

    async function registro() {

        if (
            nombre.trim() === "" ||
            correo.trim() === "" ||
            contrasenia.trim() === "" ||
            edad.trim() === "" ||
            nick.trim() === ""
        ) {
            Alert.alert(
                "Campos vacíos",
                "Complete toda la información."
            );
            return;
        }

        if (!image) {
            Alert.alert(
                "Foto",
                "Seleccione una foto de perfil."
            );
            return;
        }


        const foto = await subirImagen();

        if (foto === "") {
            return;
        }


        const { data, error } = await supabase.auth.signUp({
            email: correo,
            password: contrasenia,
        });

        if (error == null) {

            await guardarUsuario(
                data.user?.id as string,
                foto
            );

            Alert.alert(
                "Registro exitoso",
                "Usuario registrado correctamente."
            );

            navigation.navigate("Login");

        } else {

            Alert.alert(
                "Error",
                error.message
            );

        }

    }



    return (
        <ImageBackground
            source={require("../assets/img/login duck.png")}
            style={globalStyles.container}
        >
            <ScrollView
                style={globalStyles.scroll}
                contentContainerStyle={globalStyles.contenidoRegistro}
                showsVerticalScrollIndicator={false}
            >

                <Text style={globalStyles.tituloRegistro}>
                    REGISTRO
                </Text>
                <View style={globalStyles.panelRegistro}>

                    <TouchableOpacity
                        onPress={cambiarFoto}
                        style={globalStyles.fotoContainer}
                    >
                        <Image
                            source={
                                image
                                    ? { uri: image }
                                    : require("../assets/img/patoperfil.png")
                            }
                            style={globalStyles.fotoPerfil}
                        />

                    </TouchableOpacity>

                    <Text
                        style={globalStyles.cambiarFoto}
                        onPress={cambiarFoto}
                    >
                        Seleccione Imagen
                    </Text>

                    <TextInput
                        placeholder="Nombre completo"
                        placeholderTextColor="#6B4A18"
                        style={globalStyles.inputlogin}
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <TextInput
                        placeholder="Edad"
                        placeholderTextColor="#6B4A18"
                        keyboardType="numeric"
                        style={globalStyles.inputlogin}
                        value={edad}
                        onChangeText={setEdad}
                    />

                    <TextInput
                        placeholder="Nick"
                        placeholderTextColor="#6B4A18"
                        style={globalStyles.inputlogin}
                        value={nick}
                        onChangeText={setNick}
                    />

                    <TextInput
                        placeholder="Correo electrónico"
                        placeholderTextColor="#6B4A18"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={globalStyles.inputlogin}
                        value={correo}
                        onChangeText={setCorreo}
                    />

                    <View style={globalStyles.inputPassword}>
                        <TextInput
                            placeholder="Contraseña"
                            placeholderTextColor="#6B4A18"
                            secureTextEntry={!mostrar}
                            style={globalStyles.passwordText}
                            value={contrasenia}
                            onChangeText={setContrasenia}
                        />
                        <Ionicons
                            name={mostrar ? "eye-off-outline" : "eye-outline"}
                            size={24}
                            style={globalStyles.iconoOjo}
                            onPress={() => setMostrar(!mostrar)}
                        />
                    </View>

                    <View style={globalStyles.boton}>
                        <Button
                            title="CREAR CUENTA"
                            color="#db2b0c"
                            onPress={() => registro()}
                        />
                    </View>

                    <Text style={globalStyles.textoRegistro}>
                        ¿Ya tienes una cuenta?
                    </Text>

                    <Text
                        style={globalStyles.registro}
                        onPress={() => navigation.goBack()}
                    >
                        Iniciar sesión
                    </Text>
                </View>
            </ScrollView>

        </ImageBackground>
    );
}