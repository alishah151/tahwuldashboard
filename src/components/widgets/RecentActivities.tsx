import React from 'react';

import { activities } from '../data/recentActivitiesData';
import type { Activity } from '../data/recentActivitiesData';

interface RecentActivitiesProps {
    autoHeight?: boolean;
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ autoHeight = false }) => {
    const activityData: Activity[] = activities;

    return (
        <div className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 ${autoHeight ? '' : 'h-full'}`}>
            <h3 className="text-black text-[18px] font-bold mb-6 text-left">Recent Activities</h3>
            <div className="divide-y divide-slate-100">
                {activityData.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-4 group">
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                            <p className="text-black text-xs font-medium text-left">{activity.title}</p>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                            <span className="text-gray-400 text-[11px] font-medium">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivities;
