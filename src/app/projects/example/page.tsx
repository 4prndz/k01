import { HiExternalLink } from 'react-icons/hi';
import { Title, ProjectImage, Meta } from '../../../components/projects';
import Layout from '../../../components/layouts/article';
import Section from '../../../components/section';
import NextLink from 'next/link';
import exampleImage from '../../../../public/example-thumbnail.jpg';

const Project = () => {
  return (
    <Section>
      <div className="mx-4">
        <Layout title="example">
          <div className="mb-8">
            <Title>Example</Title>
            <p className="indent-4 text-lg">
              This is a example of Project, building with nothing, for 0 active
              users, cross-pllatform, without resposivity, no support. Its a
              project life-time, no money earned and no mainteners.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex place-items-center ">
              <Meta>URL</Meta>
              <span className="text-violet-300 hover:text-violet-400 hover:underline">
                <NextLink href="#">
                  <p className="flex gap-2">
                    https://example.com <HiExternalLink />
                  </p>
                </NextLink>
              </span>
            </div>
            <div className="flex place-items-center">
              <Meta>PLATFORM</Meta>
              <span>Linux / Windows / MacOS</span>
            </div>
            <div className="flex place-items-center">
              <Meta>STACK</Meta>
              <span>NodeJS, Electron, React Native</span>
            </div>
            <div className="flex place-items-center">
              <Meta>BLOGPOST</Meta>
              <span className="text-violet-300 hover:text-violet-400 hover:underline">
                <NextLink href={'#'}>
                  <p className="flex gap-2">
                    HOW I BUILD NOTHING!!! <HiExternalLink />
                  </p>
                </NextLink>
              </span>
            </div>
          </div>
          <ProjectImage src={exampleImage} alt="Example" />
          <ProjectImage src={exampleImage} alt="Example" />
        </Layout>
      </div>
    </Section>
  );
};

export default Project;
