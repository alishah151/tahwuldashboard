import React from 'react';
import GaugeChart from '../baseComponents/GaugeChart';

interface AuditReadinessProps {
    score: number;
}

const AuditReadiness: React.FC<AuditReadinessProps> = ({ score }) => {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
            <h3 className="text-black text-[18px] font-bold mb-8 text-left w-full">Audit Readiness</h3>

            <div className="flex flex-col items-center flex-1 justify-center w-full relative">
                <GaugeChart score={score} color="#10b981" text="Readiness Level" />

                <div className="w-full max-w-[280px] mt-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 text-center">
                            <p className="text-black text-[22px] font-bold leading-none mb-1">12</p>
                            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">Overdue Stds</p>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-100" />
                        <div className="flex-1 text-center">
                            <p className="text-black text-[22px] font-bold leading-none mb-1">5</p>
                            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">Missing Evidence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditReadiness;
