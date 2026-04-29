"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Box } from 'lucide-react';

interface ARImageProps {
  src: string;
  alt: string;
  title?: string;
  onScanClick: () => void;
}

export default function ARImage({ src, alt, title, onScanClick }: ARImageProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-charcoal/10 shadow-lg bg-white">
      {/* Image with subtle hover effect */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />

      {/* Premium Scanning Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Scanning Line */}
        <motion.div 
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-highlight-yellow to-transparent shadow-[0_0_15px_rgba(255,215,0,0.8)] z-10"
        />
        
        {/* Digital Grid Overlay (Faint) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      {/* Tactical UI Overlay */}
      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
        <div className="bg-highlight-yellow text-charcoal px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <Scan className="w-4 h-4" />
          Detectar Marcador
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onScanClick();
          }}
          className="bg-white text-charcoal px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-highlight-yellow transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75"
        >
          <Box className="w-4 h-4" />
          Ver en 3D / AR
        </button>
      </div>

      {/* Label Tag */}
      {title && (
        <div className="absolute bottom-2 left-2 bg-charcoal/80 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter border border-white/20">
          ID: {title.toUpperCase()}
        </div>
      )}
    </div>
  );
}
