import React, { useRef, useEffect, useState } from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    searchQuery: string;
    className?: string; // For additional styling if needed (e.g. "col-span-2")
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, searchQuery, className = '' }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!searchQuery) {
            setIsVisible(true);
            return;
        }

        if (contentRef.current) {
            // Get all text content
            const text = contentRef.current.textContent || '';

            // Normalize text to lowercase for case-insensitive match
            // We use standard includes() which supports partial matching (substrings)
            // e.g. "pro" matches "Progress"
            const hasMatch = text.toLowerCase().includes(searchQuery.toLowerCase());

            setIsVisible(hasMatch);
        }
    }, [searchQuery]); // Run whenever searchQuery changes

    return (
        <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${className}`}
            style={{
                marginTop: '0px',
                maxHeight: isVisible ? '2000px' : '0px',
                opacity: isVisible ? 1 : 0,
                marginBottom: isVisible ? undefined : 0,
                visibility: isVisible ? 'visible' : 'hidden' // Ensure it's hidden from screen readers/tab order if hidden
            }}
        >
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default SectionWrapper;
