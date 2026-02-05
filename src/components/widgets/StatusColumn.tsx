import StatusHeader from './StatusHeader';
import StatusSegment from './StatusSegment';
import type { StatusType } from './StatusSegment';

export interface SegmentData {
    title?: string;
    items: { id: number; status: StatusType }[];
    align?: 'center' | 'bottom';
}

interface StatusColumnProps {
    title: string;
    percentage: string;
    segments: SegmentData[];
}

const StatusColumn: React.FC<StatusColumnProps> = ({ title, percentage, segments }) => {
    const getSegmentHeight = (count: number) => {
        if (count === 1) return '342px';
        if (count === 2) return '170px';
        if (count === 3) return '108px';
        return 'auto';
    };

    const segmentHeight = getSegmentHeight(segments.length);
    const spacingClass = segments.length === 1 ? '' : segments.length === 2 ? 'space-y-[2px]' : 'space-y-[9px]';

    return (
        <div className="flex flex-col space-y-4 w-full h-full min-w-[96px]">
            <StatusHeader title={title} percentage={percentage} />
            <div className={`flex flex-col ${spacingClass} bg-slate-50/50 rounded-xl h-full`}>
                {segments.map((segment, index) => (
                    <StatusSegment
                        key={index}
                        title={segment.title}
                        items={segment.items}
                        height={segmentHeight}
                        align={segment.align}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatusColumn;
