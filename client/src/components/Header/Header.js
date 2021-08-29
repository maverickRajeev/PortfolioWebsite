import React, { useState } from "react";
import NavDropDown from "../NavDropDown/index";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { BiDesktop } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import {
  Container,
  SpanHeader,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ContactDropDown,
  NavProductsIcon,
  Li,
} from "./HeaderStyles";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      <Div1>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiCssdeck
            size="4rem"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          <SpanHeader>Portfolio</SpanHeader>
        </a>
      </Div1>
      <ContactDropDown onClick={() => setClicked(!clicked)}>
        <NavProductsIcon />
        <NavDropDown isOpen={clicked} />
      </ContactDropDown>
      <Div2>
        <Li>
          <a
            href="#projects"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <BiDesktop
              size="2.2rem"
              style={{ marginLeft: "4px", marginRight: "4px" }}
            />
            <NavLink>Projects</NavLink>
          </a>
        </Li>
        <Li>
          <a
            href="#tech"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <FiDatabase
              size="2.2rem"
              style={{ marginLeft: "4px", marginRight: "4px" }}
            />
            <NavLink>Technologies</NavLink>
          </a>
        </Li>
        <Li>
          <a
            href="#about"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <IoIosPaper
              size="2.2rem"
              style={{ marginLeft: "4px", marginRight: "4px" }}
            />
            <NavLink>Resume</NavLink>
          </a>
        </Li>
        <Li>
          <a
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <FaPaperPlane
              size="2.2rem"
              style={{ marginLeft: "4px", marginRight: "4px" }}
            />
            <NavLink>Contact</NavLink>
          </a>
        </Li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/maverickRajeev">
          <AiFillGithub size="3.5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rajeev-ranjan-chaurasia-8b7a4b192/">
          <AiFillLinkedin size="3.5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/rajeev_chaurasiya/">
          <AiFillInstagram size="3.5rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
