import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { yearData } from '../data/timelineData';

const ProjectTimeline: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<string>('2026');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const steps = yearData[selectedYear] || [];
    const completedCount = steps.filter(s => s.status === 'completed').length;

    // Calculate percentage based on gaps between milestones
    // 0 tasks = 0%
    // all tasks = 100%
    // otherwise completed / total * 100
    const progressPercentage = steps.length > 0 ? (completedCount / steps.length) * 100 : 0;

    return (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-full relative">
            <div className="flex items-center justify-between mb-8 z-50 relative">
                <h2 className="text-xl font-bold text-slate-800 text-left">Project Timeline</h2>

                {/* Year Dropdown */}
                <div className="relative">
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 bg-white border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                        <span className="text-sm font-medium text-slate-700">{selectedYear}</span>
                        <ChevronDown size={14} className={`text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-md shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in duration-100 origin-top-right">
                            {Object.keys(yearData).sort((a, b) => b.localeCompare(a)).map((year) => (
                                <button
                                    key={year}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log('Selecting year:', year);
                                        setSelectedYear(year);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors text-blue-600 cursor-pointer outline-none focus:outline-none  focus:ring-0 ${selectedYear === year ? 'bg-blue-200' : 'bg-blue-50'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="relative flex items-center justify-between w-full px-12 mb-16">
                {/* Background Track */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />

                {/* Progress Fill */}
                <div
                    className="absolute top-1/2 left-0 h-2 bg-[#22C55E] -translate-y-1/2 z-1 transition-all duration-700 ease-in-out rounded-lg"
                    style={{ width: `${progressPercentage}%` }}
                />

                {steps.map((step, index) => (
                    <div key={`${selectedYear}-${index}`} className="relative z-10 flex flex-col items-center group">
                        {/* Milestone Dot */}
                        <div
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-500 scale-in-95 ${step.status === 'completed'
                                ? 'bg-[#22C55E] text-white'
                                : 'bg-[#EF4444] text-white'
                                }`}
                        >
                            {step.status === 'completed' && (
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            )}
                        </div>

                        {/* Labels */}
                        <div className="absolute top-6 flex flex-col items-center w-max">
                            <span className="text-[10px] text-slate-400 font-medium mb-0.5">{step.date}</span>
                            <span className="text-[11px] text-slate-800 font-semibold text-center max-w-[80px] leading-tight">
                                {step.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Backdrop for dropdown */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
        </div>
    );
};

export default ProjectTimeline;
