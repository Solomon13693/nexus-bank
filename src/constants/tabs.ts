import Icons from "@/assets/icons";
import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export type AppTab = {
  name: string;
  title: string;
  icon: FC<SvgProps>;
};

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: Icons.HomeIcon },
  { name: "profile", title: "Profile", icon: Icons.ProfileIcon },
  { name: "transfer", title: "Transfer", icon: Icons.ArrowIcon },
  { name: "cards", title: "Cards", icon: Icons.CardIcon },
  { name: "more", title: "More", icon: Icons.CategoryIcon },
];
