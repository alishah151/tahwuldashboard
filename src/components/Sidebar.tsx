import React, { useState } from 'react';
import {
    LayoutDashboard,
    Layers,
} from 'lucide-react';

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    collapsed: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, collapsed, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group
                ${active
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }
                ${collapsed ? 'justify-center border-none' : 'space-x-3'}
            `}
        >
            <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                {icon}
            </div>
            {!collapsed && (
                <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300">
                    {label}
                </span>
            )}
            {!collapsed && active && (
                <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />
            )}
        </button>
    );
};

export type SidebarTab = 'dashboard' | 'perspective';

interface SidebarProps {
    activeTab: SidebarTab;
    onTabChange: (tab: SidebarTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems: { id: SidebarTab; label: string; icon: React.ReactNode }[] = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'perspective', label: 'Perspective', icon: <Layers size={20} /> },
    ];

    return (
        <div
            className={`flex flex-col h-screen bg-[#1D3557] transition-all duration-500 ease-in-out sticky top-0 relative z-20 overflow-visible
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}
        >
            {/* Logo Section */}
            <div className={`p-6 mb-8 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">T</span>
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">Tahwul</span>
                    </div>
                )}
                {isCollapsed && (
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">T</span>
                    </div>
                )}
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        active={activeTab === item.id}
                        collapsed={isCollapsed}
                        onClick={() => onTabChange(item.id)}
                    />
                ))}
            </div>

            {/* Collapse/Expand Button - Positioned on right border */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute bottom-20 -right-3 w-8 h-8 max-w-8 max-h-8 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-50 border border-slate-100 cursor-pointer"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ minWidth: '20px', minHeight: '20px' }}
                    className={`transition-transform duration-300 shrink-0 block ${isCollapsed ? 'rotate-180' : ''}`}
                >
                    <path d="M3 19V5" />
                    <path d="m13 6-6 6 6 6" />
                </svg>
            </button>
        </div >
    );
};

export default Sidebar;
