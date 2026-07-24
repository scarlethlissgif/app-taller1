import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGlobales'
import { supabase } from '../supabase/config'
import { useNavigation } from "@react-navigation/native";



export default function HomeScreen() {
    const [usuario, setusuario] = useState("")
    const [contrasenia, setcontrasenia] = useState("")
    const navigation = useNavigation<any>();

    async function login() {

    navigation.navigate("Game");

}



    return (
        <ImageBackground source={require("../assets/img/login duck.png")}
            style={globalStyles.container}>
            <Text style={{ fontSize: 50, marginTop: -300 }}>BIENVENIDO</Text>
            <Text style={{ fontSize: 40 }}>DUCK HUNT</Text>
            <TextInput
                placeholder='Ingresa tu usuario'
                style={globalStyles.inputlogin}
                onChangeText={(text) => setusuario(text)} />
            <TextInput
                placeholder='Ingresa Contraseña'
                style={globalStyles.inputlogin}
                onChangeText={(text) => setcontrasenia(text)} />

            <Button
                title='Ingresar'
                color={"#db2b0c"}
                onPress={login} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})