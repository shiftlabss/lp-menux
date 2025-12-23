import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, delay = 0, duration = 0.6, yOffset = 20, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out (cubic-bezier)
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
