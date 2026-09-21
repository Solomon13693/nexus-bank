import { useRouter } from "expo-router";
import { View } from "react-native";
import QuickActionCard from "../QuickActionCard";
import { actions } from "../../data";

export default function QuickActionsSection() {
  const router = useRouter();

  return (
    <View className="mt-4 flex-row gap-2">
      {actions.map((action) => (
        <QuickActionCard
          key={action.key}
          action={action}
          onPress={() => router.push(action.href)}
        />
      ))}
    </View>
  );
}
