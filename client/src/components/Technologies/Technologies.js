import React, { useState, useRef, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselMobileScrollNode,
  ListTitle,
} from "./TechnologiesStyles";
import {
  ProgrammingSkills,
  Frontend,
  Backend,
  OtherTools,
} from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT1 = ProgrammingSkills.length;
const TOTAL_CAROUSEL_COUNT2 = Frontend.length;
const TOTAL_CAROUSEL_COUNT3 = Backend.length;
const TOTAL_CAROUSEL_COUNT4 = OtherTools.length;

const Technologies = () => {
  const [activeItem1, setActiveItem1] = useState(0);
  const [activeItem2, setActiveItem2] = useState(0);
  const [activeItem3, setActiveItem3] = useState(0);
  const [activeItem4, setActiveItem4] = useState(0);

  const carouselRef1 = useRef();
  const carouselRef2 = useRef();
  const carouselRef3 = useRef();
  const carouselRef4 = useRef();

  const scroll1 = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const scroll2 = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const scroll3 = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const scroll4 = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick1 = (e, i) => {
    e.preventDefault();
    if (carouselRef1.current) {
      const scrollLeft = Math.floor(
        carouselRef1.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT1)
      );
      scroll1(carouselRef1.current, scrollLeft);
    }
  };

  const handleClick2 = (e, i) => {
    e.preventDefault();
    if (carouselRef2.current) {
      const scrollLeft = Math.floor(
        carouselRef2.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT2)
      );
      scroll2(carouselRef2.current, scrollLeft);
    }
  };

  const handleClick3 = (e, i) => {
    e.preventDefault();
    if (carouselRef3.current) {
      const scrollLeft = Math.floor(
        carouselRef3.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT3)
      );
      scroll3(carouselRef3.current, scrollLeft);
    }
  };

  const handleClick4 = (e, i) => {
    e.preventDefault();
    if (carouselRef4.current) {
      const scrollLeft = Math.floor(
        carouselRef4.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT4)
      );
      scroll4(carouselRef4.current, scrollLeft);
    }
  };

  const handleScroll1 = () => {
    if (carouselRef1.current) {
      const index = Math.round(
        (carouselRef1.current.scrollLeft /
          (carouselRef1.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT1
      );
      setActiveItem1(index);
    }
  };

  const handleScroll2 = () => {
    if (carouselRef2.current) {
      const index = Math.round(
        (carouselRef2.current.scrollLeft /
          (carouselRef2.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT2
      );
      setActiveItem2(index);
    }
  };

  const handleScroll3 = () => {
    if (carouselRef3.current) {
      const index = Math.round(
        (carouselRef3.current.scrollLeft /
          (carouselRef3.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT3
      );
      setActiveItem3(index);
    }
  };

  const handleScroll4 = () => {
    if (carouselRef4.current) {
      const index = Math.round(
        (carouselRef4.current.scrollLeft /
          (carouselRef4.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT4
      );
      setActiveItem4(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll1(carouselRef1.current, 0);
      scroll2(carouselRef2.current, 0);
      scroll3(carouselRef3.current, 0);
      scroll4(carouselRef4.current, 0);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle main>Technologies</SectionTitle>
      <ListTitle>Programming</ListTitle>
      <CarouselContainer ref={carouselRef1} onScroll={handleScroll1}>
        <>
          {ProgrammingSkills.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT1 - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem1}
                onClick={(e) => handleClick1(e, index)}
              >
                {item.img}
                <CarouselItemText center>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {ProgrammingSkills.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem1}
            onClick={(e) => handleClick1(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem1} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <ListTitle>Front-End</ListTitle>
      <CarouselContainer ref={carouselRef2} onScroll={handleScroll2}>
        <>
          {Frontend.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT2 - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem2}
                onClick={(e) => handleClick2(e, index)}
              >
                {item.img}
                <CarouselItemText center>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {Frontend.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem2}
            onClick={(e) => handleClick2(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem2} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <ListTitle>Back-End</ListTitle>
      <CarouselContainer ref={carouselRef3} onScroll={handleScroll3}>
        <>
          {Backend.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT3 - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem3}
                onClick={(e) => handleClick3(e, index)}
              >
                {item.img}
                <CarouselItemText center>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {Backend.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem3}
            onClick={(e) => handleClick3(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem3} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <ListTitle>Other Tools</ListTitle>
      <CarouselContainer ref={carouselRef4} onScroll={handleScroll4}>
        <>
          {OtherTools.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT4 - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem4}
                onClick={(e) => handleClick4(e, index)}
              >
                {item.img}
                <CarouselItemText center>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {OtherTools.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem4}
            onClick={(e) => handleClick4(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem4} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Technologies;
