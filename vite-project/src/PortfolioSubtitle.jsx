import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

function PortfolioSubtitle(){
    const titles = ["Web","Software", "Frontend", "Backend", "Game", "Desktop"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        }, 2000); // every 2 seconds
        return () => clearInterval(interval);
    }, []);
    const container = useRef();

    return(
        <AnimatePresence mode="wait">
                    <motion.span
                        key={titles[index]} // key is required for AnimatePresence to trigger
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            fontWeight: "bold",
                            margin: "0",
                            padding: "0",
                            display: "inline",
                            color: "var(--secondary)",
                            verticalAlign: "baseline"
                            }}
                        >
                        {titles[index]}
                    </motion.span>
        </AnimatePresence>
    )
}

export default PortfolioSubtitle