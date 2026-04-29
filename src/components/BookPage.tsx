import React from 'react';

export default function BookPage({ children, isLeft }: { children: React.ReactNode; isLeft?: boolean }) {
  return (
    <div className={`w-full md:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col ${isLeft ? 'md:border-r border-black/5' : ''}`}>
      {children}
    </div>
  );
}
