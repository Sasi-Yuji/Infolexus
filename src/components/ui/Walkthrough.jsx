import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import walkthroughVideo from '../../assets/walk-through.mp4';

const Walkthrough = ({ onComplete }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(error => {
                // Autoplay failed - usually due to browser policy. 
                // We just proceed since we have muted autoplay.
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
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#030B25]"
        >
            {/* Main Video Container */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                <video
                    ref={videoRef}
                    className="w-full max-w-4xl object-contain outline-none border-none mix-blend-lighten"
                    src={walkthroughVideo}
                    muted
                    playsInline
                    autoPlay
                />

                {/* Skip button */}
                <button
                    onClick={onComplete}
                    className="absolute bottom-8 right-8 z-20 text-white/50 hover:text-white text-xs md:text-sm uppercase tracking-widest px-5 py-2 hover:bg-white/5 transition-all rounded-full"
                >
                    Skip Intro
                </button>
            </div>
        </motion.div>
    );
};

export default Walkthrough;
