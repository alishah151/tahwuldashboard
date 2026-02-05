export interface Milestone {
    date: string;
    label: string;
    status: 'completed' | 'pending';
}

export const yearData: Record<string, Milestone[]> = {
    '2024': [
        { date: 'Jan 10', label: 'Initial Planning', status: 'completed' },
        { date: 'Feb 15', label: 'Resource Allocation', status: 'completed' },
        { date: 'Apr 20', label: 'Design System', status: 'completed' },
        { date: 'Jun 05', label: 'Beta Testing', status: 'completed' },
        { date: 'Aug 12', label: 'Security Audit', status: 'completed' },
        { date: 'Oct 01', label: 'Scaling Setup', status: 'completed' },
        { date: 'Nov 15', label: 'Production Launch', status: 'completed' },
        { date: 'Dec 20', label: 'Year End Review', status: 'completed' },
    ],
    '2025': [
        { date: 'Feb 01', label: 'Q1 Strategy', status: 'completed' },
        { date: 'May 10', label: 'Modular Refactor', status: 'completed' },
        { date: 'Sep 25', label: 'Cloud Migration', status: 'completed' },
        { date: 'Dec 15', label: 'Annual Report', status: 'completed' },
    ],
    '2026': [
        { date: 'Mar 17', label: 'Kickoff Workshop', status: 'completed' },
        { date: 'March 18', label: 'Data Collection', status: 'completed' },
        { date: 'May 08', label: 'Initial Phase', status: 'pending' },
        { date: 'May 09–July 12', label: 'Verification', status: 'pending' },
        { date: 'July 13', label: 'Completion Review', status: 'pending' },
    ],
};
