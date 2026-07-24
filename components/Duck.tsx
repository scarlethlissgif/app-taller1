import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

type Props = {
  onHit: () => void;
};

const { width, height } = Dimensions.get("window");

const frames = [
  require("../assets/sprites/pato2.png"),
  require("../assets/sprites/pato3.png"),
  require("../assets/sprites/pato4.png"),
  require("../assets/sprites/pato5.png"),
  require("../assets/sprites/pato6.png"),
  require("../assets/sprites/pato7.png"),
];

export default function Duck({ onHit }: Props) {

  const [frame, setFrame] = useState(0);

  const [x, setX] = useState(100);
  const [y, setY] = useState(150);

  const [dx, setDx] = useState(4);
  const [dy, setDy] = useState(3);

  // Animación
  useEffect(() => {

    const animation = setInterval(() => {

      setFrame((old) => (old + 1) % frames.length);

    }, 80);

    return () => clearInterval(animation);

  }, []);

  // Movimiento
  useEffect(() => {

    const movement = setInterval(() => {

      setX((old) => {

        let value = old + dx;

        if (value <= 0 || value >= width - 90) {
          setDx((v) => -v);
        }

        return value;

      });

      setY((old) => {

        let value = old + dy;

        if (value <= 20 || value >= height - 280) {
          setDy((v) => -v);
        }

        return value;

      });

    }, 20);

    return () => clearInterval(movement);

  }, [dx, dy]);

  return (

    <TouchableOpacity
      activeOpacity={1}
      onPress={onHit}
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
    >

      <Image
        source={frames[frame]}
        style={{
         width: 170,
height: 170,
          resizeMode: "contain",
        }}
      />

    </TouchableOpacity>

  );

}