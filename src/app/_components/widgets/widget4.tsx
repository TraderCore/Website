'use client';

import { Card } from '@/components/ui/card';
import { AlertCircle, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const events = [
    {
        time: '14:30 GMT',
        currency: 'USD',
        event: 'Non-Farm Payrolls',
        impact: 'high',
        value: 3,
    },
    {
        time: '15:00 GMT',
        currency: 'EUR',
        event: 'ECB Press Conference',
        impact: 'medium',
        value: 2,
    },
    {
        time: '16:30 GMT',
        currency: 'GBP',
        event: 'BOE Inflation Report',
        impact: 'high',
        value: 3,
    },
    {
        time: '18:00 GMT',
        currency: 'CAD',
        event: 'BOC Rate Decision',
        impact: 'medium',
        value: 2,
    },
];

export default function EconomicCalendarWidget() {
    return (
        <Card className="w-[300px] h-min p-4 relative flex flex-col shadow-primary shadow-lg">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm text-muted-foreground">
                        Economic Calendar
                    </h3>
                </div>
                <span className="text-sm text-muted-foreground">Next 24h</span>
            </div>

            <div className="space-y-3">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={'p-2 rounded'}
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                {event.impact === 'high' ? (
                                    <AlertCircle className="w-5 h-5 text-destructive" />
                                ) : (
                                    <Clock className="w-5 h-5 text-muted-foreground" />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm">
                                        {event.time}
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded bg-muted">
                                        {event.currency}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {event.event}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
