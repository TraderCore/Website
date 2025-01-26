'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
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
            { day: 'Tue', value: Math.floor(Math.random() * 1000) + 2000 },
            { day: 'Wed', value: Math.floor(Math.random() * 1000) + 3000 },
            { day: 'Thu', value: Math.floor(Math.random() * 1000) + 1000 },
            { day: 'Fri', value: Math.floor(Math.random() * 1000) + 3000 },
            { day: 'Sat', value: Math.floor(Math.random() * 1000) + 4000 },
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

    const maxValue = Math.max(...data.map((item) => item.value));

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
                    <p className="text-sm text-muted-foreground">Balance</p>
                    <h2 className="text-2xl font-semibold">
                        {currencyMap[currency]}
                        {maxValue.toLocaleString()}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            {currency}
                        </span>
                    </h2>
                    <div className="flex items-center gap-1 mt-1">
                        <ArrowUpRight className="w-3 h-3 text-success" />
                        <p className="text-xs text-success">
                            +{Math.floor(Math.random() * 100)}% from last week
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
            <div className="h-[120px] -mt-4 -mb-3">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={data}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            interval="preserveStartEnd"
                            tick={{
                                fill: 'hsl(var(--muted-foreground))',
                                fontSize: 12,
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="hsl(var(--success))"
                            strokeWidth={2}
                            dot={{
                                r: 4,
                                fill: 'hsl(var(--success))',
                                stroke: 'hsl(var(--success))',
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default EarningsWidget;
