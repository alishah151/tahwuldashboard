import React from 'react';
import ComplianceGauge from './ComplianceGauge';
import PerspectiveLeaders from './PerspectiveLeaders';
import RecentActivities from './RecentActivities';

const PerformanceActivityRow: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <ComplianceGauge score={65} />
            <PerspectiveLeaders />
            <RecentActivities />
        </div>
    );
};

export default PerformanceActivityRow;
