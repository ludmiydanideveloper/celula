import React from 'react';

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen py-4 md:py-8 px-2 md:px-4 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-cream-base rounded-md shadow-2xl flex flex-col md:flex-row relative book-shadow">
        {/* Book spine shadow effect */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-16 -ml-8 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none z-10" />
        {children}
      </div>
    </div>
  );
}
