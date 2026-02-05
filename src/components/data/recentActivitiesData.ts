export interface Activity {
    title: string;
    time: string;
    type: 'upload' | 'complete' | 'update';
}

export const activities: Activity[] = [
    { title: "Document 'Strategy_Review.Pdf' Was Uploaded", time: "5 Mins Ago", type: 'upload' },
    { title: "Quarterly Audit Completed For 'Operations'", time: "2 Hours Ago", type: 'complete' },
    { title: "New Evidence Added To 'Digital Culture'", time: "Yesterday", type: 'update' },
    { title: "Compliance Score Updated To 65%", time: "2 Days Ago", type: 'complete' },
];
