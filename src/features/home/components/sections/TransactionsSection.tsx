import { useRouter } from "expo-router";
import { View } from "react-native";
import SectionHeader from "../SectionHeader";
import TransactionRow from "../TransactionRow";
import { transactions } from "../../data";

export default function TransactionsSection() {
  const router = useRouter();

  return (
    <View className="mt-5 rounded-[22px] bg-home-panel px-4 py-4">
      <SectionHeader
        title="Recent Transactions"
        action="View All"
        onAction={() => router.push("/more")}
      />
      {transactions.map((transaction, index) => (
        <TransactionRow
          key={transaction.id}
          transaction={transaction}
          isFirst={index === 0}
        />
      ))}
    </View>
  );
}
