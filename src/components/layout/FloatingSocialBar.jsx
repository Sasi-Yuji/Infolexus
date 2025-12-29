import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RiFacebookFill,
    RiTwitterXFill,
    RiLinkedinFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiWhatsappLine
} from 'react-icons/ri';
import { ChevronUp } from 'lucide-react';

const FloatingSocialBar = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const socialLinks = [
        { icon: RiFacebookFill, href: 'https://facebook.com', bg: 'bg-[#1877F2]' },
        { icon: RiTwitterXFill, href: 'https://twitter.com', bg: 'bg-black' },
        { icon: RiLinkedinFill, href: 'https://linkedin.com', bg: 'bg-[#0A66C2]' },
        { icon: RiInstagramFill, href: 'https://instagram.com', bg: 'bg-[#E4405F]' },
        { icon: RiYoutubeFill, href: 'https://youtube.com', bg: 'bg-[#FF0000]' },
    ];

    return (
        <div
            className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-3 pointer-events-auto"
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Desktop: Always Visible Links */}
            <div className="hidden lg:flex flex-col gap-3 items-center mb-2">
                {socialLinks.map((item, index) => (
                    <a
                        key={`desktop-${index}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-10 h-10 ${item.bg} text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                    >
                        <item.icon size={18} />
                    </a>
                ))}
                <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
                >
                    <RiWhatsappLine size={20} />
                </a>
            </div>

            {/* Mobile/Tablet: Toggleable Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex lg:hidden flex-col gap-3 items-center mb-2"
                    >
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-10 h-10 ${item.bg} text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                            >
                                <item.icon size={18} />
                            </a>
                        ))}
                        <a
                            href="https://wa.me/yourphonenumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
                        >
                            <RiWhatsappLine size={20} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle / Social Button - Mobile/Tablet Only */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#020617] border border-white/20 text-white rounded-full shadow-2xl hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 group z-50 order-first"
            >
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </div>
            </button>

            {/* Back to Top Button - BELOW Hamburger */}
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: -20 }}
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingSocialBar;
