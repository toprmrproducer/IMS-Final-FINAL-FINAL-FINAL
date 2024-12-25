import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  aspectRatio: string;
  index: number;
}

export default function VideoCard({ id, title, description, aspectRatio, index }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Play className="w-5 h-5 text-[#FF0000]" />
          </div>
          <div>
            <h3 className="text-xl font-display text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg">
          <div style={{ paddingTop: `${aspectRatio}%` }} className="relative">
            <iframe
              src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={title}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}