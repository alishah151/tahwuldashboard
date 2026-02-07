import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Message {
    id: number;
    name: string;
    message: string;
    date: string;
    initials: string;
}

interface MessageState {
    data: Message[];
    addMessage: (msg: Message) => void;
    clearMessages: () => void;
}

export const useMessageStore = create<MessageState>()(
    persist(
        (set) => ({
            data: [],
            addMessage: (msg: Message) => set((state) => ({ data: [...state.data, msg] })),
            clearMessages: () => set({ data: [] }),
        }),
        {
            name: 'message-storage',
            storage: {
                getItem: (name: string) => {
                    const item = localStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name: string, value: any) => {
                    localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name: string) => {
                    localStorage.removeItem(name);
                },
            },
        }
    )
);
