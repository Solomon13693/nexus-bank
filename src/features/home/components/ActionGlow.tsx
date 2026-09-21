import { Image } from "react-native";

const GLOW_PAD = 36;

export default function ActionGlow() {
  return (
    <Image
      source={require("@/assets/img/effects/action-glow.png")}
      pointerEvents="none"
      style={{
        position: "absolute",
        top: -31.68 - GLOW_PAD,
        left: -29.94 - GLOW_PAD,
        width: 90.17 + GLOW_PAD * 2,
        height: 54.43 + GLOW_PAD * 2,
        transform: [{ rotate: "24.41deg" }],
      }}
    />
  );
}
