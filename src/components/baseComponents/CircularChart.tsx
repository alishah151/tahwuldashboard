import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CircularChartProps {
    percentage: number;
    size?: number;
    color?: string;
    strokeWidth?: number;
    label?: string;
}

const CircularChart: React.FC<CircularChartProps> = ({
    percentage,
    size = 120,
    color = '#3b82f6',
    strokeWidth = 8,
    label
}) => {
    const data = [
        { name: 'Progress', value: percentage },
        { name: 'Remaining', value: 100 - percentage },
    ];

    return (
        <div className="flex flex-col items-center justify-center" style={{ width: size, height: size + 30 }}>
            <div style={{ width: size, height: size, position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={size / 2 - strokeWidth}
                            outerRadius={size / 2}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                        >
                            <Cell fill={color} />
                            <Cell fill="#f1f5f9" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xs font-bold text-slate-800">{percentage}%</span>
                </div>
            </div>
            {label && (
                <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">
                    {label}
                </span>
            )}
        </div>
    );
};

export default CircularChart;
