export const animationConfig = {
    sidebar: {
        initial: { x: -300, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.5, ease: "easeOut" }
    },
    topMenu: {
        initial: { y: -70, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, ease: "easeOut", delay: 1 } // Starts after sidebar (0.5s)
    },
    section: {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: (index: number) => ({
            duration: 0.5,
            ease: "easeOut",
            delay: 1.0 + (index * 0.1) // Starts after TopMenu (1.0s) + staggering
        })
    }
};
