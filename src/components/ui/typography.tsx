import { Text, type TextProps, type StyleProp, type TextStyle } from "react-native";
import type { ReactNode } from "react";
import { cn } from "@/lib";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "label"
  | "overline";

type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | number;

type FontWeight = "thin" | "normal" | "medium" | "semibold" | "bold";

type TextColor =
  | "foreground"
  | "primary"
  | "primary-light"
  | "secondary"
  | "muted"
  | "white"
  | "black"
  | "success"
  | "warning"
  | "danger";

type TextAlign = "left" | "center" | "right" | "justify";
type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
type TextDecoration = "none" | "underline" | "line-through";

export interface TypographyProps extends Omit<TextProps, "style" | "children"> {
  children?: ReactNode;
  variant?: TypographyVariant;
  size?: FontSize;
  weight?: FontWeight;
  color?: TextColor | (string & {});
  align?: TextAlign;
  transform?: TextTransform;
  decoration?: TextDecoration;
  italic?: boolean;
  className?: string;
  style?: StyleProp<TextStyle>;
}

// Use Inter-* font files directly. Do not pair custom fonts with font-bold /
// font-semibold weight utilities — iOS often renders that text as invisible.
const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold text-foreground",
  h2: "text-3xl font-bold text-foreground",
  h3: "text-2xl font-semibold text-foreground",
  h4: "text-xl font-semibold text-foreground",
  title: "text-lg font-semibold text-foreground",
  subtitle: "text-base font-medium text-foreground",
  body: "text-base font-inter text-foreground",
  caption: "text-sm font-inter text-muted",
  label: "text-sm font-medium text-foreground",
  overline: "text-xs font-medium uppercase tracking-widest text-muted",
};

const sizeClasses: Record<Exclude<FontSize, number>, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const weightClasses: Record<FontWeight, string> = {
  thin: "font-thin",
  normal: "font-inter",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<TextColor, string> = {
  foreground: "text-foreground",
  primary: "text-primary",
  "primary-light": "text-primary-light",
  secondary: "text-secondary",
  muted: "text-muted",
  white: "text-white",
  black: "text-black",
  success: "text-green-600",
  warning: "text-amber-600",
  danger: "text-red-600",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const transformClasses: Record<TextTransform, string> = {
  none: "normal-case",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

const decorationClasses: Record<TextDecoration, string> = {
  none: "no-underline",
  underline: "underline",
  "line-through": "line-through",
};

const themeColors = new Set<string>([
  "foreground",
  "primary",
  "primary-light",
  "secondary",
  "muted",
  "white",
  "black",
  "success",
  "warning",
  "danger",
]);

export default function Typography({
  children,
  variant = "body",
  size,
  weight,
  color,
  align,
  transform,
  decoration,
  italic = false,
  className,
  style,
  ...rest
}: TypographyProps) {
  const isCustomSize = typeof size === "number";
  const isThemeColor = color !== undefined && themeColors.has(color);
  const isCustomColor = color !== undefined && !isThemeColor;

  return (
    <Text
      className={cn(
        "text-foreground font-sans",
        variantClasses[variant],
        !isCustomSize && size !== undefined && sizeClasses[size],
        weight !== undefined && weightClasses[weight],
        isThemeColor && colorClasses[color as TextColor],
        align !== undefined && alignClasses[align],
        transform !== undefined && transformClasses[transform],
        decoration !== undefined && decorationClasses[decoration],
        italic && "italic",
        className,
      )}
      style={[
        { fontWeight: "normal" },
        isCustomSize ? { fontSize: size } : null,
        isCustomColor ? { color } : null,
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
}
