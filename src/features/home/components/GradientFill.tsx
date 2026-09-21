import { useState, type ReactNode } from "react";
import { StyleSheet, View, type LayoutChangeEvent, type ViewStyle } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

type GradientFillProps = {
  id: string;
  colors: readonly [string, string, ...string[]];
  locations?: readonly number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle;
  className?: string;
  children?: ReactNode;
};

export default function GradientFill({
  id,
  colors,
  locations,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  style,
  className,
  children,
}: GradientFillProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize((current) =>
      current.width === width && current.height === height
        ? current
        : { width, height },
    );
  };

  return (
    <View
      className={className}
      style={[{ backgroundColor: colors[0] }, style]}
      onLayout={onLayout}
    >
      {size.width > 0 ? (
        <Svg
          width={size.width}
          height={size.height}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        >
          <Defs>
            <LinearGradient id={id} x1={start.x} y1={start.y} x2={end.x} y2={end.y}>
              {colors.map((color, index) => (
                <Stop
                  key={`${id}-${index}`}
                  offset={locations?.[index] ?? index / (colors.length - 1)}
                  stopColor={color}
                />
              ))}
            </LinearGradient>
          </Defs>
          <Rect width={size.width} height={size.height} fill={`url(#${id})`} />
        </Svg>
      ) : null}
      {children}
    </View>
  );
}
