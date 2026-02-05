import React from 'react';
import PerformanceBarChart from '../baseComponents/PerformanceBarChart';

import { performanceData } from '../data/performanceChartData';

const PerformanceChart: React.FC = () => {

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
            <h3 className="text-black text-[18px] font-bold mb-8 text-left">12-Month Performance</h3>

            <div className="flex-1 w-full flex items-center justify-center">
                <PerformanceBarChart data={performanceData} />
            </div>

            <div className="flex items-center justify-center space-x-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Monthly Avg Performance</span>
            </div>
        </div>
    );
};

export default PerformanceChart;
