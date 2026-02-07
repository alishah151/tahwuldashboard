import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import bellIcon from '../../assets/bell.svg';
import userImage from '../../assets/topsidebaruser.jpg';
import applicantImage from '../../assets/applicant.jpg';
import { animationConfig } from '../../config/animations';

interface TopMenuProps {
    onSearch: (query: string) => void;
    activeTab: 'dashboard' | 'perspective';
}

// Icons moved outside component to prevent re-creation on render (fixes linter error)
const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M6 14.6667L6.00133 11.9987C6.00133 11.378 6.00133 11.068 6.10333 10.8233C6.17034 10.6615 6.2686 10.5144 6.39248 10.3905C6.51637 10.2666 6.66345 10.1683 6.82533 10.1013C7.07 10 7.38 10 8 10C8.62 10 8.93067 10 9.176 10.1013C9.33788 10.1683 9.48497 10.2666 9.60885 10.3905C9.73274 10.5144 9.83099 10.6615 9.898 10.8233C10 11.0687 10 11.3787 10 12V14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.72533 3.17471L4.05867 3.69537C3.048 4.48471 2.542 4.87937 2.27133 5.43537C2 5.99204 2 6.63471 2 7.92004V9.31471C2 11.8374 2 13.0987 2.78133 13.8827C3.56267 14.6667 4.81933 14.6667 7.33333 14.6667H8.66667C11.1807 14.6667 12.438 14.6667 13.2187 13.8827C13.9993 13.0987 14 11.8374 14 9.31404V7.92071C14 6.63471 14 5.99204 13.7287 5.43537C13.4573 4.87937 12.952 4.48471 11.9413 3.69537L11.2747 3.17537C9.70133 1.94671 8.91467 1.33337 8 1.33337C7.08533 1.33337 6.29867 1.94671 4.72533 3.17471Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PerspectiveIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12.6667 6.00004V5.21204C12.6667 4.08337 12.6667 3.51871 12.4987 3.06804C12.3651 2.70987 12.156 2.38461 11.8857 2.1143C11.6154 1.84399 11.2902 1.63496 10.932 1.50137C10.4813 1.33337 9.91667 1.33337 8.788 1.33337C6.81267 1.33337 5.82467 1.33337 5.036 1.62737C4.40898 1.86107 3.83955 2.22687 3.36634 2.69997C2.89312 3.17307 2.52718 3.74241 2.29333 4.36937C2 5.15804 2 6.14604 2 8.12137V9.81804C2 11.8647 2 12.8874 2.532 13.598C2.68439 13.8016 2.86511 13.9823 3.06867 14.1347C3.77933 14.6667 4.802 14.6667 6.84867 14.6667H9.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.33333 9.55537H7.89333C8.33467 9.55537 8.55533 9.55537 8.732 9.67204C8.90933 9.78804 9.008 9.99737 9.20533 10.4154L10.2667 12.6667L11.7333 8.00004L12.7947 10.2514C12.992 10.6694 13.0907 10.8787 13.268 10.9947C13.4453 11.1107 13.6653 11.1114 14.1067 11.1114H14.6667M2 8.00004C2 7.41073 2.2341 6.84556 2.65081 6.42885C3.06751 6.01214 3.63269 5.77804 4.222 5.77804H4.96267C5.30733 5.77804 5.47933 5.77804 5.62067 5.74004C5.80914 5.68932 5.98097 5.58994 6.11892 5.45187C6.25687 5.3138 6.3561 5.14189 6.40667 4.95337C6.44467 4.81204 6.44467 4.64004 6.44467 4.29537V3.55537C6.44467 2.96606 6.67877 2.40089 7.09548 1.98418C7.51218 1.56748 8.07736 1.33337 8.66667 1.33337" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TopMenu: React.FC<TopMenuProps> = ({ onSearch, activeTab }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Debounce Search
    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(searchQuery);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, onSearch]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <motion.div
            initial={animationConfig.topMenu.initial}
            animate={animationConfig.topMenu.animate}
            transition={animationConfig.topMenu.transition}
            className="w-full bg-white border-b border-gray-100 py-3 pt-[13px] px-6 flex items-center justify-between sticky top-0 z-[100]"
        >
            {/* Search Input */}
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search size={18} />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors text-slate-700 font-medium"
                />
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4">
                {/* Bell Icon */}
                <button className="relative p-2 text-slate-400 hover:text-slate-500 transition-colors">
                    <img src={bellIcon} alt="Notifications" className="w-5 h-5" />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                {/* User Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                        className="flex items-center space-x-2 p-1 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                        <img
                            src={userImage}
                            alt="User"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-slate-700 hidden sm:block">Mohamed</span>
                        <ChevronDown size={14} className="text-slate-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {isUserDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            {/* Field 1: Application */}
                            <a
                                href="https://muhammad-ali-151.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 border-b border-slate-50 mb-1 hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <img src={applicantImage} alt="Application" className="w-8 h-8 rounded-md object-cover" />
                                    <div className="text-sm text-slate-600 font-medium">View Applicant</div>
                                </div>
                            </a>

                            {/* Field 2: Dashboard */}
                            <button className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-slate-50 transition-colors ${activeTab === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>
                                <div className={activeTab === 'dashboard' ? 'text-blue-600' : 'text-slate-400'}>
                                    <HomeIcon />
                                </div>
                                <span className="font-medium">Dashboard</span>
                            </button>

                            {/* Field 3: Perspective */}
                            <button className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-slate-50 transition-colors ${activeTab === 'perspective' ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}>
                                <div className={activeTab === 'perspective' ? 'text-blue-600' : 'text-slate-400'}>
                                    <PerspectiveIcon />
                                </div>
                                <span className="font-medium">Perspective</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default TopMenu;
