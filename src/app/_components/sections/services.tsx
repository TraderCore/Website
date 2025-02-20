import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BarChart3, Bot, Globe2, Shield } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

const services = [
    {
        title: 'Market Analysis Tools',
        icon: BarChart3,
        description:
            'Advanced technical analysis tools, real-time market data, and customizable indicators for informed trading decisions.',
        link: '/services/market-analysis',
    },
    {
        title: 'Automated Trading',
        icon: Bot,
        description:
            'Build and deploy automated trading strategies with our robust algorithmic trading infrastructure.',
        link: '/services/automated-trading',
    },
    {
        title: 'Global Markets Access',
        icon: Globe2,
        description:
            'Trade across multiple markets including forex, stocks, cryptocurrencies, and commodities from a single platform.',
        link: '/services/global-markets',
    },
    {
        title: 'Risk Management',
        icon: Shield,
        description:
            'Comprehensive risk management tools to protect your portfolio and optimize trading performance.',
        link: '/services/risk-management',
    },
];

export const ServicesSection: FC = () => {
    return (
        <section className="container mx-auto py-16">
            <h2 className="mb-8 text-center font-semibold text-4xl sm:text-left">
                Our Trading Services
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <Card
                        key={service.title}
                        className="flex flex-col"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <service.icon className="h-5 w-5" />
                                {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">
                                {service.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href={service.link}>Learn More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
