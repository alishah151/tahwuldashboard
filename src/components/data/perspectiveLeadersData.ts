export interface Leader {
    name: string;
    role: string;
    score: number;
    avatar: string;
}

export const leaders: Leader[] = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: 96, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed' },
    { name: 'Sara Bin Salman', role: 'Organization Perspective', score: 88, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara' },
    { name: 'Fahad Al-Qahtani', role: 'Operations Perspective', score: 82, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fahad' },
    { name: 'Noura Mansour', role: 'Compliance Perspective', score: 91, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Noura' },
];
