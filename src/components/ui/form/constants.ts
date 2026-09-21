export const sizeClasses: Record<string, string> = {
  sm: "min-h-12 text-sm",
  md: "min-h-15 text-base",
  lg: "min-h-17 text-base",
};

/** Explicit px — Android TextInput often ignores NativeWind padding utilities */
export const sizePaddingX: Record<"sm" | "md" | "lg", number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export const radiusClasses: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
};

export const formControlBase =
  "w-full border border-stroke bg-[#282C2D]/50 text-white outline-none placeholder:text-gray-[#98A2B3] font-medium text-sm focus:border-brand/40 font-sans";

export const formControlInvalid = "border-red-500 focus:border-red-500";
