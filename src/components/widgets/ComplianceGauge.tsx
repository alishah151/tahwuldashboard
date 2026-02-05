import React from 'react';
import GaugeChart from '../baseComponents/GaugeChart';

interface ComplianceGaugeProps {
    score: number;
}

const ComplianceGauge: React.FC<ComplianceGaugeProps> = ({ score }) => {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
            <h3 className="text-black text-[18px] font-bold mb-8 text-left">Overall Compliance</h3>
            <div className="flex flex-col items-center flex-1 justify-center relative">
                <GaugeChart score={score} color="#ef4444" text="Basic Standards 2025" />
            </div>
        </div>
    );
};

export default ComplianceGauge;
