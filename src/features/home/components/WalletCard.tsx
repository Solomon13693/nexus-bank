import { Typography } from "@/components/ui";
import { Pressable, View } from "react-native";
import { wallet } from "../data";
import WalletDecoration from "./WalletDecoration";

type WalletCardProps = {
  onPress: () => void;
};

export default function WalletCard({ onPress }: WalletCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Wallet balance"
      onPress={onPress}
      className="mt-3 h-[190px] justify-between overflow-hidden rounded-[22px] px-5 py-5"
    >
      <WalletDecoration />

      <View>
        <Typography className="text-[14px] text-home-muted">Balance</Typography>
        <Typography className="mt-1 text-[30px] font-semibold text-white">
          {wallet.balance}
        </Typography>
      </View>

      <View className="flex-row items-end justify-between">
        <View>
          <Typography className="text-[12px] text-home-muted">Card</Typography>
          <Typography className="mt-1 text-[16px] font-medium text-white">
            {wallet.card}
          </Typography>
        </View>
        <View className="items-end">
          <Typography className="text-[12px] text-home-muted">CVV</Typography>
          <View className="mt-2 flex-row items-center gap-1.5">
            <View className="h-1.5 w-1.5 rounded-full bg-white" />
            <View className="h-1.5 w-1.5 rounded-full bg-white" />
            <View className="h-1.5 w-1.5 rounded-full bg-white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
