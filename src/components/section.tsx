import React, { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="animate-fade-up">{children}</div>;
};

export default Section;
