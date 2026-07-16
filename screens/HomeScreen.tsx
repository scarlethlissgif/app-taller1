import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/EstilosGlobales'


export default function HomeScreen() {

    
    return (
        <ImageBackground source={require("../assets/img/login duck.png")}
        style={globalStyles.container}>
            <Text style={{fontSize:50, marginTop:-300}}>BIENVENIDO</Text>
            <Text style={{fontSize:40}}>DUCK HUNT</Text>
            <TextInput
            placeholder='Ingresa tu usuario'
            style={globalStyles.inputlogin}/>
            <TextInput
            placeholder='Ingresa Contraseña'
            style={globalStyles.inputlogin}/>


            <Button 
            title='Ingresar'
            color={"#db2b0c"}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})