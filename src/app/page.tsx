import { DocumentationSection } from './_components/sections/documentation';
import { HeroSection } from './_components/sections/hero';
import { OfferingsSection } from './_components/sections/offerings';
import { RoadmapSection } from './_components/sections/roadmap';
import { ServicesSection } from './_components/sections/services';

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col">
            {/* Work in Progress Banner */}
            <div className="bg-primary px-4 py-2 text-center">
                <span className="font-medium text-primary-foreground text-sm">
                    🚧 Work in Progress - Development Site 🚧
                </span>
            </div>

            {/* Top Glow */}
            <div className="absolute top-8 left-0 hidden h-1/6 w-full bg-gradient-to-b from-20% from-primary via-60% via-primary/40 to-transparent lg:h-1/3 dark:block" />

            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Documentation Section */}
            <DocumentationSection />

            {/* Offerings Section */}
            <OfferingsSection />

            {/* Roadmap Section */}
            <RoadmapSection />
        </div>
    );
}
