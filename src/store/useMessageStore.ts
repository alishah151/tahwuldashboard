import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Message {
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

// Store with persist
export const useMessageStore = create<MessageState>()(
    persist(
        (set) => ({
            data: [],
            addMessage: (msg: Message) =>
                set((state) => ({ data: [...state.data, msg] })),
            clearMessages: () => set({ data: [] }),
        }),
        {
            name: 'message-storage', // key in localStorage
            // ✅ No need to override `storage` unless you want custom behavior
            // By default, Zustand uses localStorage with proper serialization
        }
    )
);
