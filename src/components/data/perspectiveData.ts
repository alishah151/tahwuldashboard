import { FileText, Clock, RefreshCw, CheckCircle } from 'lucide-react';
import React from 'react';

export const perspectiveMetrics = [
    {
        value: '4',
        label: 'Total Evidence',
        icon: React.createElement(FileText, { size: 24 })
    },
    {
        value: '3',
        label: 'Under Review Evidence',
        icon: React.createElement(Clock, { size: 24 })
    },
    {
        value: '2',
        label: 'In Progress Evidence',
        icon: React.createElement(RefreshCw, { size: 24 })
    },
    {
        value: '1',
        label: 'Completed Evidence',
        icon: React.createElement(CheckCircle, { size: 24 })
    }
];

export const evidenceTableData = [
    { id: 1, name: 'Environmental Policy', category: 'Compliance', status: 'Completed', owner: 'John Doe', date: '2024-01-15' },
    { id: 2, name: 'Training Records', category: 'Operations', status: 'In Progress', owner: 'Jane Smith', date: '2024-02-01' },
    { id: 3, name: 'Risk Assessment', category: 'Governance', status: 'Under Review', owner: 'Mike Brown', date: '2024-01-20' },
    { id: 4, name: 'Audit Log 2023', category: 'Audit', status: 'Completed', owner: 'Sarah Wilson', date: '2023-12-10' },
    { id: 5, name: 'Supplier Assessment', category: 'Supply Chain', status: 'Not Started', owner: 'Emily Davis', date: '2024-02-15' },
];
