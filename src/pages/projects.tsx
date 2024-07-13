import Section from '../components/section';
import { ProjectsGridItem } from '../components/grid-item';
import ExampleThumb from '@/../public/example-thumbnail.jpg';
import ExampleThumb2 from '@/../public/example-thumbnail-3.png';
import ExampleThumb3 from '@/../public/example-thumbnail-2.png';

const Projects = () => {
  return (
    <div className="mx-4">
      <h3 className="text-3xl mb-4 font-bold">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section>
          <ProjectsGridItem
            id="teste"
            title="This is a test"
            thumbnail={ExampleThumb}
          >
            Written and building a lazy linked-list in Assembly x86.
          </ProjectsGridItem>
        </Section>
        <Section>
          <ProjectsGridItem
            id="teste"
            title="This is a test"
            thumbnail={ExampleThumb2}
          >
            Building a WCAG-compliant website for a local business.
          </ProjectsGridItem>
        </Section>
        <Section>
          <ProjectsGridItem
            id="teste"
            title="This is a test"
            thumbnail={ExampleThumb3}
          >
            Building a Landing Page for a local business, with React, Next.JS
            and TailwindCSS.
          </ProjectsGridItem>
        </Section>
      </div>
    </div>
  );
};

export default Projects;
