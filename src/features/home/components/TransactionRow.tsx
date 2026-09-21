import Icons from "@/assets/icons";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { Pressable, View } from "react-native";
import type { transactions } from "../data";
import { homeColors } from "../theme";

type Transaction = (typeof transactions)[number];

type TransactionRowProps = {
  transaction: Transaction;
  isFirst: boolean;
};

export default function TransactionRow({ transaction, isFirst }: TransactionRowProps) {
  const Icon = transaction.icon;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${transaction.name} ${transaction.amount}`}
      className={cn("flex-row items-center py-3.5", isFirst && "mt-1 border-b border-white/10")}
    >
      <Icon width={40} height={40} />
      <View className="ml-3 flex-1">
        <Typography className="text-[12px] font-medium text-white">
          {transaction.name}
        </Typography>
        <Typography className="mt-1 text-[10px] text-home-subtle">
          {transaction.date}
        </Typography>
      </View>
      <Typography className="mr-2 text-[12px] font-medium text-white">
        {transaction.amount}
      </Typography>
      <Icons.ChevronRightIcon color={homeColors.brand} width={14} height={14} />
    </Pressable>
  );
}
