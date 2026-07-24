import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function ScoreScreen() {
    

  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const score = route.params?.score ?? 0;
  

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#87CEEB",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "#2F3542",
        }}
      >
        GAME OVER
      </Text>

      <Text
        style={{
          fontSize: 28,
          marginTop: 25,
          color: "#444",
        }}
      >
        PUNTAJE FINAL
      </Text>

      <Text
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "#db2b0c",
          marginVertical: 25,
        }}
      >
        {score}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#db2b0c",
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 15,
        }}
        onPress={() => navigation.replace("Game")}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          TRY AGAIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#2F3542",
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          HOME
        </Text>
      </TouchableOpacity>

    </View>

  );

}