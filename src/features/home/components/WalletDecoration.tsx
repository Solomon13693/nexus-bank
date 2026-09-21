import { Image } from "react-native";
import GradientFill from "./GradientFill";

export default function WalletDecoration() {
  return (
    <>
      <GradientFill
        id="wallet-bg"
        colors={["#1A1D16", "#24271E", "#2A2D22"]}
        locations={[0, 0.4, 1]}
        start={{ x: 0, y: 0.15 }}
        end={{ x: 1, y: 0.85 }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
      <Image
        source={require("@/assets/img/effects/wallet-deco.png")}
        resizeMode="contain"
        pointerEvents="none"
        style={{
          position: "absolute",
          top: -4,
          right: -8,
          width: 176,
          height: 124,
        }}
      />
    </>
  );
}
