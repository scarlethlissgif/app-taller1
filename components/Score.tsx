import React from "react";
import { View, Text } from "react-native";

export default function ScoreScreen({ route }: any) {

    const score = route.params?.score ?? 0;

    return (

        <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            }}
        >

            <Text
                style={{
                    fontSize:45,
                    fontWeight:"bold",
                }}
            >
                PUNTAJE
            </Text>

            <Text
                style={{
                    fontSize:60,
                    color:"red",
                    marginTop:25,
                }}
            >
                {score}
            </Text>

        </View>

    );

}