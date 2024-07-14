'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import Logo from './logo';
import NextLink from 'next/link';
import ThemeSwitcher from '../components/themeSwitcher';
import { usePathname } from 'next/navigation';

const LinkItem = ({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) => {
  const active = usePathname() === href;
  // const inactiveColor = #AFAFAF;
  return (
    <NextLink href={href}>
      <div
        className={`py-2 px-3 ${active && 'underline'} rounded- hover:underline duration-300`}
      >
        {children}
      </div>
    </NextLink>
  );
};

const Navbar = () => {
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
    <nav
      className={`flex flex-col md:place-items-center justify-center fixed w-full bg-white-400 z-10 backdrop-blur-2xl bg-white/15 dark:bg-black/15 `}
    >
      <div className="flex p-2 max-w-screen-md container flex-wrap items-center justify-between gap-20 text-xl align-middle md:justify-start">
        <h1 className="text-4xl tracking-tighter">
          <Logo />
        </h1>
        <div className="hidden md:flex justify-between align-middle place-items-center flex-grow">
          <div className="flex gap-8 mt-1">
            <LinkItem href="/projects">
              <p>Projects</p>
            </LinkItem>
            <LinkItem href="/posts">
              <p>Posts</p>
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
        <div
          className="flex justify-end absolute right-0 top-16 md:hidden"
          ref={dropdownRef}
        >
          <div className="w-56 flex flex-col justify-center align-middle p-2 bg-white rounded-xl shadow-black mx-2 animate-fade-down animate-duration-200 dark:text-black shadow-sm">
            <LinkItem href="/projects">
              <p onClick={toggleDropdown} className="max-w-full">
                Projects
              </p>
            </LinkItem>
            <hr />
            <LinkItem href="/posts">
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
