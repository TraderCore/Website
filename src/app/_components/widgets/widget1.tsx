'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export default function EarningsWidget() {
    const data = useMemo(() => {
        return [
            { day: 'Mon', value: Math.floor(Math.random() * 1000) },
            { day: 'Tue', value: Math.floor(Math.random() * 2000) },
            { day: 'Wed', value: Math.floor(Math.random() * 4000) },
            { day: 'Thu', value: Math.floor(Math.random() * 6000) },
            { day: 'Fri', value: Math.floor(Math.random() * 8000) },
            { day: 'Sat', value: Math.floor(Math.random() * 10000) },
            { day: 'Sun', value: Math.floor(Math.random() * 12000) },
        ];
    }, []);

    const maxValue = Math.max(...data.map((item) => item.value));

    return (
        <Card className="w-[300px] h-min p-4 relative flex flex-col shrink-0">
            <div className="flex items-center mb-4">
                <div>
                    <p className="text-sm text-muted-foreground">Earnings</p>
                    <h2 className="text-2xl font-semibold">
                        ${maxValue.toLocaleString()}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            USD
                        </span>
                    </h2>
                    <div className="flex items-center gap-1 mt-1">
                        <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                        <p className="text-xs text-emerald-500">
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
            <div className="h-[120px] -mt-6">
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
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{
                                r: 4,
                                fill: 'hsl(var(--primary))',
                                stroke: 'hsl(var(--primary))',
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
