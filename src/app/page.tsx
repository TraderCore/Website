import { Button } from '@/components/ui/button';
import { Footer } from './_components/footer';
import CurrencyPairWidget from './_components/widgets/currencyPairWidget';
import EarningsWidget from './_components/widgets/earningWidget';
import MarketSentimentWidget from './_components/widgets/widget3';
import EconomicCalendarWidget from './_components/widgets/widget4';

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
            <section className="container relative mx-auto flex flex-col lg:flex-row lg:my-60 my-16 max-h-screen gap-4">
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-5xl font-semibold tracking-tight  sm:text-6xl md:text-7xl mb-8">
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

                <div className=" justify-end relative gap-4 w-full h-64 hidden sm:flex">
                    <EarningsWidget className="absolute top-0 right-0" />
                    <CurrencyPairWidget className="absolute top-1/3 right-1/3" />
                </div>
            </section>

            <section className="container mx-auto">
                <h2 className="text-4xl font-semibold mb-8">What we offer</h2>
            </section>
        </div>
    );
}
