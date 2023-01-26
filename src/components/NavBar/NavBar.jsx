import React, { useState, useEffect } from "react";
import linkedin from "../../images/icons8-linkedin-circled.svg";
import github from "../../images/icons8-github.svg";
import instagram from "../../images/icons8-instagram.svg";

import {
  Img,
  ImgWrap,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./Style";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const hanldeRedirect = (url) => {
    window.open(url);
  };

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo                 
                to="banner"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}>&#123;Iago Dev&#125;</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
              >
                Sobre mim
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="habilities"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
              >
                Habilidades
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
              >
                Projetos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
              >
                Contato
              </NavLinks>
            </NavItem>
          </NavMenu>
          <ImgWrap>
            <Img
              src={linkedin}
              onClick={() =>
                hanldeRedirect("https://www.linkedin.com/in/iago-gondim/")
              }
            />
            <Img
              src={github}
              onClick={() => hanldeRedirect("https://github.com/IagoGondim")}
            />
            <Img
              src={instagram}
              onClick={() =>
                hanldeRedirect("https://www.instagram.com/iagogondi/")
              }
            />
          </ImgWrap>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
