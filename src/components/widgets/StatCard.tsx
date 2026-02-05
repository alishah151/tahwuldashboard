import React, { type ReactNode } from 'react';

interface StatCardProps {
    title: string;
    icon: ReactNode;
    text: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, text }) => {
    return (
        <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-full">
            <div className="flex items-start justify-between w-full mb-1">
                <h3 className="text-3xl font-bold text-[#1e293b] tracking-tight">{text}</h3>
                <div className="text-[#EF4444] p-1">
                    {icon}
                </div>
            </div>

            <div className="mt-1 text-left">
                <span className="text-xs font-medium text-slate-500">{title}</span>
            </div>
        </div>
    );
};

export default StatCard;
