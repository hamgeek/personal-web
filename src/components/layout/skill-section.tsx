'use client';

import { motion, Variants } from 'motion/react';

import {
  CrossUnderlineIcon,
  CSSIcon,
  DatabaseIcon,
  HTMLIcon,
  JSIcon,
  LaravelIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TSIcon,
} from '../icons';

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center justify-center gap-12 bg-blue-50 px-6 pt-10 pb-18"
    >
      <div className="flex max-w-[44rem] flex-col gap-12 rounded-3xl bg-blue-900 px-8 pt-10 pb-18 shadow-2xl md:px-14">
        <motion.h2
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="relative mx-auto w-fit text-3xl font-semibold tracking-wider text-white"
        >
          Skills
          <CrossUnderlineIcon className="absolute inset-x-0 -bottom-2" />
        </motion.h2>
        <div className="relative w-full">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            className="mx-auto flex flex-row flex-wrap justify-center gap-4"
          >
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <HTMLIcon className="w-4" />
              <span>HTML</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <CSSIcon className="w-4" />
              <span>CSS</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <JSIcon className="w-4" />
              <span>Javascript</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <TSIcon className="w-4" />
              <span>Typescript</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <NodeJSIcon className="w-4" />
              <span>Node.js</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <ReactIcon className="w-4" />
              <span>React</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <NextJSIcon className="w-4" />
              <span>Next.js</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <LaravelIcon className="w-4" />
              <span>Laravel</span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="flex w-fit flex-row items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-950 antialiased"
            >
              <DatabaseIcon className="w-4" />
              <span>Database</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
