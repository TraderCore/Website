import type { FC } from 'react';
import CurrencyPairWidget from '../widgets/currencyPairWidget';
import EarningsWidget from '../widgets/earningWidget';
import EquityWidget from '../widgets/equityWidget';

export const HeroSection: FC = () => {
    return (
        <section className="container relative mx-auto flex flex-col lg:flex-row lg:my-48 my-16 max-h-screen gap-4">
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-5xl font-semibold tracking-tight  sm:text-6xl md:text-7xl mb-8">
                    Take <span className="text-primary">control</span> of your
                    own trading framework
                </h1>
                <p className="mt-6 text-md text-muted-foreground">
                    At TraderCore, we're revolutionizing trading infrastructure.
                    Traditional brokerage/trading technology is outdated and
                    expensive - we're making it modern, open, and accessible
                    through open-source solutions.
                </p>
            </div>

            <div className=" justify-end relative gap-4 w-full h-64 hidden sm:flex">
                <EarningsWidget className="absolute top-0 lg:right-0 lg:left-auto left-0" />
                <CurrencyPairWidget className="absolute top-6 lg:top-1/3 lg:right-1/3 right-0" />
                <EquityWidget className="absolute -bottom-8 lg:bottom-auto lg:top-3/4 lg:right-[10%] right-1/2 translate-x-1/2 lg:translate-x-0" />
            </div>
        </section>
    );
};
