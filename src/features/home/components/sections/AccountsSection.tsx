import { useRouter } from "expo-router";
import { View } from "react-native";
import AccountRow from "../AccountRow";
import SectionHeader from "../SectionHeader";
import { accounts } from "../../data";

export default function AccountsSection() {
  const router = useRouter();

  return (
    <View className="mt-6">
      <SectionHeader
        title="My Accounts"
        action="View All"
        onAction={() => router.push("/cards")}
      />
      <View className="mt-3 gap-3">
        {accounts.map((account) => (
          <AccountRow
            key={account.id}
            account={account}
            onPress={() => router.push("/cards")}
          />
        ))}
      </View>
    </View>
  );
}
