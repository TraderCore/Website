'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { type FC, useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const currencyMap = {
    USD: '$',
    EUR: '€',
    GBP: '£',
};

export const EarningsWidget: FC<{
    className?: string;
}> = ({ className }) => {
    const data = useMemo(() => {
        return [
            { day: 'Mon', value: Math.floor(Math.random() * 1000) + 1000 },
            { day: 'Tue', value: Math.floor(Math.random() * 1000) + 1000 },
            { day: 'Wed', value: Math.floor(Math.random() * 1000) + 3000 },
            { day: 'Thu', value: Math.floor(Math.random() * 1000) + 1000 },
            { day: 'Fri', value: Math.floor(Math.random() * 1000) + 3000 },
            { day: 'Sat', value: Math.floor(Math.random() * 1000) + 1000 },
            { day: 'Sun', value: Math.floor(Math.random() * 1000) + 5000 },
        ];
    }, []);

    const currency = useMemo(() => {
        // Get Random Currency
        const currencies = Object.keys(
            currencyMap,
        ) as (keyof typeof currencyMap)[];
        return currencies[Math.floor(Math.random() * currencies.length)];
    }, []);

    const holdings = useMemo(() => {
        return [
            {
                name: `${currency}/AUD`,
                value: Math.floor(Math.random() * 1000) + 1000,
            },
            {
                name: `${currency}/UED`,
                value: Math.floor(Math.random() * 1000) + 1000,
            },
            {
                name: `${currency}/CAD`,
                value: Math.floor(Math.random() * 1000) + 1000,
            },
        ];
    }, []);

    const maxValue = useMemo(() => {
        return Math.max(...data.map((item) => item.value));
    }, [data]);

    const lastWeekChange = useMemo(() => {
        return Math.random() * 100 - 100;
    }, []);

    return (
        <Card
            className={cn(
                'w-[300px] h-min p-4 relative flex flex-col shrink-0 shadow-primary',
                'hover:shadow-md hover:shadow-primary transition-all duration-300 hover:translate-y-[-4px]',
                className,
            )}
        >
            <div className="flex items-center mb-4">
                <div>
                    <p className="text-sm text-muted-foreground">Equity</p>
                    <h2 className="text-2xl font-semibold">
                        {currencyMap[currency]}
                        {maxValue.toLocaleString()}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            {currency}
                        </span>
                    </h2>
                    <div className="flex items-center gap-1 mt-1">
                        {lastWeekChange > 0 ? (
                            <ArrowUpRight
                                className={cn(
                                    'w-3 h-3',
                                    lastWeekChange > 0
                                        ? 'text-success'
                                        : 'text-destructive',
                                )}
                            />
                        ) : (
                            <ArrowDownRight className="w-3 h-3 text-destructive" />
                        )}

                        <p
                            className={cn(
                                'text-xs',
                                lastWeekChange > 0
                                    ? 'text-success'
                                    : 'text-destructive',
                            )}
                        >
                            {lastWeekChange.toFixed(2).replace('-', '')}% from
                            last week
                        </p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                >
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                </Button>
            </div>
            <div className="">
                <h3 className="text-sm font-semibold mb-2">Top Holdings</h3>
                <ul className="flex flex-col gap-2">
                    {holdings.map((holding) => (
                        <li
                            key={holding.name}
                            className="flex items-center justify-between gap-2"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <p className="text-sm text-muted-foreground">
                                    {holding.name}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {currencyMap[currency]}
                                {holding.value.toLocaleString()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default EarningsWidget;
