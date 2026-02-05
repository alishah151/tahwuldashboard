import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Comment {
    id: number;
    name: string;
    text: string;
    date: string;
    initials: string;
}

const MUSLIM_NAMES = [
    'Ahmed', 'Mohamed', 'Fatima', 'Aisha', 'Omar',
    'Youssef', 'Mariam', 'Hassan', 'Zainab', 'Bilal'
];

const INITIAL_COMMENTS: Comment[] = [
    {
        id: 1,
        name: 'Sara Ibrahim',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
        initials: 'S'
    },
    {
        id: 2,
        name: 'Mona Hamed',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
        initials: 'M'
    }
];

const CommentsSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
    const [newComment, setNewComment] = useState('');

    const handlePostComment = () => {
        if (!newComment.trim()) return;

        const randomName = MUSLIM_NAMES[Math.floor(Math.random() * MUSLIM_NAMES.length)];
        const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;

        const commentToAdd: Comment = {
            id: newId,
            name: randomName,
            text: newComment,
            date: new Date().toISOString().split('T')[0], // Current date YYYY-MM-DD
            initials: randomName.charAt(0)
        };

        setComments([...comments, commentToAdd]);
        setNewComment('');
    };

    return (
        <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm h-full flex flex-col">
            <h3 className="text-[#1D3557] text-lg font-bold mb-4 text-left">Comments</h3>

            {/* Scrollable Comments List */}
            <div className="space-y-4 mb-6 overflow-y-auto max-h-[400px] pr-2">
                {comments.map((comment) => (
                    <div key={comment.id} className="border border-slate-100 rounded-lg p-4 bg-white">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                    {comment.initials}
                                </div>
                                <span className="text-[#1D3557] font-bold text-sm">{comment.name}</span>
                            </div>
                            <span className="text-slate-400 text-xs">{comment.date}</span>
                        </div>
                        <p className="text-slate-600 text-sm text-left pl-11">
                            {comment.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Comment Input */}
            <div className="mt-auto">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none mb-4 bg-white text-slate-600 placeholder:text-slate-400"
                    placeholder=""
                />
                <div className="flex justify-start">
                    <button
                        onClick={handlePostComment}
                        className="bg-[#1D3557] text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#152744] transition-colors"
                    >
                        <Send size={16} />
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentsSection;
