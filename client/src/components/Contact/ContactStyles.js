import styled from "styled-components";

export const SubmitButton = styled.input`
  background-color: #052965;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  letter-spacing: 0.7px;
  box-shadow: inset 5px 5px 10px #0f1624, inset -5px -5px 10px blue;
  margin-right: 15%;
  margin-bottom: 40px;

  &:hover {
    background-color: blue;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    float: right;
    margin-right: 20%;
  }
`;
export const Row = styled.div`
  width: 100%;
  margin-bottom: 25px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Column25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Column75 = styled.div`
  float: right;
  width: 75%;
  margin-top: 6px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const Input = styled.input`
  width: 80%;
  padding: 12px;
  border: 1.5px solid white;
  background-color: #0f1624;
  color: white;
  border-radius: 4px;
  resize: vertical;
`;
export const Textarea = styled.textarea`
  width: 80%;
  padding: 12px;
  border: 1.5px solid white;
  background-color: #0f1624;
  color: white;
  border-radius: 4px;
  resize: vertical;
`;

export const Label = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-size: 25px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }
`;
