import ProjectTimeline from './widgets/ProjectTimeline';
import StatCard from './widgets/StatCard';
import ProgressStatusSection from './widgets/ProgressStatusSection';
import PerformanceActivityRow from './widgets/PerformanceActivityRow';
import AuditAnalyticsRow from './widgets/AuditAnalyticsRow';
import { stats } from './data/statsData';

const Dashboard: React.FC = () => {

    return (
        <div className="w-full space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 gap-8">
                <ProjectTimeline />
            </div>

            {/* Stats Row shifted below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        text={stat.text}
                        icon={stat.icon}
                    />
                ))}
            </div>

            <ProgressStatusSection />
            <PerformanceActivityRow />
            <AuditAnalyticsRow />
        </div>
    );
};

export default Dashboard;
