import React, { useState } from "react";
import {
    Alert,
    ImageBackground,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/EstilosGlobales";
import { supabase } from "../supabase/config";
import { useFonts } from "expo-font";
import * as LocalAuthentication from "expo-local-authentication";

export default function LoginScreen({ navigation }: any) {
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [mostrar, setMostrar] = useState(false);
    const [loading, setLoading] = useState(false);


    const [fontsLoaded] = useFonts({
        Minecraft: require("../assets/fonts/Minecraft Evenings.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    async function login() {
        if (!correo.trim() || !contrasenia.trim()) {
            Alert.alert("Campos vacíos", "Complete todos los campos.");
            return;
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(correo)) {
            Alert.alert(
                "Correo inválido",
                "Ingrese un correo electrónico válido."
            );
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: correo.trim(),
            password: contrasenia,
        });

        setLoading(false);

        if (error) {
            Alert.alert("Error", error.message);
            return;
        }

        Alert.alert("Bienvenido", "Inicio de sesión correcto.");

        navigation.replace("Tabs");
    }
    async function iniciarConHuella() {

        const compatible = await LocalAuthentication.hasHardwareAsync();

        if (!compatible) {
            Alert.alert("Error", "Este dispositivo no tiene lector de huella.");
            return;
        }

        const registrado = await LocalAuthentication.isEnrolledAsync();

        if (!registrado) {
            Alert.alert("Error", "No hay huellas registradas en el dispositivo.");
            return;
        }

        const resultado = await LocalAuthentication.authenticateAsync({
            promptMessage: "Inicia sesión con tu huella",
            fallbackLabel: "Usar contraseña",
            disableDeviceFallback: false,
        });

        if (resultado.success) {
            navigation.replace("Tabs");
        }

    }

    return (
        <ImageBackground
            source={require("../assets/img/login duck.png")}
            style={globalStyles.container}
        >
            <Text style={globalStyles.titulo}>BIENVENIDO</Text>

            <Text style={globalStyles.subtitulo}>DUCK HUNT</Text>

            <TextInput
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
                style={globalStyles.inputlogin}
            />

            <View style={globalStyles.inputPassword}>
                <TextInput
                    placeholder="Contraseña"
                    value={contrasenia}
                    onChangeText={setContrasenia}
                    secureTextEntry={!mostrar}
                    style={globalStyles.passwordText}
                />

                <Ionicons
                    name={mostrar ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    style={globalStyles.iconoOjo}
                    onPress={() => setMostrar(!mostrar)}
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#db2b0c" />
            ) : (
                <View style={globalStyles.boton}>
                    <Button
                        title="INICIAR SESIÓN"
                        color="#f07109"
                        onPress={login}
                    />
                    <TouchableOpacity
                        style={globalStyles.botonHuella}
                        onPress={iniciarConHuella}
                    >

                        <Ionicons
                            name="finger-print"
                            size={26}
                            color="#FFF"
                        />

                        <Text style={globalStyles.textoBotonPerfil}>
                            Ingresar con Huella
                        </Text>

                    </TouchableOpacity>
                </View>
            )}

            <Text style={globalStyles.textoRegistro}>
                ¿No tienes una cuenta?
            </Text>

            <Text
                style={globalStyles.registro}
                onPress={() => navigation.navigate("Registro")}
            >
                Crear una cuenta
            </Text>
        </ImageBackground>
    );
}