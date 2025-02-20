import { CurrencyPairWidget } from '@/app/_components/widgets/currencyPairWidget';
import { EarningsWidget } from '@/app/_components/widgets/earningWidget';
import EquityWidget from '@/app/_components/widgets/equityWidget';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BellRing, LineChart, Newspaper, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

export const MarketResourcesSection: FC = () => {
    return (
        <section className="container mx-auto py-16">
            <div className="text-center mb-12">
                <h2 className="font-semibold text-4xl mb-4">
                    Market Resources
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Access real-time market data, analysis tools, and trading
                    insights to make informed trading decisions.
                </p>
            </div>

            {/* Live Market Widgets */}
            <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5" />
                            Currency Pairs
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CurrencyPairWidget />
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Earnings Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <EarningsWidget />
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5" />
                            Equity Performance
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <EquityWidget />
                    </CardContent>
                </Card>
            </div>

            {/* Additional Resources */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Newspaper className="h-5 w-5" />
                            Market News
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                            Stay updated with the latest market news, economic
                            events, and trading opportunities.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="outline"
                            asChild
                        >
                            <Link href="/market-news">View Latest News</Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BellRing className="h-5 w-5" />
                            Market Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                            Set up custom alerts for price movements, technical
                            indicators, and market events.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="outline"
                            asChild
                        >
                            <Link href="/market-alerts">Configure Alerts</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};
