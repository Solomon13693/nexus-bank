import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { Pressable, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  action: string;
  onAction: () => void;
  className?: string;
};

export default function SectionHeader({
  title,
  action,
  onAction,
  className,
}: SectionHeaderProps) {
  return (
    <View className={cn("flex-row items-center justify-between", className)}>
      <Typography className="text-[12px] text-home-muted">{title}</Typography>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={action}
        hitSlop={12}
        onPress={onAction}
        className="justify-center py-1"
      >
        <Typography className="text-[12px] font-medium text-brand">{action}</Typography>
      </Pressable>
    </View>
  );
}
