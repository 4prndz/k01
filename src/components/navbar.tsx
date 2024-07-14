'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import Logo from './logo';
import NextLink from 'next/link';
import ThemeSwitcher from '../components/themeSwitcher';

const LinkItem = ({
  href,
  path,
  children
}: {
  href: string;
  path: string;
  children: ReactNode;
}) => {
  const active = path === href;
  // const inactiveColor = #AFAFAF;
  return (
    <NextLink href={href}>
      <div
        className={`p-2 ${active ?? 'bg-cyan-300'} ${active ?? 'text-black'} hover:underline`}
      >
        {children}
      </div>
    </NextLink>
  );
};

const Navbar = (props: { path: string }) => {
  const { path } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full bg-white-400 z-10 ${props}`}>
      <div className="flex p-2 max-w-screen-lg container flex-wrap items-center justify-between gap-20 text-xl align-middle md:justify-start backdrop-blur-2xl bg-white/15 dark:bg-black/15 ">
        <h1 className="text-4xl tracking-tighter">
          <Logo />
        </h1>
        <div className="hidden md:flex justify-between align-middle flex-grow">
          <div className="flex gap-8 mt-1">
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
          </div>

          <div className="p-2 px-2 rounded-xl bg-violet-300 text-black dark:bg-yellow-300">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="md:hidden flex gap-10">
          <div className="p-2 px-2 rounded-xl bg-violet-300 text-black dark:bg-yellow-300">
            <ThemeSwitcher />
          </div>
          <button
            onClick={toggleDropdown}
            className="focus:outline-none bg-white border shadow-lg p-1 rounded-xl dark:bg-black/0"
          >
            <svg
              className="w-8 h-8 rounded-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="flex justify-end md:hidden" ref={dropdownRef}>
          <div className="w-56 flex flex-col justify-center align-middle p-2 bg-white rounded-xl shadow-black mx-2 animate-fade-down animate-duration-200 dark:text-black shadow-sm">
            <LinkItem href="/projects" path={path}>
              <p onClick={toggleDropdown} className="max-w-full">
                Projects
              </p>
            </LinkItem>
            <hr />
            <LinkItem href="/posts" path={path}>
              <p onClick={toggleDropdown} className="max-w-full">
                Posts
              </p>
            </LinkItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export { LinkItem, Navbar };
