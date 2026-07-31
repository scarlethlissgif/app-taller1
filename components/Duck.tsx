import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

type Props = {
  onHit: () => void;
  onFinish: () => void;
};

const { width, height } = Dimensions.get("window");

// Frames de vuelo
const frames = [
  require("../assets/img/framer1.png"),
  require("../assets/img/framer2.png"),
  require("../assets/img/framer3.png"),
  require("../assets/img/framer4.png"),
  require("../assets/img/framer5.png"),
  require("../assets/img/framer6.png"),
  require("../assets/img/framer7.png"),
  require("../assets/img/framer8.png"),
  require("../assets/img/framer10.png"),
  require("../assets/img/framer11.png"),
];

// Frame del pato muerto
const deadFrame = require("../assets/img/framer11.png");

export default function Duck({ onHit, onFinish }: Props) {

  const randomX = () => Math.random() * (width - 120);
  const randomY = () => 50 + Math.random() * (height / 2);

  const [frame, setFrame] = useState(0);

  const [dead, setDead] = useState(false);

  const [x, setX] = useState(randomX());

  const [y, setY] = useState(randomY());

  const [dx, setDx] = useState(
    (Math.random() > 0.5 ? 1 : -1) * 7
  );

  const [dy, setDy] = useState(
    (Math.random() > 0.5 ? 1 : -1) * 6
  );

  // Animación de las alas
  useEffect(() => {

    if (dead) return;

    const animation = setInterval(() => {

      setFrame((old) => (old + 1) % frames.length);

    }, 80);

    return () => clearInterval(animation);

  }, [dead]);

  // Movimiento del pato
  useEffect(() => {

    if (dead) return;

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

        if (value <= 20 || value >= height - 320) {

          setDy((v) => -v);

        }

        return value;

      });

    }, 20);

    return () => clearInterval(movement);

  }, [dx, dy, dead]);

  // Cambia la dirección aleatoriamente
  useEffect(() => {

    if (dead) return;

    const randomDirection = setInterval(() => {

      setDx(
        (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 3)
      );

      setDy(
        (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 2)
      );

    }, 1800);

    return () => clearInterval(randomDirection);

  }, [dead]);




// Caída del pato cuando recibe un disparo
useEffect(() => {

  if (!dead) return;

  const fall = setInterval(() => {

    setY((old) => old + 12);

  }, 25);

  return () => clearInterval(fall);

}, [dead]);

// Cuando el pato sale de la pantalla
useEffect(() => {

  if (!dead) return;

  if (y >= height) {

    onFinish();

  }

}, [y, dead, onFinish]);

  return (

    <TouchableOpacity
      activeOpacity={1}
      disabled={dead}
      onPress={() => {

        if (dead) return;

        setDead(true);

        onHit();

      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
    >

      <Image
        source={dead ? deadFrame : frames[frame]}
        style={{
          width: 90,
          height: 90,
          resizeMode: "contain",
        }}
      />

    </TouchableOpacity>

  );

}