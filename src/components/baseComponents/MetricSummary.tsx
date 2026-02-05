import React, { type ReactNode } from 'react';
import StatCard from '../widgets/StatCard';

interface MetricItem {
    title: string;
    icon: ReactNode;
    text: string;
}

interface MetricSummaryProps {
    metrics: MetricItem[];
}

const MetricSummary: React.FC<MetricSummaryProps> = ({ metrics }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {metrics.map((metric, index) => (
                <StatCard
                    key={index}
                    title={metric.title}
                    icon={metric.icon}
                    text={metric.text}
                />
            ))}
        </div>
    );
};

export default MetricSummary;
