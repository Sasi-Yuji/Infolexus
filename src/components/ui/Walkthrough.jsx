import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import walkthroughVideo from '../../assets/Infolexus walk through.mp4';

const Walkthrough = ({ onComplete }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // If autoplay is blocked, we might want to show a play button or just skip.
                // For now, let's just skip if it fails (or user interaction is required).
                // But usually, muted autoplay works.
            });

            const handleEnded = () => {
                onComplete();
            };

            video.addEventListener('ended', handleEnded);

            return () => {
                video.removeEventListener('ended', handleEnded);
            };
        }
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="relative w-[90%] max-w-5xl aspect-video overflow-hidden">
                {/* Video Container to maintain aspect ratio or cover */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={walkthroughVideo}
                    muted
                    playsInline
                    autoPlay
                />

                {/* Optional: clear Skip button if the user wants to bypass */}
                <button
                    onClick={onComplete}
                    className="absolute bottom-6 right-6 text-white/70 hover:text-white text-xs md:text-sm uppercase tracking-widest border border-white/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                    Skip Intro
                </button>
            </div>
        </motion.div>
    );
};

export default Walkthrough;
