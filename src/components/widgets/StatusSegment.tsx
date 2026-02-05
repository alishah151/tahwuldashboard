import React from 'react';

export type StatusType = 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded';

interface CircleItem {
    id: number;
    status: StatusType;
}

interface StatusSegmentProps {
    title?: string;
    items: CircleItem[];
    height?: string;
    align?: 'center' | 'bottom';
}

const statusColors: Record<StatusType, string> = {
    'not-started': 'bg-[#94a3b8]',
    'in-progress': 'bg-[#f59e0b]',
    'completed': 'bg-[#22c55e]',
    'partially-uploaded': 'bg-[#3b82f6]',
};

const StatusSegment: React.FC<StatusSegmentProps> = ({ title, items, height, align = 'bottom' }) => {
    const isDivisibleBy3 = items.length > 0 && items.length % 3 === 0;
    const gridCols = isDivisibleBy3 ? 'grid-cols-3' : 'grid-cols-2';
    const alignClass = align === 'center' ? 'my-auto' : 'mt-auto';

    return (
        <div
            className=" bg-gray-50 rounded-xl border border-slate-100 py-4 px-2 flex flex-col items-center w-full"
            style={{ height: height || 'auto' }}
        >
            {title && (
                <h4 className="text-[10px] font-bold text-slate-500 uppercase text-center mb-4 leading-tight">
                    {title}
                </h4>
            )}
            <div className={`grid ${gridCols} gap-2 ${alignClass}`}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`${statusColors[item.status]} w-6 h-6 rounded-full flex items-center justify-center text-white text-[12px] font-extrabold shadow-sm hover:scale-105 transition-transform cursor-default`}
                    >
                        {item.id}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatusSegment;
