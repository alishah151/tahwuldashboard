import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface EvidenceItem {
    id: number;
    name: string;
    category: string;
    status: string;
    owner: string;
    date: string;
}

interface EvidenceTabProps {
    data: EvidenceItem[];
}

type SortConfig = {
    key: keyof EvidenceItem;
    direction: 'asc' | 'desc';
} | null;

const EvidenceTab: React.FC<EvidenceTabProps> = ({ data }) => {
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const sortedData = React.useMemo(() => {
        const sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key: keyof EvidenceItem) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-emerald-100 text-emerald-700';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700';
            case 'Under Review':
                return 'bg-amber-100 text-amber-700';
            case 'Not Started':
                return 'bg-slate-100 text-slate-700';
            default:
                return 'bg-slate-100 text-slate-700';
        }
    };

    const SortIcon = ({ column }: { column: keyof EvidenceItem }) => {
        if (sortConfig?.key !== column) {
            return <div className="w-4 h-4 opacity-0 group-hover:opacity-30 flex flex-col items-center justify-center">
                <ChevronUp className="w-2 h-2 mb-0.5" />
                <ChevronDown className="w-2 h-2" />
            </div>;
        }
        return sortConfig.direction === 'asc'
            ? <ChevronUp className="w-4 h-4 text-blue-600" />
            : <ChevronDown className="w-4 h-4 text-blue-600" />;
    };

    return (
        <div className="w-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            {[
                                { key: 'name', label: 'Name' },
                                { key: 'category', label: 'Category' },
                                { key: 'owner', label: 'Owner' },
                                { key: 'date', label: 'Date' },
                                { key: 'status', label: 'Status' },
                            ].map((col) => (
                                <th
                                    key={col.key}
                                    onClick={() => requestSort(col.key as keyof EvidenceItem)}
                                    className={"px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider cursor-pointer group hover:bg-slate-100 transition-colors whitespace-nowrap" + (col.key === "status" ? " text-right" : "")}
                                >
                                    <div className={`flex items-center gap-2 ${col.key === 'status' ? 'justify-end' : ''}`}>
                                        {col.label}
                                        <SortIcon column={col.key as keyof EvidenceItem} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {sortedData.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-[14px] font-semibold text-slate-800">{item.name}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-[13px] text-slate-600">{item.category}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-[13px] text-slate-600 font-medium">{item.owner}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-[13px] text-slate-500 font-mono">{item.date}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${getStatusStyles(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {sortedData.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                    <p className="text-[14px]">No evidence records found.</p>
                </div>
            )}
        </div>
    );
};

export default EvidenceTab;
