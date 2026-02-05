import React from 'react';

export interface User {
    name: string;
    role: string;
    avatar: string;
    score?: string | number;
    info?: string;
}

interface UserItemProps {
    user: User;
    showScore?: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ user, showScore = true }) => {
    return (
        <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 py-3 transition-colors px-2 rounded-lg">
            <div className="flex items-center space-x-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-slate-50" />
                <div className="flex flex-col items-start text-left">
                    <p className="text-black text-[14px] font-bold">{user.name}</p>
                    <p className="text-slate-400 text-[11px] font-medium">{user.role}</p>
                </div>
            </div>
            {showScore && user.score !== undefined && (
                <div className="text-right">
                    <span className="text-black text-[15px] font-bold">{user.score}%</span>
                </div>
            )}
            {user.info && !showScore && (
                <div className="text-right">
                    <span className="text-slate-400 text-[12px]">{user.info}</span>
                </div>
            )}
        </div>
    );
};

export default UserItem;
