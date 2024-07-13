import Image from 'next/image';
import profile from '../../public/profile.png';
import Section from '../components/section';
import NextLink from 'next/link';
import { GoChevronRight } from 'react-icons/go';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="mx-4 text-lg">
      <div className="rounded-lg text-white bg-gray-900 dark:bg-gray-500 p-3 my-6 text-center text-lg">
        Hello, I&apos;m a developer based in Brasil!
      </div>
      <div className="flex flex-col gap-6 align-middle place-items-center md:flex-row md:justify-start">
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mt-4 mb-2">Victor Kouichi</h2>
          <p>4prndz ( Developer / CS and Math Student / Artist)</p>
        </div>
        <div className="flex-grow">
          <Image
            src={profile}
            alt="Profile"
            width={125}
            height={125}
            className="border-2 border-black dark:border-white rounded-full inline-block"
          />
        </div>
      </div>
      <Section>
        <h2 className="text-2xl font-bold mt-8 mb-2 underline underline-offset-8 decoration-gray-500 decoration-4">
          About me
        </h2>
        <p className="leading-9 mt-5 text-lg tracking-wide">
          I&apos;m probably one of the <b>laziest</b> developers and full-stack
          engineers based in Goiânia.
          <br />
          Right now, I&apos;m diving into Computer Science and Mathematics, so
          I&apos;ve got a good handle on tech theory.
          <br />
          One of my favorite things to do is check out new topics (even if I
          drop them later) and build random projects just for fun (even if I
          never use them).
        </p>
        <div className="mx-auto w-48 my-8">
          <NextLink
            href="/works"
            className="bg-gray-400 px-4 py-3 rounded-md text-center text-black duration-300 hover:bg-gray-100"
          >
            My Portfolio <GoChevronRight className="inline-block" size={18} />
          </NextLink>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mt-14 mb-2 underline underline-offset-8 decoration-gray-500 decoration-4">
          Experiences
        </h2>
        <div className="flex flex-col gap-3 mt-8">
          <div className="grid grid-cols-2">
            <p>
              <b>09/2023 ~ Present</b>
            </p>
            <p className="">
              Intern Back-end PHP - <i>HubSys</i>
            </p>
          </div>
          <div className="grid grid-cols-2">
            <p>
              <b>04/2023 ~ 06/2023</b>
            </p>
            <p className="">
              Freelancer <i>PrimeSites</i>
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mt-14 mb-2 underline underline-offset-8 decoration-gray-500 decoration-4">
          Socials
        </h2>
        <div className="flex mt-10 gap-16 justify-center ">
          <NextLink href="https://x.com/4prndz ">
            <FaGithub size={42} className="hover:scale-125 duration-300" />
          </NextLink>
          <NextLink href="https://www.instagram.com/4prndz">
            <FaTwitter size={42} className="hover:scale-125 duration-300" />
          </NextLink>
          <NextLink href="https://github.com/4prndz">
            <FaInstagram size={42} className="hover:scale-125 duration-300" />
          </NextLink>
        </div>
      </Section>
    </div>
  );
};

export default Page;
