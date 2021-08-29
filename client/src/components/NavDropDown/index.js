import React from "react";
import { BiDesktop } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./NavDropDown";

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#projects">
      <DropDownIcon>
        <BiDesktop size="2.5rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Projects</DropDownItemTitle>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#tech">
      <DropDownIcon>
        <FiDatabase size="2.5rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Technologies</DropDownItemTitle>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#about">
      <DropDownIcon>
        <IoIosPaper size="2.5rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Resume</DropDownItemTitle>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#contact">
      <DropDownIcon>
        <FaPaperPlane size="2.5rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Contact</DropDownItemTitle>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
