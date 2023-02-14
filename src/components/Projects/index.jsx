import React, { useState, useEffect, useRef } from "react";
import { projectObj, sliderSettings } from "./Data";
import { ReactComponent as ArrowLeft } from "../../images/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowright.svg";
import {
  Button,
  ButtonContainer,
  CarouselImage,
  Container,
  ContainerWrapper,
  Content,
  DescriptionP,
  Heading,
  ImageWrapper,
  NameS,
  ReviewSlider,
  Row,
} from "./Style";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const myRef = useRef(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setMyElementIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootmargin: "0px",
    threshold: 0.4,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (myRef.current) observer.observe(myRef.current);

    return () => {
      if (myRef.current) observer.unobserve(myRef.current);
    };
  }, [myRef, options]);

  const hanldeRedirect = (url) => {
    window.open(url);
  };
  return (
    <Container ref={myRef}>
      <ContainerWrapper
        className={`${"habilitiesSection "}${
          myElementIsVisible
            ? "animateHabilitiesIsVisible"
            : "animateHabilitiesNotIsVisible"
        }`}
      >
        <Row>
          <Heading>Projetos</Heading>
          <ButtonContainer>
            <ArrowLeft className="left" onClick={sliderRef?.slickPrev} />
            <ArrowRight className="right" onClick={sliderRef?.slickNext} />
          </ButtonContainer>
        </Row>
        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {projectObj.map((projectObj, index) => (
            <ImageWrapper key={index}>
              <CarouselImage src={projectObj.img} className="img" />
              <Content className="content">
                <NameS className="span-project">{projectObj.nameS}</NameS>
                <DescriptionP>{projectObj.description}</DescriptionP>
              </Content>
              <Button
                className="bn20"
                onClick={() => hanldeRedirect(projectObj.link)}
              >
                GitHub
              </Button>
            </ImageWrapper>
          ))}
        </ReviewSlider>
      </ContainerWrapper>
    </Container>
  );
};

export default Carousel;
