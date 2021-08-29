import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  Columns,
  RowContainer,
  SubColumns,
  Headers,
  Circles,
  Circles2,
  Circles3,
  Content,
  Content2,
  Content3,
  SubHeader,
  Duration,
  Details,
} from "./TimeLineStyles";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            onClick={() =>
              (window.location =
                "https://drive.google.com/file/d/1GRdGqJahilyoPJAJbr9S8JAIUV0BQhwS/view?usp=sharing")
            }
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Container>
          <RowContainer>
            <Columns>
              <SubColumns>
                <Headers>Experience</Headers>
                <Circles></Circles>
                <Content>
                  <SubHeader>
                    <b>
                      Software Development Intern
                      <br />
                      [TechNineties Pvt. Ltd.]
                    </b>
                  </SubHeader>
                  <Duration>
                    <i>June 2021 - August 2021</i>
                  </Duration>
                  <Details>
                    ‣ Developed React-Native mobile application for hyperlocal
                    marketplace project called 'Nazdik'.
                  </Details>
                  <Details>
                    ‣ Integrated features for Sellers to create online store
                    along with inventory management, customers' order and
                    transactions management and manage client statistics and
                    logistics.
                  </Details>
                  <Details>
                    ‣ Working Stack : ReactNative , Redux , RestAPI(Axios) ,
                    MySQL
                  </Details>
                </Content>
              </SubColumns>
            </Columns>
            <Columns>
              <SubColumns>
                <Headers>Education</Headers>
                <Circles></Circles>
                <Content>
                  <SubHeader>
                    <b>
                      Computer Science and Engineering
                      <br />
                      [National Institute of Technology Meghalaya]
                    </b>
                  </SubHeader>
                  <Duration>
                    <i>2018 - Present</i>
                  </Duration>
                  <Details>‣&nbsp;&nbsp;CGPA: 9.69 (Till 6th Sem)</Details>
                </Content>
                <Circles2></Circles2>
                <Content2>
                  <SubHeader>
                    <b>
                      Intermediate(CBSE)
                      <br />
                      [GDS Academy , Raxaul]
                    </b>
                  </SubHeader>
                  <Duration>
                    <i>2016 - 2018</i>
                  </Duration>
                  <Details>‣&nbsp;&nbsp;Percentage: 92.60%</Details>
                </Content2>
                <Circles3></Circles3>
                <Content3>
                  <SubHeader>
                    <b>
                      10TH BOARD(CBSE)
                      <br />
                      [GDS Academy , Raxaul]
                    </b>
                  </SubHeader>
                  <Duration>
                    <i>2015 - 2016</i>
                  </Duration>
                  <Details>‣&nbsp;&nbsp;CGPA:10.00</Details>
                </Content3>
              </SubColumns>
            </Columns>
          </RowContainer>
        </Container>
      </Container>
    </Section>
  );
};

export default Timeline;
