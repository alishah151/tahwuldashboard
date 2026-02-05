import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    showLabel?: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage,
    size = 120,
    strokeWidth = 10,
    color = '#10b981',
    showLabel = true
}) => {
    const data = [
        { name: 'completed', value: percentage },
        { name: 'remaining', value: 100 - percentage }
    ];

    const COLORS = [color, '#E5E7EB'];

    return (
        <div style={{ width: size, height: size, position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={size / 2 - strokeWidth}
                        outerRadius={size / 2}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {showLabel && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: size / 4,
                        fontWeight: 'bold',
                        color: '#1e293b'
                    }}
                >
                    {percentage}%
                </div>
            )}
        </div>
    );
};

export default CircularProgress;
