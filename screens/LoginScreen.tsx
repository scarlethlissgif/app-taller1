import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGlobales'
import { supabase } from '../supabase/config'
import { useNavigation } from "@react-navigation/native";



export default function LoginScreen({ navigation }: any) {
    const [correo, setcorreo] = useState("")
    const [contrasenia, setcontrasenia] = useState("")


    async function login() {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: correo,
            password: contrasenia,
        })
        if (error) {
            Alert.alert('Error', 'Correo o contraseña incorrectos.')
            return
        }

        Alert.alert('Éxito', 'Inicio de sesión correcto.')
        navigation.navigate('Tabs')
    }






return (
    <ImageBackground source={require("../assets/img/login duck.png")}
        style={globalStyles.container}>
        <Text style={{ fontSize: 50, marginTop: -300 }}>BIENVENIDO</Text>
        <Text style={{ fontSize: 40 }}>DUCK HUNT</Text>
        <TextInput placeholder='Ingresar correo'
            style={globalStyles.inputlogin}
            onChangeText={setcorreo} />

        <TextInput placeholder='Ingresar contrasenia'
            style={globalStyles.inputlogin}
            onChangeText={setcontrasenia} />

        <Text onPress={() => navigation.navigate("Registro")}
        >No tienes una cuenta? Registrate por aki ....</Text>

        <Button
            title='Inio de Sesion'
            color={"#db2b0c"}
            onPress={() => login()}
        />


    </ImageBackground>
)
}

const styles = StyleSheet.create({})