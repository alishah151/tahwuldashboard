import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    onBack?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack }) => {
    return (
        <div className="flex items-center gap-4 mb-8">
            <button
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm focus:outline-none"
                aria-label="Go back"
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
                    className={`transition-transform duration-300 shrink-0 block`}
                >
                    <path d="M3 19V5" />
                    <path d="m13 6-6 6 6 6" />
                </svg>
            </button>
            <h1 className="text-2xl font-bold text-[#1D3557]">
                {title}
            </h1>
        </div>
    );
};

export default PageHeader;
