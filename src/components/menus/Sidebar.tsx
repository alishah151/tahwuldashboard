import React from 'react';
import { motion } from 'framer-motion';
import backIcon from '../../assets/back.svg';
import logo from '../../assets/logo.png';
import SidebarItem from './SidebarItem';
import { animationConfig } from '../../config/animations';

export type SidebarTab = 'dashboard' | 'perspective';

interface SidebarProps {
    activeTab: SidebarTab;
    onTabChange: (tab: SidebarTab) => void;
    isCollapsed: boolean;
    onToggle: () => void;
}

// Icons as components
const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M6 14.6667L6.00133 11.9987C6.00133 11.378 6.00133 11.068 6.10333 10.8233C6.17034 10.6615 6.2686 10.5144 6.39248 10.3905C6.51637 10.2666 6.66345 10.1683 6.82533 10.1013C7.07 10 7.38 10 8 10C8.62 10 8.93067 10 9.176 10.1013C9.33788 10.1683 9.48497 10.2666 9.60885 10.3905C9.73274 10.5144 9.83099 10.6615 9.898 10.8233C10 11.0687 10 11.3787 10 12V14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.72533 3.17471L4.05867 3.69537C3.048 4.48471 2.542 4.87937 2.27133 5.43537C2 5.99204 2 6.63471 2 7.92004V9.31471C2 11.8374 2 13.0987 2.78133 13.8827C3.56267 14.6667 4.81933 14.6667 7.33333 14.6667H8.66667C11.1807 14.6667 12.438 14.6667 13.2187 13.8827C13.9993 13.0987 14 11.8374 14 9.31404V7.92071C14 6.63471 14 5.99204 13.7287 5.43537C13.4573 4.87937 12.952 4.48471 11.9413 3.69537L11.2747 3.17537C9.70133 1.94671 8.91467 1.33337 8 1.33337C7.08533 1.33337 6.29867 1.94671 4.72533 3.17471Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PerspectiveIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12.6667 6.00004V5.21204C12.6667 4.08337 12.6667 3.51871 12.4987 3.06804C12.3651 2.70987 12.156 2.38461 11.8857 2.1143C11.6154 1.84399 11.2902 1.63496 10.932 1.50137C10.4813 1.33337 9.91667 1.33337 8.788 1.33337C6.81267 1.33337 5.82467 1.33337 5.036 1.62737C4.40898 1.86107 3.83955 2.22687 3.36634 2.69997C2.89312 3.17307 2.52718 3.74241 2.29333 4.36937C2 5.15804 2 6.14604 2 8.12137V9.81804C2 11.8647 2 12.8874 2.532 13.598C2.68439 13.8016 2.86511 13.9823 3.06867 14.1347C3.77933 14.6667 4.802 14.6667 6.84867 14.6667H9.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.33333 9.55537H7.89333C8.33467 9.55537 8.55533 9.55537 8.732 9.67204C8.90933 9.78804 9.008 9.99737 9.20533 10.4154L10.2667 12.6667L11.7333 8.00004L12.7947 10.2514C12.992 10.6694 13.0907 10.8787 13.268 10.9947C13.4453 11.1107 13.6653 11.1114 14.1067 11.1114H14.6667M2 8.00004C2 7.41073 2.2341 6.84556 2.65081 6.42885C3.06751 6.01214 3.63269 5.77804 4.222 5.77804H4.96267C5.30733 5.77804 5.47933 5.77804 5.62067 5.74004C5.80914 5.68932 5.98097 5.58994 6.11892 5.45187C6.25687 5.3138 6.3561 5.14189 6.40667 4.95337C6.44467 4.81204 6.44467 4.64004 6.44467 4.29537V3.55537C6.44467 2.96606 6.67877 2.40089 7.09548 1.98418C7.51218 1.56748 8.07736 1.33337 8.66667 1.33337" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isCollapsed, onToggle }) => {
    const menuItems: { id: SidebarTab; label: string; icon: React.ReactNode }[] = [
        { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
        { id: 'perspective', label: 'Perspectives', icon: <PerspectiveIcon /> },
    ];

    return (
        <motion.div
            initial={animationConfig.sidebar.initial}
            animate={animationConfig.sidebar.animate}
            transition={animationConfig.sidebar.transition}
            className={`flex flex-col h-screen bg-[#1D3557] transition-all duration-500 ease-in-out sticky top-0 relative z-[101] overflow-visible
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}
        >
            {/* Logo Section */}
            <div
                className={`
                    pl-[23px] pt-[10px] mb-5
                    overflow-hidden
                    transition-[width] duration-300 ease-in-out
                    ${isCollapsed ? 'ml-2 w-[40px]' : 'w-[160px]'}
                `}
            >
                <div className="flex-shrink-0 w-[100px] h-11">
                    <img
                        src={logo}
                        alt="Tahwul"
                        className="block w-[100px] h-11 object-contain flex-shrink-0"
                    />
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-4 space-y-1.5">
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

            {/* Collapse/Expand Button */}
            <button
                onClick={onToggle}
                className="absolute top-[19px] -right-4 w-8 h-8 max-w-8 max-h-8 p-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-[101] border border-slate-100 cursor-pointer active:outline-none focus:outline-none"
            >
                <img
                    src={backIcon}
                    alt="Toggle Sidebar"
                    className={`transition-transform duration-300 shrink-0 block w-5 h-5 max-w-5 max-h-5 -ml-2 -mr-2 ${isCollapsed ? 'rotate-180' : ''}`}
                />
            </button>
        </motion.div>
    );
};

export default Sidebar;
