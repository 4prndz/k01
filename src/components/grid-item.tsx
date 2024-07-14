import NextLink from 'next/link';
import Image from 'next/image';

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <div className="flex align-center max-w-full">
      <NextLink href={href}>
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="shadow-lg"
        />
        <h4 className="text-xl md:text-lg text-center mt-3 font-semibold">
          {title}
        </h4>
        <p className="text-center">{children}</p>
      </NextLink>
    </div>
  );
};

export const ProjectsGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <div className="mb-6">
      <NextLink href={`/projects/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="shadow-lg"
        />
        <h4 className="text-xl md:text-lg text-center mt-3 font-semibold">
          {title}
        </h4>
        <p className="text-center">{children}</p>
      </NextLink>
    </div>
  );
};
