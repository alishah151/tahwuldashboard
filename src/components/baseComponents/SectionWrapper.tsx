import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import type { Variants } from 'framer-motion';


interface SectionWrapperProps {
    children: React.ReactNode;
    searchQuery: string;
    index?: number;
    className?: string;
}

const sectionVariants: Variants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeOut,
            delay: 0.2 + index * 0.2
        }
    }),
    exit: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: easeOut
        }
    }
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    searchQuery,
    index = 0,
    className = ''
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!searchQuery) {
            setIsVisible(true);
            return;
        }

        if (contentRef.current) {
            const text = contentRef.current.textContent || '';
            setIsVisible(
                text.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    }, [searchQuery]);

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
