import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';
import CurrencyPairWidget from '../widgets/currencyPairWidget';
import EarningsWidget from '../widgets/earningWidget';
import EquityWidget from '../widgets/equityWidget';

export const HeroSection: FC = () => {
    return (
        <section className="container relative mx-auto my-16 flex max-h-screen flex-col gap-4 lg:my-48 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="font-semibold text-5xl tracking-tight sm:text-6xl md:text-7xl">
                    Take <span className="text-primary">control</span> of your
                    own trading framework
                </h1>
                <p className="my-8 text-md text-muted-foreground">
                    At TraderCore, we're revolutionizing trading infrastructure.
                    Traditional brokerage/trading technology is outdated and
                    expensive - we're making it modern, open, and accessible
                    through open-source solutions.
                </p>
                <div className="flex flex-row gap-4">
                    <Button variant="outline">Learn More</Button>
                    <Button asChild>
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            </div>

            <div className="relative hidden h-64 w-full justify-end gap-4 sm:flex">
                <EarningsWidget className="absolute top-0 left-0 lg:right-0 lg:left-auto" />
                <CurrencyPairWidget className="absolute top-6 right-0 lg:top-1/3 lg:right-[45%]" />
                <EquityWidget className="-bottom-8 absolute right-1/2 translate-x-1/2 lg:top-3/4 lg:right-[10%] lg:bottom-auto lg:translate-x-0" />
            </div>
        </section>
    );
};
