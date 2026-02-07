import React from 'react';

interface StatusHeaderProps {
    title: string;
    percentage: string;
}

const StatusHeader: React.FC<StatusHeaderProps> = ({ title, percentage }) => {
    return (
        <div className="bg-[#1e293b] rounded-xl py-4 px-2 flex flex-col items-center justify-between h-[110px] w-full text-center min-h-[96px]">
            <h3 className="text-white text-[12px] font-bold leading-[16px] mb-2">
                {title}
            </h3>
            <div className="bg-[#3b82f6]/20 text-[#3b82f6] px-3 py-1 rounded-full text-[14px] font-bold leading-[16px] border border-[#3b82f6]/30">
                {percentage}
            </div>
        </div>
    );
};

export default StatusHeader;
