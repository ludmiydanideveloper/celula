"use client";

import React from 'react';
import { QrCode } from 'lucide-react';

export default function QRTag({ id }: { id: string }) {
  return (
    <div className="flex flex-col items-center gap-1 p-2 bg-white border border-charcoal/20 rounded shadow-sm w-fit">
      <div className="relative group">
        <QrCode className="w-12 h-12 text-charcoal opacity-80 group-hover:opacity-100 transition-opacity" />
        {/* Fake "Digital" scan animation */}
        <div className="absolute inset-0 bg-highlight-yellow/10 animate-pulse pointer-events-none" />
      </div>
      <span className="text-[8px] font-mono font-black text-charcoal/40 uppercase tracking-tighter">
        AR_ACCESS_{id}
      </span>
    </div>
  );
}
