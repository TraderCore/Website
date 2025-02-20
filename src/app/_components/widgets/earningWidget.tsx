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
    const data = [
        { day: 'Mon', value: 1500 },
        { day: 'Tue', value: 2800 },
        { day: 'Wed', value: 3200 },
        { day: 'Thu', value: 1800 },
        { day: 'Fri', value: 3500 },
        { day: 'Sat', value: 4200 },
        { day: 'Sun', value: 5100 },
    ];

    // Use USD as default currency
    const currency = 'USD' as keyof typeof currencyMap;

    const maxValue = Math.max(...data.map((item) => item.value));

    return (
        <Card
            className={cn(
                'relative flex h-min w-[300px] shrink-0 flex-col p-4 shadow-primary',
                'transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md hover:shadow-primary',
                className,
            )}
        >
            <div className="mb-4 flex items-center">
                <div>
                    <p className="text-muted-foreground text-sm">Balance</p>
                    <h2 className="font-semibold text-2xl">
                        {currencyMap[currency]}
                        {maxValue.toLocaleString()}{' '}
                        <span className="font-normal text-muted-foreground text-sm">
                            {currency}
                        </span>
                    </h2>
                    <div className="mt-1 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3 text-success" />
                        <p className="text-success text-xs">
                            +27% from last week
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
            <div className="-mt-4 -mb-3 h-[120px]">
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
