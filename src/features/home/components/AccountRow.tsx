import Icons from "@/assets/icons";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { Pressable, View } from "react-native";
import type { accounts } from "../data";
import { homeColors } from "../theme";

type Account = (typeof accounts)[number];

type AccountRowProps = {
  account: Account;
  onPress: () => void;
};

export default function AccountRow({ account, onPress }: AccountRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${account.name} ${account.balance}`}
      onPress={onPress}
      className="flex-row items-center rounded-[18px] bg-home-surface px-3 py-3.5"
    >
      <View
        className={cn(
          "h-11 w-11 items-center justify-center rounded-full",
          account.highlight ? "bg-brand" : "bg-[#2A2F36]",
        )}
      >
        <Icons.CardIcon
          color={account.highlight ? homeColors.onBrand : "#F4F4F4"}
          width={20}
          height={20}
        />
      </View>

      <View className="ml-3 flex-1">
        <Typography className="text-[12px] font-medium text-white">
          {account.name}
        </Typography>
        <Typography className="mt-1 text-[10px] text-home-subtle">
          {account.number}
        </Typography>
      </View>

      <View className="items-end">
        <Typography className="text-[12px] font-medium text-white">
          {account.balance}
        </Typography>
        <Typography className="mt-1 text-[10px] text-home-active">
          {account.status}
        </Typography>
      </View>
    </Pressable>
  );
}
