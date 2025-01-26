import { Button } from '@/components/ui/button';
import { Footer } from './_components/footer';
import EarningsWidget from './_components/widgets/widget1';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Work in Progress Banner */}
            <div className="bg-primary py-2 px-4 text-center border-b">
                <span className="text-sm text-primary-foreground font-medium">
                    🚧 Work in Progress - Development Site 🚧
                </span>
            </div>

            {/* Hero Section */}
            <section className="container relative mx-auto flex flex-col md:flex-row my-24 gap-4">
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-6xl font-semibold tracking-tight  sm:text-7xl mb-8">
                        Take <span className="text-primary">control</span> of
                        your own trading framework
                    </h1>
                    <p className="mt-6 text-md text-muted-foreground">
                        At TraderCore, we're revolutionizing trading
                        infrastructure. Traditional brokerage/trading technology
                        is outdated and expensive - we're making it modern,
                        open, and accessible through open-source solutions.
                    </p>
                </div>

                <div className="w-full flex justify-end">
                    <EarningsWidget />
                </div>
            </section>

            {/* Add footer at bottom */}
            <Footer />
        </div>
    );
}
