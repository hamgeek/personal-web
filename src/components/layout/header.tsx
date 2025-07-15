'use client';

import { Variants } from 'motion';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { NAV_LIST, RESUME_URL } from '@/data';

const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const FixedHeader = () => {
    return (
      <motion.div
        variants={slideDownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-4 left-1/2 z-50 w-full max-w-96 -translate-x-1/2 rounded-3xl bg-transparent"
      >
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl py-3 select-none">
          <div className="absolute inset-0 rounded-full bg-gray-800"></div>
          <nav className="flex flex-row gap-4 text-sm leading-6 font-light text-white antialiased [&>a]:relative [&>a]:after:absolute [&>a]:after:bottom-[-2px] [&>a]:after:left-0 [&>a]:after:h-[2px] [&>a]:after:w-full [&>a]:after:origin-left [&>a]:after:scale-x-0 [&>a]:after:bg-blue-400 [&>a]:after:transition-transform [&>a]:after:content-[''] [&>a.active]:text-blue-400 [&>a.active]:after:scale-x-100 [&>a.active]:after:rounded-lg [&>a:hover]:text-blue-400 [&>a:hover]:after:scale-x-100 [&>a:hover]:after:rounded-lg">
            {NAV_LIST.map((v) => (
              <LinkScroll
                key={v.key}
                className="cursor-pointer"
                smooth="easeInOutQuart"
                to={v.key}
                activeClass="active"
                spy
              >
                {v.name}
              </LinkScroll>
            ))}
            <Link href={'/'}>Download CV</Link>
          </nav>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex w-full justify-center py-6 select-none">
      <AnimatePresence mode="wait">
        {isFixed && <FixedHeader />}
      </AnimatePresence>
      <nav
        className={`flex flex-row gap-4 text-sm font-light text-gray-800 antialiased [&>a]:relative [&>a]:after:absolute [&>a]:after:bottom-[-2px] [&>a]:after:left-0 [&>a]:after:h-[2px] [&>a]:after:w-full [&>a]:after:origin-left [&>a]:after:scale-x-0 [&>a]:after:bg-blue-400 [&>a]:after:transition-transform [&>a]:after:content-[''] [&>a.active]:text-blue-400 [&>a.active]:after:scale-x-100 [&>a.active]:after:rounded-lg [&>a:hover]:text-blue-400 [&>a:hover]:after:scale-x-100 [&>a:hover]:after:rounded-lg`}
      >
        {NAV_LIST.map((v) => (
          <LinkScroll
            key={v.key}
            className="cursor-pointer"
            smooth="easeInOutQuart"
            to={v.key}
            activeClass="active"
            spy
          >
            {v.name}
          </LinkScroll>
        ))}
        <Link href={RESUME_URL}>Download CV</Link>
      </nav>
    </div>
  );
};
