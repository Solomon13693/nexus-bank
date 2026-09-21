import { ONBOARDING_STORAGE_KEY } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type OnboardingContextValue = {
    isReady: boolean;
    hasOnboarded: boolean;
    completeOnboarding: () => Promise<void>;
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
    const [hasOnboarded, setHasOnboarded] = useState<boolean | null>(null);

    useEffect(() => {
        AsyncStorage.clear();
        AsyncStorage.getItem(ONBOARDING_STORAGE_KEY)
            .then((value) => setHasOnboarded(value === "true"))
            .catch(() => setHasOnboarded(false));
    }, []);

    const completeOnboarding = useCallback(async () => {
        await AsyncStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
        setHasOnboarded(true);
    }, []);

    const value = useMemo<OnboardingContextValue>(
        () => ({
            isReady: hasOnboarded !== null,
            hasOnboarded: hasOnboarded === true,
            completeOnboarding,
        }),
        [hasOnboarded, completeOnboarding],
    );

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (!context) {
        throw new Error("useOnboarding must be used within OnboardingProvider");
    }
    return context;
}
