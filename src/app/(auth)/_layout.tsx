import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeArea, Typography } from "@/components";
import { Link, Slot, usePathname } from "expo-router";

const AuthLayout = () => {
    const pathname = usePathname();
    const isLogin = pathname === "/login";

    const data = [
        {
            title: "Welcome Back!",
            description: "Login to continue",
            linkText: "Create an Account?",
            linkHref: "/(auth)/signup" as const,
            linkText2: "Sign Up",
        },
        {
            title: "Create an Account",
            description:
                "Create an account to start managing your finances easily.",
            linkText: "Already have an account?",
            linkHref: "/(auth)/login" as const,
            linkText2: "Login",
        },
    ];

    const { title, description, linkText, linkHref, linkText2 } =
        data[isLogin ? 0 : 1];

    return (
        <SafeArea className="bg-[#060A11]">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 px-5">
                    
                <ScrollView
                    className="flex-1"
                    contentContainerClassName="min-h-full flex-grow justify-center py-6"
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>

                    <View className="items-center justify-center gap-y-2">
                        <Image
                            source={require("@/assets/img/logo.png")}
                            style={{ width: 55, height: 51 }}
                            resizeMode="contain"
                            className="mb-5"
                        />

                        <Typography color="white" className="text-3xl" weight="medium">
                            {title}
                        </Typography>

                        <Typography
                            className="text-center leading-8 text-gray-400"
                            size={16}
                            weight="medium"
                        >
                            {description}
                        </Typography>
                    </View>

                    <View className="mt-10 w-full">
                        <Slot />
                    </View>

                    <View className="flex-row items-center justify-center gap-1.5 pt-7">
                        <Typography className="text-center text-base font-medium text-gray-200">
                            {linkText}
                        </Typography>

                        <Link href={linkHref}>
                            <Typography className="text-center text-base font-bold text-brand">
                                {linkText2}
                            </Typography>
                        </Link>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeArea>
    );
};

export default AuthLayout;
