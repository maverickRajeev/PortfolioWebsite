import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  // border-bottom:2px solid white;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #0e131f;
    z-index: 999;
    box-shadow: inset 0 0 2px #000000;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    // grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: repeat(2, 60px);
    // grid-column-gap: 0.5rem;
    // grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   grid-area: 2 / 2 / 3 / 5;
  // }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   align-items: center;
  //   grid-area: 1 / 4 / 2 / 6;
  // }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5vw;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: none;
  position: relative;
  background: none;
  font-size: 30px;
  float: right;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0;
    display: flex;
  }
`;

export const NavProductsIcon = styled(AiOutlineMenu)`
  align-self: center;
  transition: 0.3s ease;
  size: 50px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const Li = styled.li`
  padding-left: 20px;
  padding-right: 20px;
`;

export const SpanHeader = styled.a`
  font-size: 3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3 rem;
  }
`;
