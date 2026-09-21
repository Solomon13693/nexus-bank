import { useRouter } from "expo-router";
import { View } from "react-native";
import SectionHeader from "../SectionHeader";
import WalletCard from "../WalletCard";

export default function WalletSection() {
  const router = useRouter();

  return (
    <View className="mt-6">
      <SectionHeader
        title="My Wallet"
        action="+Add"
        onAction={() => router.push("/cards")}
      />
      <WalletCard onPress={() => router.push("/cards")} />
    </View>
  );
}
