import type { ReactNode } from "react";
import { TextInput, View, type TextInputProps } from "react-native";
import { cn } from "@/lib";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import {
  formControlBase,
  formControlInvalid,
  radiusClasses,
} from "./constants";

export interface TextAreaProps
  extends Omit<TextInputProps, "onChange" | "onChangeText" | "value" | "multiline"> {
  label?: string | ReactNode;
  name: string;
  className?: string;
  formGroupClass?: string;
  labelClassName?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  error?: string;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  value?: string;
  onChangeText?: (text: string) => void;
  onChange?: (e: { target: { value: string; name: string } }) => void;
  numberOfLines?: number;
}

export default function TextArea({
  label,
  name,
  className,
  formGroupClass,
  labelClassName,
  startContent,
  endContent,
  fullWidth,
  error,
  radius = "md",
  value,
  onChangeText,
  onChange,
  onBlur,
  editable = true,
  numberOfLines = 4,
  placeholderTextColor = "#6B7280",
  ...props
}: TextAreaProps) {
  const emitChange = (text: string) => {
    onChangeText?.(text);
    onChange?.({ target: { value: text, name } });
  };

  return (
    <View className={cn("mb-4", formGroupClass, fullWidth && "w-full")}>
      {label ? <Label label={label} className={labelClassName} /> : null}

      <View className="relative w-full">
        {startContent ? (
          <View className="absolute left-3 top-3.5 z-10">{startContent}</View>
        ) : null}

        <TextInput
          {...props}
          accessibilityLabel={typeof label === "string" ? label : name}
          editable={editable}
          multiline
          numberOfLines={numberOfLines}
          textAlignVertical="top"
          value={value}
          onChangeText={emitChange}
          onBlur={onBlur}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          className={cn(
            formControlBase,
            "min-h-28 py-3 text-base",
            radiusClasses[radius],
            startContent && "pl-10",
            endContent && "pr-10",
            error && formControlInvalid,
            !editable && "opacity-60",
            className,
          )}
        />

        {endContent ? (
          <View className="absolute right-3 top-3.5 z-10">{endContent}</View>
        ) : null}
      </View>

      <ErrorMessage error={error} />
    </View>
  );
}
