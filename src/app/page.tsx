import Image from 'next/image';
import profile from '../../public/profile.png';
import Section from '../components/section';
import NextLink from 'next/link';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    href: 'https://x.com/4prndz',
    icon: FaTwitter
  },
  {
    href: 'https://www.instagram.com/4prndz',
    icon: FaInstagram
  },
  {
    href: 'https://github.com/4prndz/',
    icon: FaGithub
  }
];

const Page = () => {
  return (
    <>
      <div className="rounded-lg font-semibold text-white bg-gray-900 dark:bg-gray-500 p-3 mb-8 text-center text-lg shadow-lg">
        Hello, I&apos;m a developer based in Brasil ~ 🇧🇷!
      </div>
      <div className="mx-1 flex flex-col gap-6 align-middle place-items-center md:flex-row text-center md:text-start md:justify-start mb-8">
        <div className="flex-grow">
          <h2 className="text-4xl font-semibold mb-4">
            Victor{' '}
            <span className="underline underline-offset-8 font-bold">
              Kouichi
            </span>
          </h2>
          <p className="font-normal">
            4prndz ( Developer / CS and Math Student / Artist )
          </p>
        </div>
        <div className="relative w-32 h-32 md:w-12 md:h-32 flex-grow">
          <Image
            src={profile}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="border-2 dark:border-white rounded-full"
          />
        </div>
      </div>
      <Section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-gray-500 decoration-4 mb-4">
            About me
          </h2>
          <p className="leading-9 text-lg tracking-wide indent-4">
            I&apos;m probably one of the <b>worst</b> developers and full-stack
            engineers that I know. I&apos;m diving into Computer Science and
            Mathematics, so I&apos;ve got a good handle on the theory of both.
            One of my favorite things to do is check out new topics{' '}
            <i>(even if I drop them later)</i> and spend time building random
            projects just for fun <i>(even if I never use them)</i>. At this
            moment, I am suffering to finish my degree.
          </p>
          <div className="mx-auto w-44 my-8">
            <NextLink
              href="/projects"
              className="text-white bg-gray-600 dark:bg-gray-400  hover:bg-gray-900 dark:hover:bg-gray-600  px-3 py-3 rounded-lg text-center duration-300 flex justify-center items-start gap-2 font-bold dur"
            >
              My portfolio <span className="font-serif">{'>'}</span>
            </NextLink>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-gray-500 decoration-4 mb-4">
          Socials
        </h2>
        <div className="flex mt-10 gap-16 justify-center ">
          {socials.map((social, index) => (
            <NextLink href={social.href} key={index} target="_blank">
              <social.icon size={36} className="hover:scale-125 duration-300" />
            </NextLink>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Page;
