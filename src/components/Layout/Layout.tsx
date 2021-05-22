import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl m-auto px-2">{children}</div>;
};
