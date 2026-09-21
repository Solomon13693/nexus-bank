import {
    ActivityIndicator,
    Pressable,
    Text,
    View,
    type PressableProps,
    type PressableStateCallbackType,
    type StyleProp,
    type ViewStyle,
} from "react-native";
import type { ReactNode } from "react";
import { cn } from "@/lib";

type ButtonColor =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant =
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";

export interface ButtonProps
    extends Omit<PressableProps, "children" | "disabled" | "style"> {
    isDisabled?: boolean;
    color?: ButtonColor;
    size?: ButtonSize;
    className?: string;
    textClassName?: string;
    loading?: boolean;
    children?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: "min-h-12 px-5 rounded-lg",
    md: "min-h-15 px-6 rounded-xl",
    lg: "min-h-17 px-6 rounded-2xl",
};

const textSizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-base",
};

const solidClasses: Record<ButtonColor, string> = {
    default: "bg-foreground",
    primary: "bg-brand",
    secondary: "bg-secondary",
    success: "bg-green-600",
    warning: "bg-amber-500",
    danger: "bg-red-600",
};

const solidTextClasses: Record<ButtonColor, string> = {
    default: "text-white",
    primary: "text-[0A0C10]",
    secondary: "text-primary",
    success: "text-white",
    warning: "text-foreground",
    danger: "text-white",
};

const borderedClasses: Record<ButtonColor, string> = {
    default: "border border-foreground bg-transparent",
    primary: "border border-primary bg-transparent",
    secondary: "border border-secondary bg-transparent",
    success: "border border-green-600 bg-transparent",
    warning: "border border-amber-500 bg-transparent",
    danger: "border border-red-600 bg-transparent",
};

const borderedTextClasses: Record<ButtonColor, string> = {
    default: "text-foreground",
    primary: "text-primary",
    secondary: "text-foreground",
    success: "text-green-600",
    warning: "text-amber-600",
    danger: "text-red-600",
};

const lightClasses: Record<ButtonColor, string> = {
    default: "bg-muted/60",
    primary: "bg-primary-light",
    secondary: "bg-secondary/40",
    success: "bg-green-100",
    warning: "bg-amber-100",
    danger: "bg-red-100",
};

const lightTextClasses: Record<ButtonColor, string> = {
    default: "text-foreground",
    primary: "text-primary",
    secondary: "text-foreground",
    success: "text-green-700",
    warning: "text-amber-700",
    danger: "text-red-700",
};

const ghostTextClasses = borderedTextClasses;

const spinnerColors: Record<ButtonColor, string> = {
    default: "#FFFFFF",
    primary: "#FFFFFF",
    secondary: "#101010",
    success: "#FFFFFF",
    warning: "#101010",
    danger: "#FFFFFF",
};

const borderedSpinnerColors: Record<ButtonColor, string> = {
    default: "#101010",
    primary: "#4C4DDC",
    secondary: "#101010",
    success: "#16A34A",
    warning: "#D97706",
    danger: "#DC2626",
};

function getVariantClasses(variant: ButtonVariant, color: ButtonColor) {
    switch (variant) {
        case "solid":
        case "shadow":
            return {
                container: cn(solidClasses[color], variant === "shadow" && "shadow-md"),
                text: solidTextClasses[color],
                spinner: spinnerColors[color],
            };
        case "bordered":
        case "faded":
            return {
                container: cn(
                    borderedClasses[color],
                    variant === "faded" && "bg-muted/40",
                ),
                text: borderedTextClasses[color],
                spinner: borderedSpinnerColors[color],
            };
        case "light":
        case "flat":
            return {
                container: lightClasses[color],
                text: lightTextClasses[color],
                spinner: borderedSpinnerColors[color],
            };
        case "ghost":
            return {
                container: "bg-transparent",
                text: ghostTextClasses[color],
                spinner: borderedSpinnerColors[color],
            };
    }
}

export default function Button({
    isDisabled = false,
    onPress,
    color = "primary",
    size = "md",
    className,
    textClassName,
    loading = false,
    children,
    startContent,
    endContent,
    variant = "solid",
    style,
    ...rest
}: ButtonProps) {
    const disabled = isDisabled || loading;
    const styles = getVariantClasses(variant, color);

    return (
        <Pressable
            accessibilityRole="button"
            disabled={disabled}
            onPress={onPress}
            className={cn(className)}
            {...rest}>

            {({ pressed }: PressableStateCallbackType) => (
                <View
                    style={[
                        {
                            transform: [
                                { scale: pressed && !disabled ? 0.96 : 1 },
                            ],
                            opacity: disabled ? 0.6 : pressed ? 0.88 : 1,
                        },
                        style,
                    ]}>
                    <View
                        className={cn(
                            "flex-row items-center justify-center",
                            sizeClasses[size],
                            styles.container,
                            className,
                        )}>
                        {loading ? (
                            <ActivityIndicator
                                color={styles.spinner}
                                size="small"
                            />
                        ) : (
                            <View className="flex-row items-center justify-center gap-2">
                                {startContent}
                                {typeof children === "string" ||
                                typeof children === "number" ? (
                                    <Text
                                        className={cn(
                                            "font-semibold",
                                            textSizeClasses[size],
                                            styles.text,
                                            textClassName,
                                        )}
                                    >
                                        {children}
                                    </Text>
                                ) : (
                                    children
                                )}
                                {endContent}
                            </View>
                        )}
                    </View>
                </View>
            )}
        </Pressable>
    );
}
