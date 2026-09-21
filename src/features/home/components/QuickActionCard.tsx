import Icons from "@/assets/icons";
import { Typography } from "@/components/ui";
import { Pressable, View } from "react-native";
import type { actions } from "../data";
import { homeColors } from "../theme";
import ActionGlow from "./ActionGlow";
import GradientFill from "./GradientFill";

type QuickAction = (typeof actions)[number];

type QuickActionCardProps = {
  action: QuickAction;
  onPress: () => void;
};

export default function QuickActionCard({ action, onPress }: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${action.title} ${action.subtitle}`}
      onPress={onPress}
      className="min-h-25 flex-1 overflow-hidden rounded-[18px]"
    >
      <GradientFill
        id={`action-bg-${action.key}`}
        colors={["#1E2218", "#141810"]}
        start={{ x: 0.35, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1, minHeight: 100, justifyContent: "space-between", padding: 12 }}
      >
        <ActionGlow />
        <Icon color={homeColors.brand} width={18} height={18} />
        <View>
          <Typography className="text-[12px] font-medium text-white" numberOfLines={1}>
            {action.title}
          </Typography>
          <View className="mt-0.5 flex-row items-center justify-between">
            <Typography className="text-[10px] text-home-subtle" numberOfLines={1}>
              {action.subtitle}
            </Typography>
            <Icons.ArrowRightIcon color={homeColors.subtle} width={14} height={14} />
          </View>
        </View>
      </GradientFill>
    </Pressable>
  );
}
