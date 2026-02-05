import React from 'react';

import { leaders } from '../data/perspectiveLeadersData';
import type { Leader } from '../data/perspectiveLeadersData';

const PerspectiveLeaders: React.FC = () => {
    // Ensuring Leader type is used to satisfy linter if needed, 
    // though .map implicitly uses it, explicit annotation is safer for some configs.
    const leaderData: Leader[] = leaders;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full">
            <h3 className="text-black text-[18px] font-bold mb-6 text-left">Top Perspective Leaders</h3>
            <div className="divide-y divide-slate-100">
                {leaderData.map((leader, index) => (
                    <div key={index} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 py-3 transition-colors">
                        <div className="flex items-center space-x-3">
                            <img src={leader.avatar} alt={leader.name} className="w-10 h-10 rounded-full border-2 border-slate-50" />
                            <div className="flex flex-col items-start text-left">
                                <p className="text-black text-[14px] font-bold">{leader.name}</p>
                                <p className="text-slate-400 text-[11px] font-medium">{leader.role}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-black text-[15px] font-bold">{leader.score}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerspectiveLeaders;
