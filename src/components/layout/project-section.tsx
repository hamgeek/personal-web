'use client';

import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { PROJECTS } from '@/data';

import { CrossUnderlineIcon, GithubIcon, LinkIcon } from '../icons';

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

export const ProjectSection = () => {
  return (
    <section id="projects" className="flex w-full flex-col gap-16 py-18">
      <motion.h2
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="relative mx-auto w-fit text-3xl font-semibold tracking-wider text-gray-700"
      >
        Projects
        <CrossUnderlineIcon className="absolute inset-x-0 -bottom-5" />
      </motion.h2>
      <div className="flex w-full items-center justify-center">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0 }}
          className="grid w-fit grid-cols-1 gap-6 md:min-w-3xl md:grid-cols-3"
        >
          {PROJECTS.map(
            (
              { title, description, tags, preview_url, github_url, thumb_url },
              index,
            ) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="flex w-full max-w-72 flex-col gap-3 rounded-xl bg-white p-4 ring ring-blue-300 drop-shadow-sm"
              >
                <div className="group relative h-38 w-full overflow-hidden rounded-lg bg-slate-200">
                  {thumb_url && (
                    <Image
                      alt=""
                      fill
                      src={thumb_url}
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium text-blue-950">
                    {title}
                  </h3>
                  <p className="text-sm font-light text-gray-600">
                    {description}
                  </p>
                </div>
                <ul className="flex flex-row flex-wrap gap-2 text-[.70rem] font-light text-blue-950 [&>li]:w-fit [&>li]:rounded-full [&>li]:bg-blue-100 [&>li]:px-2 [&>li]:py-0.5">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="flex w-full flex-row gap-2">
                  {preview_url && (
                    <Link
                      href={preview_url}
                      target="_blank"
                      className="flex cursor-pointer flex-row items-center gap-1 rounded-lg bg-white px-3 py-1 text-xs font-light text-blue-950 ring ring-blue-900 hover:bg-slate-100"
                    >
                      <LinkIcon className="h-[.75rem]" />
                      <span>Preview</span>
                    </Link>
                  )}
                  {github_url && (
                    <Link
                      href={github_url}
                      target="_blank"
                      className="flex flex-row items-center gap-1 rounded-lg bg-gray-800 px-3 py-1 text-xs font-light text-white"
                    >
                      <GithubIcon className="h-[.75rem]" />
                      <span className="antialiased">Github</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};
