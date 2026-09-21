import { useEffect, useState, type ReactNode } from "react";
import {
  Platform,
  Pressable,
  TextInput,
  View,
  type KeyboardTypeOptions,
  type TextInputProps,
} from "react-native";
import { cn } from "@/lib";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import { EyeIcon, EyeOffIcon } from "./icons";
import {
  formControlBase,
  formControlInvalid,
  radiusClasses,
  sizeClasses,
  sizePaddingX,
} from "./constants";

type InputType = "text" | "password" | "email" | "tel" | "numeric" | "number";

export interface InputProps
  extends Omit<TextInputProps, "onChange" | "onChangeText" | "value"> {
  label?: string | ReactNode;
  name: string;
  className?: string;
  formGroupClass?: string;
  labelClassName?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  inputSize?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  error?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onChange?: (e: { target: { value: string; name: string } }) => void;
  isCurrency?: boolean;
  type?: InputType;
}

const formatCurrency = (value: string) => {
  const number = parseFloat(value.replace(/,/g, ""));
  if (isNaN(number)) return "";
  return number.toLocaleString();
};

const unformatCurrency = (value: string) => value.replace(/,/g, "");

function keyboardForType(type: InputType): KeyboardTypeOptions | undefined {
  switch (type) {
    case "email":
      return "email-address";
    case "tel":
      return "phone-pad";
    case "numeric":
    case "number":
      return "numeric";
    default:
      return "default";
  }
}

export default function Input({
  label,
  name,
  className,
  formGroupClass,
  labelClassName,
  startContent,
  endContent,
  fullWidth,
  inputSize = "md",
  radius = "md",
  error,
  value,
  onChangeText,
  onChange,
  onBlur,
  isCurrency = false,
  type = "text",
  editable = true,
  placeholderTextColor = "#6B7280",
  ...props
}: InputProps) {
  const isPassword = type === "password";
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(() => {
    if (isCurrency && value) return formatCurrency(String(value));
    return value ?? "";
  });

  useEffect(() => {
    if (isCurrency && value !== undefined) {
      setDisplayValue(formatCurrency(String(value)));
    }
  }, [value, isCurrency]);

  const emitChange = (rawValue: string) => {
    onChangeText?.(rawValue);
    onChange?.({ target: { value: rawValue, name } });
  };

  const handleChangeText = (text: string) => {
    if (isCurrency) {
      const rawValue = unformatCurrency(text);
      setDisplayValue(formatCurrency(rawValue));
      emitChange(rawValue);
      return;
    }
    emitChange(text);
  };

  const inputValue = isCurrency ? displayValue : value;
  const secure = isPassword && !visible;

  const resolvedEndContent =
    endContent ??
    (isPassword ? (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={visible ? "Hide password" : "Show password"}
        hitSlop={8}
        onPress={() => setVisible((v) => !v)}
        className="min-h-12 min-w-12 items-center justify-center">
        {visible ? <EyeOffIcon size={22} /> : <EyeIcon size={22} />}
      </Pressable>
    ) : null);

  const paddingX = sizePaddingX[inputSize];
  const paddingLeft = startContent ? 40 : paddingX;
  const paddingRight = resolvedEndContent ? 48 : paddingX;

  return (
    <View className={cn("mb-4", formGroupClass, fullWidth && "w-full")}>
      {label ? <Label label={label} className={labelClassName} /> : null}

      <View className="relative w-full justify-center">
        {startContent ? (
          <View className="absolute left-3 z-10">{startContent}</View>
        ) : null}

        <TextInput
          {...props}
          accessibilityLabel={typeof label === "string" ? label : name}
          editable={editable}
          keyboardType={keyboardForType(type)}
          autoCapitalize={type === "email" ? "none" : props.autoCapitalize}
          autoCorrect={
            type === "password" || type === "email"
              ? false
              : props.autoCorrect
          }
          secureTextEntry={secure}
          value={inputValue}
          onChangeText={handleChangeText}
          onBlur={onBlur}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          textAlignVertical="center"
          style={[
            {
              paddingLeft,
              paddingRight,
              ...(Platform.OS === "android"
                ? { paddingVertical: 0, includeFontPadding: false }
                : null),
            },
            props.style,
          ]}
          className={cn(
            formControlBase,
            sizeClasses[inputSize],
            radiusClasses[radius],
            error && formControlInvalid,
            !editable && "opacity-60",
            className,
          )}
        />

        {resolvedEndContent ? (
          <View className="absolute right-2 z-10">{resolvedEndContent}</View>
        ) : null}
      </View>

      <ErrorMessage error={error} />
    </View>
  );
}
