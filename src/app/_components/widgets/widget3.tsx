'use client';

import { Card } from '@/components/ui/card';
import { useMemo } from 'react';
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

const COLORS = ['#10b981', '#ef4444', '#3b82f6'];

export default function MarketSentimentWidget() {
    const sentimentData = useMemo(
        () => [
            { name: 'Long', value: Math.floor(Math.random() * 40) + 30 },
            { name: 'Short', value: Math.floor(Math.random() * 30) + 20 },
            { name: 'Neutral', value: Math.floor(Math.random() * 30) + 20 },
        ],
        [],
    );

    return (
        <Card className="w-[300px] h-min p-4 relative flex flex-col shadow-primary shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
                Trader Positions (EUR/USD)
            </h3>
            <div className="h-[200px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <PieChart>
                        <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {sentimentData.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            formatter={(value) => (
                                <span className="text-sm">{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
