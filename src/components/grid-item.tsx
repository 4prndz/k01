import NextLink from 'next/link';
import Image from 'next/image';
import Link from 'next/link';

export const GridItem = ({ children, href, title, thumbnail }) => {
  <div className="flex align-center max-w-full">
    <Link href={href}>
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        loading="lazy"
      />
      <h4 className="text-xl">{children}</h4>
    </Link>
  </div>;
};

export const ProjectsGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <div className="mb-6">
      <NextLink href={`/projects/${id}`}>
        <Image src={thumbnail} alt={title} loading="lazy" />
        <p className="text-xl md:text-lg text-center mt-3 font-semibold">
          {title}
        </p>
        <p className="text-center">{children}</p>
      </NextLink>
    </div>
  );
};
