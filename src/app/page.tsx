import { HeroSection } from './_components/sections/hero';
import { OfferingsSection } from './_components/sections/offerings';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Work in Progress Banner */}
            <div className="bg-primary py-2 px-4 text-center z-[100]">
                <span className="text-sm text-primary-foreground font-medium">
                    🚧 Work in Progress - Development Site 🚧
                </span>
            </div>

            {/* Top Glow */}
            <div className="absolute top-4 left-0 w-full h-1/6 lg:h-1/3 bg-gradient-to-b from-primary from-20% via-primary/40 via-60% to-transparent dark:block hidden" />

            {/* Hero Section */}
            <HeroSection />

            {/* Offerings Section */}
            <OfferingsSection />
        </div>
    );
}
