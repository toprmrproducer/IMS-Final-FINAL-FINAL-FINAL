import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ResultCardProps {
  src: string;
  title: string;
  stats: {
    metric: string;
    value: string;
  };
  index: number;
}

export default function ResultCard({ src, title, stats, index }: ResultCardProps) {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      y: [0, -5, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
    controls.start({ y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      animate={controls}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="overflow-hidden rounded-lg mb-6">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <img 
              src={src}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-black/50 backdrop-blur-sm p-4 rounded-lg">
          <div>
            <h3 className="text-xl font-display text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{stats.metric}</p>
          </div>
          <div className="bg-[#FF0000]/10 px-4 py-2 rounded-full">
            <span className="text-[#FF0000] font-medium text-lg">{stats.value}</span>
          </div>
        </div>

        {/* Interactive Corner Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF0000]/10 transform rotate-45 translate-x-8 -translate-y-8" />
        </div>
      </div>
    </motion.div>
  );
}