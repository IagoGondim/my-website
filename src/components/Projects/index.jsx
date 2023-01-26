import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  ContainerWrapper,
  Card,
  Img,
  NameS,
  Content,
  Title,
  DescriptionP,
  Arrow,
  ArrowS,
  CardWrapper,
  TopLine,
  Button
} from "./Style";

import { projectObj } from "./Data";

const ProjectsSection = () => {
  const myRef = useRef(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setMyElementIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootmargin: "0px",
    threshold: 0.3,
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
    <>
      <Container id="projects" ref={myRef}>
        <ContainerWrapper
          className={`${"habilitiesSection "}${
            myElementIsVisible
              ? "animateHabilitiesIsVisible"
              : "animateHabilitiesNotIsVisible"
          }`}
        >
          <TopLine>Projetos</TopLine>
          <CardWrapper>
            {projectObj.map((projectObj) => {
              return (
                <Card >
                  <Img
                    className="img"
                    src={projectObj.img}
                    alt={projectObj.alt}
                  ></Img>
                  <NameS className="span-project">{projectObj.nameS}</NameS>
                  <Content className="content" >
                    <Title>{projectObj.title}</Title>
                    <DescriptionP>{projectObj.description}</DescriptionP>
                    <Button className="bn20" onClick={() =>
                hanldeRedirect(projectObj.link)
              }>GitHub</Button>
                  </Content>
                  <Arrow className="arrow">
                    <ArrowS>&#8673;</ArrowS>
                  </Arrow>
                </Card>
              );
            })}
          </CardWrapper>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default ProjectsSection;


