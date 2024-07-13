import { ReactNode, useState } from 'react';
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`fixed w-full bg-white-400 backdrop-blur-md z-0 ${props}`}>
      <div className="flex p-2 max-w-screen-lg container flex-wrap items-center justify-between gap-20 text-xl align-middle md:justify-start">
        <h1 className="text-4xl tracking-tighter">
          <Logo />
        </h1>
        <div className="hidden md:flex justify-between align-middle flex-grow">
          <div className="flex gap-8 mt-1">
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
          </div>

          <div className="border-2 p-2 rounded-xl border-black dark:border-white ">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="md:hidden flex gap-10">
          <ThemeSwitcher />
          <button onClick={toggleDropdown} className="focus:outline-none">
            <svg
              className="w-8 h-8"
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
        <div className="md:hidden">
          <div className="flex flex-col p-2">
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
          </div>
        </div>
      )}
    </nav>
  );
};
export { LinkItem, Navbar };
