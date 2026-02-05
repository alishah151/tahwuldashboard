import React from 'react';
import StatusColumn from './StatusColumn';

import { columns, legendItems } from '../data/progressStatusData';

const ProgressStatusSection: React.FC = () => {

    return (
        <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mt-8 mb-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[20px] font-bold text-black">Progress Status</h2>
                <div className="flex items-center space-x-4 flex-wrap justify-end">
                    {legendItems.map((item) => (
                        <div key={item.label} className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                            <span className="text-[13px] font-medium text-slate-600">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-11 gap-4 overflow-x-auto pb-4">
                {columns.map((column, index) => (
                    <StatusColumn
                        key={index}
                        title={column.title}
                        percentage={column.percentage}
                        segments={column.segments as any}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressStatusSection;
