import * as React from 'react';
import ReactNoSSR from 'react-no-ssr'

export interface ISuspensefulProps {
    children: React.ReactNode,
    loader?: React.ReactNode
}

export function Suspenseful ({children, loader = "...loading"}: ISuspensefulProps) {
  return (
    <ReactNoSSR>
        <React.Suspense fallback={loader}>
            {children}
        </React.Suspense>
    </ReactNoSSR>
  );
}
