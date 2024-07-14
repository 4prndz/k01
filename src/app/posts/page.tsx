import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import { GridItem } from '../../components/grid-item';
import exampleImage from '../../../public/example-thumbnail.jpg';

const Posts = () => {
  return (
    <Section>
      <Layout title="Posts">
        <div className="mx-4">
          <h3 className="text-2xl mb-4 font-bold">Posts</h3>
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GridItem
                title="Why is learn algebraic linear"
                thumbnail={exampleImage}
                href="/posts/why-is-learn-algebraic-linear"
              >
                sss
              </GridItem>
            </div>
          </Section>
        </div>
      </Layout>
    </Section>
  );
};

export default Posts;
