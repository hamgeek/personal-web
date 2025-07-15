'use client';

import Lenis from 'lenis';
import React, { useLayoutEffect } from 'react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return children;
};
