import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "../../global.css";
import { OnboardingProvider, useOnboarding } from "@/hooks";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <RootNavigator />
    </OnboardingProvider>
  );
}

function RootNavigator() {

  const [isAuthenticated] = useState(true);
  const { isReady, hasOnboarded } = useOnboarding();

  const [loaded, error] = useFonts({
    "Sora-Regular": require("../../assets/fonts/sora/Sora-Regular.ttf"),
    "Sora-Medium": require("../../assets/fonts/sora/Sora-Medium.ttf"),
    "Sora-SemiBold": require("../../assets/fonts/sora/Sora-SemiBold.ttf"),
    "Sora-Bold": require("../../assets/fonts/sora/Sora-Bold.ttf"),
    "Sora-ExtraBold": require("../../assets/fonts/sora/Sora-ExtraBold.ttf"),
  });

  useEffect(() => {
    if ((loaded || error) && isReady) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, isReady]);

  if ((!loaded && !error) || !isReady) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!hasOnboarded}>
        <Stack.Screen name="(onboarding)" />
      </Stack.Protected>

      <Stack.Protected guard={hasOnboarded && !isAuthenticated}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={hasOnboarded && isAuthenticated}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      
    </Stack>
  );
}
