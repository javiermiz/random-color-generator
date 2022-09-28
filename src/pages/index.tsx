import { Title, Container, Subtitle } from '@/components';
import useColor from '@/hooks/useColor';
import Head from 'next/head';

const Home = () => {
  const color = useColor();

  return (
    <>
      <SEO />
      <Container background={color.normal}>
        <Title>{color.normal}</Title>
        <Subtitle>rgb({color.rgb})</Subtitle>
        <Subtitle color={color.inverted}>Inverted: {color.inverted}</Subtitle>
      </Container>
    </>
  );
};

const SEO = () => (
  <Head>
    <title>Random Color Generator - Javier Miz</title>
    <meta
      property="og:title"
      content="Random Color Generator - Javier Miz"
      key="title"
    />
  </Head>
);

export default Home;
