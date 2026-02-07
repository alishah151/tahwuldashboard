import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    searchQuery: string;
    index?: number;
    className?: string;
}

const sectionVariants: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeOut,
            delay: 0.2 + index * 0.2,
        },
    }),
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 0.3, ease: easeOut },
    },
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    searchQuery,
    index = 0,
    className = '',
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useLayoutEffect(() => {
        if (!contentRef.current) return;

        const el = contentRef.current;

        const timeout = setTimeout(() => {
            const text = el.textContent || '';
            const visible = !searchQuery || text.toLowerCase().includes(searchQuery.toLowerCase());
            setIsVisible(prev => (prev === visible ? prev : visible));
        });

        return () => clearTimeout(timeout);
    }, [searchQuery, children]);


    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key={index}
                    className={className}
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={index}
                >
                    <div ref={contentRef}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SectionWrapper;
