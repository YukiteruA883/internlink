"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Support() {
    return (
        <div>
            <motion.div
                animate={{ opacity: 1, y: 0 }} // Add slide-in effect
                initial={{ x: '0', opacity: 0, y: 100 }} // Slide in from the bottom
                transition={{ duration: 1 }}
            >
            <div className="flex items-center justify-center pt-24">
                <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
                    Support
                </h1>
            </div>
            </motion.div>

            <div className="text-center text-4xl font-bold">
                
            </div>
        </div>
    );
}