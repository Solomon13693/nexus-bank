import { Typography } from "@/components/ui";
import { useRouter } from "expo-router";
import { Image, Pressable } from "react-native";
import GradientFill from "../GradientFill";

export default function PromoSection() {
  const router = useRouter();

  return (
    <GradientFill
      id="promo-bg"
      colors={["#151810", "#1C2014", "#2A3210"]}
      start={{ x: 0, y: 0.55 }}
      end={{ x: 1, y: 0.2 }}
      className="relative mt-5 min-h-37 overflow-hidden rounded-[22px]"
      style={{ minHeight: 148, paddingHorizontal: 20, paddingVertical: 20 }}
    >
      <Image
        source={require("@/assets/img/transfer-cards.png")}
        resizeMode="contain"
        pointerEvents="none"
        style={{
          position: "absolute",
          right: -12,
          bottom: -6,
          width: 168,
          height: 132,
        }}
      />

      <Typography className="w-[58%] text-[14px] font-medium text-white">
        Transfer money instantly
      </Typography>
      <Typography className="mt-1.5 text-[10px] text-home-muted">
        To anyone, anywhere
      </Typography>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Send now"
        onPress={() => router.push("/transfer")}
        className="mt-6 self-start rounded-full bg-brand px-6 py-3"
      >
        <Typography className="text-[12px] font-semibold text-[#0A0C10]">
          Send Now
        </Typography>
      </Pressable>
    </GradientFill>
  );
}
