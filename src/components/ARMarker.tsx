import React from 'react';
import { ScanFace } from 'lucide-react';

export default function ARMarker() {
  return (
    <div className="my-8 border-2 border-dashed border-charcoal/30 rounded-xl p-6 bg-paper-white flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group hover:border-plant-green transition-colors cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-plant-green/10 to-animal-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <ScanFace className="w-16 h-16 text-charcoal/50 group-hover:text-plant-green mb-4 transition-colors" />
      <h3 className="font-inter font-bold text-lg mb-2 text-ink-black">ESCANEA EL CRISTAL</h3>
      <p className="font-inter text-sm text-charcoal/70">Iniciando WebAR...</p>
    </div>
  );
}
