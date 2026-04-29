"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Info, Share2, Zap } from 'lucide-react';

interface DigitalHologramProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'procariota' | 'eucariota';
}

export default function DigitalHologram({ isOpen, onClose, type }: DigitalHologramProps) {
  const [rotation, setRotation] = useState({ x: 20, y: 0 });

  if (!isOpen) return null;

  const isProcariota = type === 'procariota';

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/90 backdrop-blur-md"
      >
        {/* Sci-Fi HUD Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,152,219,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Main Interface Container */}
        <motion.div 
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          className="relative w-[90vw] h-[85vh] max-w-5xl bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Header */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-highlight-yellow rounded-lg">
                <Zap className="w-5 h-5 text-charcoal fill-charcoal" />
              </div>
              <div>
                <h2 className="text-white font-black text-xl tracking-tighter uppercase">
                  Visor Holográfico v2.0
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-white/50 font-mono">ESTADO: RENDERIZACIÓN DIGITAL OK</span>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 3D Viewport Area */}
          <div className="flex-1 relative flex items-center justify-center cursor-move"
               onMouseMove={(e) => {
                 if (e.buttons === 1) {
                   setRotation(prev => ({
                     x: prev.x - e.movementY * 0.5,
                     y: prev.y + e.movementX * 0.5
                   }));
                 }
               }}
          >
            {/* The "Hologram" (Procedural 3D with CSS) */}
            <div className="perspective-1000 relative">
              <motion.div 
                animate={{ 
                  rotateX: rotation.x, 
                  rotateY: rotation.y + (isProcariota ? 0 : 0),
                }}
                className="w-64 h-64 relative preserve-3d"
              >
                {/* Main Body */}
                <div className={`absolute inset-0 rounded-full border-2 ${isProcariota ? 'border-orange-500/50 bg-orange-500/20' : 'border-blue-400/50 bg-blue-400/20'} backdrop-blur-sm shadow-[0_0_50px_rgba(52,152,219,0.3)]`}>
                  {/* Internal Structures */}
                  {!isProcariota && (
                    <motion.div 
                      animate={{ scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-[25%] rounded-full bg-blue-600/40 border border-blue-300 shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center"
                    >
                      <div className="w-4 h-4 bg-white/80 rounded-full blur-sm" />
                    </motion.div>
                  )}
                  
                  {isProcariota && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-80">
                          <path d="M20 50 Q30 20 50 40 T80 60" fill="none" stroke="#E67E22" strokeWidth="4" strokeLinecap="round" />
                          <path d="M40 30 Q50 60 70 40" fill="none" stroke="#E67E22" strokeWidth="2" strokeDasharray="4 2" />
                       </svg>
                    </div>
                  )}

                  {/* Surface Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>

                {/* Rotating Rings */}
                <div className="absolute inset-[-10%] rounded-full border border-white/5 rotate-x-90" />
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20%] rounded-full border border-dashed border-highlight-yellow/20" 
                />
              </motion.div>
            </div>

            {/* Controls Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">
               <div className="flex items-center gap-2"><RotateCcw className="w-3 h-3" /> Arrastrar para rotar</div>
               <div className="flex items-center gap-2"><Info className="w-3 h-3" /> Scroll para zoom</div>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="w-full md:w-80 bg-white/5 border-l border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <span className="text-[10px] text-highlight-yellow font-black uppercase tracking-[0.3em] mb-2 block">Análisis de Sujeto</span>
                <h3 className="text-3xl text-white font-bold mb-4 uppercase">
                  {isProcariota ? 'Célula Procariota' : 'Célula Eucariota'}
                </h3>
                <div className="p-3 bg-white/5 rounded border border-white/10 text-white/70 text-xs leading-relaxed italic">
                  "{isProcariota 
                    ? 'Estructura nivel 1. Sin núcleo definido. ADN flotante. El origen de la vida.' 
                    : 'Metrópolis celular nivel 100. Posee núcleo central y organelos complejos.'}"
                </div>
              </div>

              <div className="space-y-4">
                <StatBar label="Integridad Genética" value={98} color="#FFD700" />
                <StatBar label="Producción ATP" value={isProcariota ? 40 : 92} color="#3498DB" />
                <StatBar label="Resistencia Pared" value={isProcariota ? 85 : 15} color="#2ECC71" />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
              <button className="flex-1 py-3 bg-highlight-yellow text-charcoal font-black text-xs uppercase rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" /> Exportar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function StatBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-[9px] font-bold text-white/50 uppercase">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </div>
  );
}
