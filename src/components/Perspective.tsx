import React, { useState } from 'react';
import PageHeader from './baseComponents/PageHeader';
import CircularChart from './baseComponents/CircularChart';
import OverviewTab from './tabs/OverviewTab';
import EvidenceTab from './tabs/EvidenceTab';
import EvidenceMetric from './baseComponents/EvidenceMetric';
import { perspectiveMetrics, evidenceTableData } from './data/perspectiveData';
import { overviewData, perspectiveLeaders } from './data/perspectiveOverviewData';
import RecentActivities from './widgets/RecentActivities';
import CommentsSection from './widgets/CommentsSection';

interface PerspectiveProps {
    onBack: () => void;
}

const Perspective: React.FC<PerspectiveProps> = ({ onBack }) => {
    const [activeSubTab, setActiveSubTab] = useState<'overview' | 'evidence'>('overview');

    return (
        <div className="space-y-4 animate-in fade-in duration-500 bg-gray-50 p-6 min-h-screen">
            <PageHeader title="Digital Transformation Strategic Planning" onBack={onBack} />

            {/* Hero Section - White box with tag, title, subtitle, and circular chart */}
            <div className="p-4 bg-white border border-slate-100 rounded-lg">
                <div className="flex items-center justify-between gap-2 text-left">
                    <div className="flex-1">
                        {/* Tag */}
                        <div className="inline-block bg-gray-50 text-gray-600 border-gray-200 border px-4 py-1.5 rounded-full text-xs font-semibold mb-2">
                            Strategy & Planning
                        </div>
                        {/* Title */}
                        <h2 className="text-[#1D3557] text-2xl font-bold mb-2">
                            Digital Transformation Strategic Planning
                        </h2>
                        {/* Subtitle */}
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
                        </p>
                    </div>
                    {/* Circular Chart */}
                    <div className="flex-shrink-0">
                        <CircularChart percentage={100} size={80} strokeWidth={8} color="#10b981" />
                    </div>
                </div>
            </div>

            {/* Evidence Metrics - 4 cards in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {perspectiveMetrics.map((metric, index) => (
                    <EvidenceMetric
                        key={index}
                        value={metric.value}
                        label={metric.label}
                        icon={metric.icon}
                    />
                ))}
            </div>

            {/* Tabbed Section */}
            <div className="">
                <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-lg w-fit mb-4">
                    <button
                        onClick={() => setActiveSubTab('overview')}
                        className={`px-8 py-2.5 text-sm font-semibold rounded-lg transition-all text-[#1D3557]  ${activeSubTab === 'overview'
                            ? 'bg-white shadow-sm'
                            : 'bg-transparent'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveSubTab('evidence')}
                        className={`px-8 py-2.5 text-sm font-semibold rounded-lg transition-all text-[#1D3557] bg-transparent ${activeSubTab === 'evidence'
                            ? 'bg-white shadow-sm'
                            : 'bg-transparent'
                            }`}
                    >
                        Evidence
                    </button>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {activeSubTab === 'overview' ? (
                        <OverviewTab data={overviewData} />
                    ) : (
                        <EvidenceTab data={evidenceTableData} />
                    )}
                </div>
            </div>

            {activeSubTab === 'overview' ? (
                /* Leaders Section */
                <div className="bg-white rounded-lg p-6 py-4 border border-slate-100 shadow-sm text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="text-[#1D3557] text-lg font-bold mb-2">Leaders</h3>
                    <div className="flex gap-4">
                        {perspectiveLeaders.map((leader, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2">
                                <img
                                    src={leader.avatar}
                                    alt={leader.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="text-left">
                                    <p className="text-[#1D3557] font-semibold text-sm">{leader.name}</p>
                                    <p className="text-slate-500 text-xs">{leader.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Evidence Bottom Section: Comments & Recent Activities */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="lg:col-span-2 h-full">
                        <CommentsSection />
                    </div>
                    <div className="lg:col-span-1">
                        <RecentActivities autoHeight={true} />
                    </div>
                </div>
            )}
        </div >
    );
};

export default Perspective;
