import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceDetails } from '../../data/serviceDetails';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter out undefined services (like dm-11 if it's still there as undefined)
    const services = Object.entries(serviceDetails).filter(([_, val]) => val !== undefined);

    return (
        <div className="font-sans bg-slate-50 min-h-screen">
            {/* Services Page Content Removed as per User Request */}
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                {/* Content removed */}
            </div>
        </div>
    );
};

export default Services;
