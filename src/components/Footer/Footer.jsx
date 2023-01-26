import React from "react";

import {
  Container,
  FormInfo,
  FormWrapper,
  Input,
  TextArea,
  FooterWrapper,
  AddressWrapper,
  Icons,
  Span,
  InfoMe,
  Description,
  Button,
  SubTitle,
  Background,
  Glass,
} from "./Style";

import address from "../../images/location64.png";
import phone from "../../images/phone64.png";
import email from "../../images/mail64.png";
import wave from "../../images/wave.svg";

const Footer = () => {
  return (
    <>
      <Container id="contact">
        <Background src={wave} />
        <FooterWrapper>
          <Glass>
            <InfoMe>
              <SubTitle>
                Iago Gondim <br />
                Ferreira
              </SubTitle>
              <Description>
                Estou aberto a todos, envie-me um email ou podemos nos falar pelo whatsapp.
                <br/>
                <br/>
                Acredito no trabalho árduo, pesquisa e método como ingredientes para entregar os melhores resultados possiveis
              </Description>
            </InfoMe>
            <AddressWrapper>
              <Span>
                <Icons src={address}></Icons>
                Brasil
                <br />
                Juazeiro do Norte - Ce
              </Span>
              <Span>
                <Icons src={phone}></Icons>
                (88)-999801863
              </Span>
              <Span>
                <Icons src={email}></Icons>
                iago-gondim@hotmail.com
              </Span>
            </AddressWrapper>
            <FormWrapper>
              <FormInfo
                action="https://formsubmit.co/iago-gondim@hotmail.com"
                method="POST"
              >
                <Input placeholder="Nome" type="text" name="name" required />
                <Input
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  required
                />
                <TextArea placeholder="Mensagem" name="message" />
                <Input
                  type="hidden"
                  name="_next"
                  value="http://localhost:5173/"
                />
                <Button className="bn20" type="submit">
                  Enviar
                </Button>
              </FormInfo>
            </FormWrapper>
          </Glass>
        </FooterWrapper>
      </Container>
    </>
  );
};

export default Footer;
