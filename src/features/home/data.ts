import Icons from "@/assets/icons";
import type { Href } from "expo-router";
import type { FC } from "react";
import type { ImageSourcePropType } from "react-native";
import type { SvgProps } from "react-native-svg";

export const user = {
  name: "James kay.",
  avatar: require("@/assets/img/avatar.png") as ImageSourcePropType,
};

export const wallet = {
  balance: "$6,783.32",
  card: "****657483",
};

export const actions: {
  key: string;
  title: string;
  subtitle: string;
  href: Href;
  icon: FC<SvgProps>;
}[] = [
  { key: "send", title: "Send", subtitle: "Money", href: "/transfer", icon: Icons.SendIcon },
  { key: "receive", title: "Receive", subtitle: "Money", href: "/transfer", icon: Icons.ReceiveIcon },
  { key: "bills", title: "Pay Bills", subtitle: "& Utilities", href: "/more", icon: Icons.BillsIcon },
  { key: "topup", title: "Top Up", subtitle: "Mobile", href: "/more", icon: Icons.PlusIcon },
];

export const accounts = [
  {
    id: "1",
    name: "Nexus Checking",
    number: "1235 *** 7654",
    balance: "$4,657.20",
    status: "Active",
    highlight: true,
  },
  {
    id: "2",
    name: "Nexus Checking",
    number: "1235 *** 7654",
    balance: "$4,657.20",
    status: "Active",
    highlight: false,
  },
];

export const transactions = [
  {
    id: "1",
    name: "Spotify",
    date: "Today, 10:30 AM",
    amount: "-$9.99",
    icon: Icons.SpotifyIcon,
  },
  {
    id: "2",
    name: "Amazon",
    date: "Yesterday, 10:30 AM",
    amount: "-$5.99",
    icon: Icons.AmazonIcon,
  },
];

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}
