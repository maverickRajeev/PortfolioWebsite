import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex: 1;
  align-items: center;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const SubColumns = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Headers = styled.p`
  width: 85%;
  margin-top: 30px;
  margin-bottom: 25px;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-align: center;
  color: white;
`;

export const Circles = styled.div`
{
position:relative;top:15px;
left:-5px;
background-color:white;
width:15px;height:15px;
border-radius:50%;
border:3px solid #2B32D7;
align-self:flex-start;
`;
export const Circles2 = styled.div`
{
position:relative;
z-index:999;
left:-5px;
background-color:white;
width:15px;height:15px;
border-radius:50%;
border:3px solid #2B32D7;
align-self:flex-start;
`;
export const Circles3 = styled.div`
{
position:relative;
z-index:999;
left:-5px;
top:-15px;
background-color:white;
width:15px;height:15px;
border-radius:50%;
border:3px solid #2B32D7;
align-self:flex-start;
`;
export const Content = styled.div`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid #2b32d7;
`;
export const Content2 = styled.div`
  position: relative;
  top: -15px;
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid #2b32d7;
`;
export const Content3 = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid #2b32d7;
`;
export const SubHeader = styled.p`
  background-color: #052965;
  text-align: center;
  margin-top: 0%;
  padding: 8px;
`;

export const Duration = styled.p`
  text-align: center;
  margin-top: 5px;
`;
export const Details = styled.p`
  width: 80%;
  margin-top: 40px;
  text-align: justify;
`;
