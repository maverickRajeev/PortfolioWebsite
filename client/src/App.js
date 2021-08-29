import Contact from "./components/Contact/Contact";
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import { Section } from "./styles/GlobalComponents";
import { Layout } from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Contact />
    </Layout>
  );
};

export default App;
