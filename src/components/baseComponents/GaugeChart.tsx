import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
    score: number;
    color: string;
    height?: number | string;
    text?: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ score, color, height = 120, text }) => {
    const data = [
        { name: 'Progress', value: score },
        { name: 'Remaining', value: 100 - score },
    ];
    const COLORS = [color, '#e2e8f0'];

    return (
        <>
            <div className="mb-8 w-full">
                <div className="w-full" style={{ height }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="100%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={90}
                                outerRadius={100}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        cornerRadius={index === 0 ? 10 : 0}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-[-86px] flex flex-col items-center">
                <span className="text-[32px] font-bold text-black leading-none">{score}%</span>
                <span className="text-[10px] text-gray-400 font-medium uppercase mt-1 tracking-wider">{text}</span>
            </div>
        </>
    );
};

export default GaugeChart;
