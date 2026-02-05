import React from 'react';
import UserItem, { type User } from './UserItem';

interface UserListProps {
    title: string;
    users: User[];
    showScore?: boolean;
}

const UserList: React.FC<UserListProps> = ({ title, users, showScore = true }) => {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full">
            <h3 className="text-black text-[18px] font-bold mb-6 text-left">{title}</h3>
            <div className="divide-y divide-slate-100">
                {users.map((user, index) => (
                    <UserItem key={index} user={user} showScore={showScore} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
