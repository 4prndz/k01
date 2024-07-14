import NextLink from 'next/link';
import { GoChevronRight } from 'react-icons/go';
import Image from 'next/image';

export const Title = ({ children }) => {
  return (
    <>
      <div className="flex place-items-end mb-4">
        <NextLink href="/projects">
          <p className="text-xl mb-4 text-violet-300 hover:underline hover:text-violet-400">
            Projects
          </p>
        </NextLink>
        <span className="mx-1 mb-4">
          <GoChevronRight size={32} />
        </span>
        <h3 className="inline-block text-3xl mb-4 font-bold">{children}</h3>
      </div>
    </>
  );
};

export const ProjectImage = ({ src, alt }) => {
  return <Image className="rounded-lg w-full mb-4" src={src} alt={alt} />;
};

export const Meta = ({ children }) => {
  return (
    <div className="mr-4 px-2 font-semibold rounded-md text-white bg-cyan-300 border-2 border-cyan-500 shadown-lg">
      {children}
    </div>
  );
};
