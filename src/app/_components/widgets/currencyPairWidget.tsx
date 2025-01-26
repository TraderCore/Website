'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, MoreHorizontal } from 'lucide-react';
import { type FC, useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export const CurrencyPairWidget: FC<{
    className?: string;
}> = ({ className }) => {
    const pairData = useMemo(() => {
        const baseRate = 1.08 + Math.random() * 0.3;
        return [
            { time: '00:00', rate: baseRate },
            { time: '04:00', rate: baseRate + (Math.random() * 0.02 - 0.01) },
            { time: '08:00', rate: baseRate + (Math.random() * 0.03 - 0.015) },
            { time: '12:00', rate: baseRate + (Math.random() * 0.04 - 0.02) },
            { time: '16:00', rate: baseRate + (Math.random() * 0.05 - 0.025) },
            { time: '20:00', rate: baseRate + (Math.random() * 0.06 - 0.03) },
        ];
    }, []);

    const currentRate = pairData[pairData.length - 1].rate;
    const dailyChange = (
        ((currentRate - pairData[0].rate) / pairData[0].rate) *
        100
    ).toFixed(2);

    return (
        <Card
            className={cn(
                'w-[300px] h-min p-4 relative flex flex-col shadow-primary',
                'hover:shadow-md hover:shadow-primary transition-all duration-300 hover:translate-y-[-4px]',
                className,
            )}
        >
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm text-muted-foreground">EUR/USD</p>
                    <h2 className="text-2xl font-semibold">
                        {currentRate.toFixed(4)}
                        <span
                            className={`ml-2 text-sm ${dailyChange.startsWith('-') ? 'text-red-500' : 'text-emerald-500'}`}
                        >
                            {dailyChange}%
                            {dailyChange.startsWith('-') ? (
                                <ArrowDown className="inline ml-1 w-4 h-4" />
                            ) : (
                                <ArrowUp className="inline ml-1 w-4 h-4" />
                            )}
                        </span>
                    </h2>
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
            <div className="h-[120px] -mt-2 -mb-4">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={pairData}>
                        <XAxis
                            dataKey="time"
                            tick={{ fontSize: 10 }}
                        />
                        <YAxis
                            width={40}
                            tick={{ fontSize: 10 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="rate"
                            stroke={
                                dailyChange.startsWith('-')
                                    ? 'hsl(var(--destructive))'
                                    : 'hsl(var(--primary))'
                            }
                            strokeWidth={1.5}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default CurrencyPairWidget;
