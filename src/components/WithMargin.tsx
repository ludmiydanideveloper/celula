import React from 'react';

interface WithMarginProps {
  children: React.ReactNode;
  marginContent: React.ReactNode;
  isLeftPage?: boolean;
}

export default function WithMargin({ children, marginContent, isLeftPage }: WithMarginProps) {
  return (
    <div className={`flex flex-col xl:flex-row gap-6 mb-6 ${isLeftPage ? 'xl:flex-row-reverse' : ''}`}>
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <div className="w-full xl:w-2/5 flex-shrink-0">
        {marginContent}
      </div>
    </div>
  );
}
