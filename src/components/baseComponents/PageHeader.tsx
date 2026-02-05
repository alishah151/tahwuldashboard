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
                <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h1 className="text-2xl font-bold text-[#1D3557]">
                {title}
            </h1>
        </div>
    );
};

export default PageHeader;
