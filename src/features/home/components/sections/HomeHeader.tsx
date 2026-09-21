import Icons from "@/assets/icons";
import { Typography } from "@/components/ui";
import { homeColors } from "../../theme";
import { getGreeting, user } from "../../data";
import { Image, Pressable, View } from "react-native";

export default function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between pt-1">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 overflow-hidden rounded-full bg-home-surface">
          <Image
            source={user.avatar}
            accessibilityLabel={`${user.name} profile photo`}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View>
          <Typography className="text-[12px] text-home-muted">{getGreeting()}</Typography>
          <Typography className="text-[16px] font-semibold text-white">{user.name}</Typography>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        hitSlop={8}
        className="h-11 w-11 items-center justify-center"
      >
        <Icons.BellIcon color={homeColors.icon} width={22} height={22} />
        <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-brand" />
      </Pressable>
    </View>
  );
}
