'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import type { FC } from 'react';

const data = {
    currency: 'GBP',
    currencySymbol: '£',
    totalEquity: 5522,
    weeklyChange: -18.86,
    holdings: [
        {
            name: 'GBP/AUD',
            value: 1269,
        },
        {
            name: 'GBP/UED',
            value: 1265,
        },
        {
            name: 'GBP/CAD',
            value: 1218,
        },
    ],
};

export const EquityWidget: FC<{
    className?: string;
}> = ({ className }) => {
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
                    <p className="text-muted-foreground text-sm">Equity</p>
                    <h2 className="font-semibold text-2xl">
                        {data.currencySymbol}
                        {data.totalEquity.toLocaleString()}{' '}
                        <span className="font-normal text-muted-foreground text-sm">
                            {data.currency}
                        </span>
                    </h2>
                    <div className="mt-1 flex items-center gap-1">
                        {data.weeklyChange > 0 ? (
                            <ArrowUpRight className="h-3 w-3 text-success" />
                        ) : (
                            <ArrowDownRight className="h-3 w-3 text-destructive" />
                        )}

                        <p
                            className={cn(
                                'text-xs',
                                data.weeklyChange > 0
                                    ? 'text-success'
                                    : 'text-destructive',
                            )}
                        >
                            {Math.abs(data.weeklyChange).toFixed(2)}% from last
                            week
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
            <div>
                <h3 className="mb-2 font-semibold text-sm">Top Holdings</h3>
                <ul className="flex flex-col gap-2">
                    {data.holdings.map((holding) => (
                        <li
                            key={holding.name}
                            className="flex items-center justify-between gap-2"
                        >
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <p className="text-muted-foreground text-sm">
                                    {holding.name}
                                </p>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {data.currencySymbol}
                                {holding.value.toLocaleString()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default EquityWidget;
