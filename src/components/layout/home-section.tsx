import Image from 'next/image';
import Link from 'next/link';

import {
  CONTACT_URLS,
  GREETING_NAME,
  PROFILE_BIO,
  PROFILE_IMG_URL,
} from '@/data';

import {
  GithubIcon,
  InstagramIcon,
  LaravelIcon,
  LinkendInIcon,
  NextJSIcon,
  ReactIcon,
  ScrollDownIcon,
} from '../icons';
import { Header } from './header';

export const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-blue-50 pb-8">
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-12 px-8 py-14">
        <div className="group relative h-[9rem] w-[9rem] rounded-full border border-gray-300 bg-slate-200">
          <div className="absolute inset-0 z-30 scale-110 rounded-full bg-white"></div>
          <div
            style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, #3b82f6, #2563eb, #1e40af, #1e3a8a, #3b82f6)',
            }}
            className="absolute inset-0 z-20 scale-[116%] rounded-full duration-75 group-hover:animate-spin"
          ></div>
          <Image
            className="z-40 rounded-full"
            fill
            src={PROFILE_IMG_URL}
            alt="profile"
          />
          <NextJSIcon className="slide-in-left absolute top-0 -left-13 w-8 rotate-16 drop-shadow-md" />
          <LaravelIcon className="slide-in-left absolute top-1/2 -left-15 w-8 -translate-y-1/2 drop-shadow-md" />
          <ReactIcon className="slide-in-left absolute bottom-0 -left-13 w-8 -rotate-16 drop-shadow-md" />
        </div>
        <div className="flex w-fit flex-col items-center gap-6">
          <h1 className="text-6xl font-semibold">
            <span className="text-gray-700">I&apos;m</span>{' '}
            <span className="text-blue-800">{GREETING_NAME}</span>{' '}
          </h1>
          <p className="max-w-[760px] text-center text-lg leading-relaxed font-light text-blue-950">
            {PROFILE_BIO}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-fit flex-row gap-4">
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-[scale] hover:scale-105 [&>svg]:h-[60%]"
            href={CONTACT_URLS.linkendin}
            target="_blank"
          >
            <LinkendInIcon />
          </Link>
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-[scale] hover:scale-105 [&>svg]:h-[60%]"
            href={CONTACT_URLS.github}
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-[scale] hover:scale-105 [&>svg]:h-[60%]"
            href={CONTACT_URLS.instagram}
            target="_blank"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="mt-18 flex w-full flex-col items-center justify-center gap-2">
        <ScrollDownIcon className="w-12" />
        <h2 className="text-sm font-light text-gray-400">Scroll Down</h2>
      </div>
    </section>
  );
};
