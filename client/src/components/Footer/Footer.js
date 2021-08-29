import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkList,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList></LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Created by Rajeev Ranjan Chaurasia | Copyright{"\u00A9"} 2021
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="mailto:ranjanrajeev1006@gmail.com">
            <AiOutlineMail size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/maverickRajeev">
            <AiFillGithub size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rajeev-ranjan-chaurasia-8b7a4b192/">
            <AiFillLinkedin size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/rajeev_chaurasiya/">
            <AiFillInstagram size="5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
