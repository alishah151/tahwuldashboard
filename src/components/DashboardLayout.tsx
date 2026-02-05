import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Perspective from './Perspective';

const DashboardLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'perspective'>('dashboard');

    return (
        <div className="flex w-full min-h-screen bg-slate-50">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="flex-1 flex flex-col min-w-0">
                {/* Main Content */}
                <main className="w-full overflow-y-auto max-h-screen scrollbar-hide py-8 px-4 md:px-8">
                    <div className="max-w-[1440px] mx-auto">
                        {activeTab === 'dashboard' ? (
                            <Dashboard />
                        ) : (
                            <Perspective onBack={() => setActiveTab('dashboard')} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
