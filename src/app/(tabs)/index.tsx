import { SafeArea } from "@/components";
import {
    AccountsSection,
    HomeHeader,
    PromoSection,
    QuickActionsSection,
    TransactionsSection,
    WalletSection,
} from "@/features/home";
import { ScrollView } from "react-native";

const Home = () => {
    return (
        <SafeArea className="bg-home">
            <ScrollView
                className="flex-1"
                contentContainerClassName="px-4 pb-32"
                showsVerticalScrollIndicator={false}
            >
                <HomeHeader />
                <WalletSection />
                <QuickActionsSection />
                <AccountsSection />
                <PromoSection />
                <TransactionsSection />
            </ScrollView>
        </SafeArea>
    );
};

export default Home;
