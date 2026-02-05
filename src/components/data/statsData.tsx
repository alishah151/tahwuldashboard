import {
    Activity,
    Layers,
    CheckCircle2,
    Printer,
    FileCheck,
    RefreshCw
} from 'lucide-react';

export const stats = [
    { title: 'Total Progress', text: '78.65%', icon: <Activity size={18} /> },
    { title: 'Total Criteria', text: '95', icon: <Layers size={18} /> },
    { title: 'Completed Criteria', text: '52', icon: <CheckCircle2 size={18} /> },
    { title: 'Evidence Documents', text: '386', icon: <Printer size={18} /> },
    { title: 'Evidence (Completed)', text: '302', icon: <FileCheck size={18} /> },
    { title: 'Uploaded To DGA', text: '258', icon: <RefreshCw size={18} /> },
];
