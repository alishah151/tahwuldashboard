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
    }
};
