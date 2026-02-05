import React, { type ReactNode } from 'react';

interface EvidenceMetricProps {
    value: string | number;
    label: string;
    icon: ReactNode;
}

const EvidenceMetric: React.FC<EvidenceMetricProps> = ({ value, label, icon }) => {
    return (
        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            {/* Icon on the left */}
            <div className="text-[#EF4444] flex-shrink-0">
                {icon}
            </div>

            {/* Content on the right */}
            <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-[#1D3557] leading-none mb-1">{value}</h3>
                <p className="text-xs text-slate-500 leading-tight">{label}</p>
            </div>
        </div>
    );
};

export default EvidenceMetric;
