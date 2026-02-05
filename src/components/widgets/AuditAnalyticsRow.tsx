import React from 'react';
import PerformanceChart from './PerformanceChart';
import AuditReadiness from './AuditReadiness';

const AuditAnalyticsRow: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8 pb-12">
            <div className="lg:col-span-8 h-full">
                <PerformanceChart />
            </div>
            <div className="lg:col-span-4 h-full">
                <AuditReadiness score={80} />
            </div>
        </div>
    );
};

export default AuditAnalyticsRow;
