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
        if (count === 1) return '340px';
        if (count === 2) return '166px';
        if (count === 3) return '108px';
        return 'auto';
    };

    const segmentHeight = getSegmentHeight(segments.length);
    const spacingClass = segments.length === 1 ? '' : 'space-y-2';

    return (
        <div className="flex flex-col space-y-4 w-full h-full w-[96px] max-w-[96px] shrink-0 grow-0">
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
