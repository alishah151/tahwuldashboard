import React from 'react';
import backIcon from '../../assets/back.svg';

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

                <img
                    src={backIcon}
                    alt="Back to Dashboard"
                    className={`transition-transform duration-300 shrink-0 block w-5 h-5 max-w-5 max-h-5 -ml-2 -mr-2`}
                />
            </button>
            <h1 className="text-2xl font-bold text-[#1D3557]">
                {title}
            </h1>
        </div>
    );
};

export default PageHeader;
