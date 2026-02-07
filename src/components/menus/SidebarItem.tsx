import React from 'react';

export interface SidebarItemProps {
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
            className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group outline-none border-none focus:outline-none hover:outline-none hover:border-none 
                ${active
                    ? 'bg-[#98AEC01A] text-white'
                    : 'text-[#7B9FC3] hover:bg-[#98AEC01A] hover:text-white bg-transparent'
                }
                ${collapsed ? 'justify-center border-none' : 'space-x-3'}
            `}
        >
            <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                <div className="w-5 h-5 flex items-center justify-center">
                    {icon}
                </div>
            </div>
            {!collapsed && (
                <span className="font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300">
                    {label}
                </span>
            )}
        </button>
    );
};

export default SidebarItem;
