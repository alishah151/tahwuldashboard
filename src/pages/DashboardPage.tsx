import React, { useState } from 'react';
import Sidebar from '../components/menus/Sidebar';
import TopMenu from '../components/menus/TopMenu';
import ProjectTimeline from '../components/widgets/ProjectTimeline';
import StatCard from '../components/widgets/StatCard';
import ProgressStatusSection from '../components/widgets/ProgressStatusSection';
import PerformanceActivityRow from '../components/widgets/PerformanceActivityRow';
import AuditAnalyticsRow from '../components/widgets/AuditAnalyticsRow';
import SectionWrapper from '../components/baseComponents/SectionWrapper';
import { stats } from '../components/data/statsData';
import PerspectivePage from './PerspectivePage';

interface DashboardContentProps {
    searchQuery: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ searchQuery }) => {
    return (
        <div className="w-full space-y-4 animate-in fade-in duration-500 [&>*]:!mt-[24px]">
            <SectionWrapper searchQuery={searchQuery} index={0}>
                <div className="grid grid-cols-1 gap-4">
                    <ProjectTimeline />
                </div>
            </SectionWrapper>

            {/* Stats Row */}
            {/* Treat the entire Stats row as one section or individual cards? User said "sections". 
                Usually a row of stats is a section. Let's wrap the whole grid. 
                Or better, wrap individual cards so user can find specific stats? 
                "sections of the visible pages". I'll wrap the whole grid for layout stability, 
                or maybe grid items? If I wrap grid items, layout might break if not careful.
                Let's wrap the whole stats section for now to be safe with grid layout. 
            */}
            <SectionWrapper searchQuery={searchQuery} index={1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="contents">
                            {/* "contents" display to let StatCard be direct child of grid? No, SectionWrapper adds a div.
                                If I wrap individual cards, I need SectionWrapper to be grid-responsive or transparent.
                                SectionWrapper is a div. 
                                Alternative: Wrap the whole block.
                            */}
                            <StatCard
                                title={stat.title}
                                text={stat.text}
                                icon={stat.icon}
                            />
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper searchQuery={searchQuery} index={2}>
                <ProgressStatusSection />
            </SectionWrapper>

            <SectionWrapper searchQuery={searchQuery} index={3}>
                <PerformanceActivityRow />
            </SectionWrapper>

            <SectionWrapper searchQuery={searchQuery} index={4}>
                <AuditAnalyticsRow />
            </SectionWrapper>
        </div>
    );
};

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'perspective'>('dashboard');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex w-full min-h-screen bg-slate-50">
            <Sidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            <div className="flex-1 flex flex-col min-w-0">
                <TopMenu onSearch={setSearchQuery} activeTab={activeTab} />

                {/* Main Content */}
                <main className="w-full overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide px-4 md:px-8">
                    <div className="max-w-[1440px] mx-auto">
                        {activeTab === 'dashboard' ? (
                            <DashboardContent searchQuery={searchQuery} />
                        ) : (
                            <PerspectivePage
                                onBack={() => setActiveTab('dashboard')}
                                searchQuery={searchQuery}
                            />
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
