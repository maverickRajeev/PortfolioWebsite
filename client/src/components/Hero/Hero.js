import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm Rajeev Ranjan Chaurasia. Currently, I am a final year
        undergraduate pursuing B.Tech in Computer Science and Engineering from
        NIT Meghalaya.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
