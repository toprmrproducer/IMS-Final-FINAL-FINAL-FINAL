import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function ConsultationButton() {
  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1D0_B6sxCy40djaqSCI7HgHOWfurFnn1wfkUKNaL8vGFgf6nvRlO0wTxL1mF4ldxk2DNaFjHUa', '_blank');
  };

  return (
    <motion.button
      onClick={openCalendar}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-[#FF0000]/20 rounded-lg blur-xl animate-pulse" />
      
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF0000]/30 to-transparent"
          style={{
            animation: 'wave 2s infinite linear',
            backgroundSize: '200% 100%'
          }}
        />
      </div>

      <div className="relative px-6 py-2 bg-[#FF0000] rounded-lg text-white font-medium flex items-center gap-2">
        <Calendar className="w-4 h-4 group-hover:animate-bounce" />
        <span>Get a Free Consultation</span>
        <span className="text-xl group-hover:animate-bounce">✨</span>
      </div>
    </motion.button>
  );
}