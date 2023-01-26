import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background: #4e586e;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 700px;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 1;

    @media screen and (max-width: 768px) {
  }
      @media screen and (max-width: 450px) {
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  min-height: 70vh;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;


`;

export const Glass = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: .5rem;
  border-radius: 20px;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 1;
  box-shadow: 0px 1px 10px 5px rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr
  }
      @media screen and (max-width: 450px) {
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

`;

export const FormInfo = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: .5rem;
  grid-column: 1 / 3;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;
export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: #4e586a;
  z-index: 1;
  border: 1px solid black;
  padding: 1.5rem;
  color: #f7f8fa;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  outline: none;
  transition: 0.5s;
  font-family: 'Roboto Mono', monospace;

  &:focus {
    border-color: #252b38;
  }
  &::placeholder {
    color: white;
  }

      @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 1.25rem;
  }
      @media screen and (max-width: 450px) {
    font-size: 0.875rem;
    padding: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: #4e586a;
  border: 0.5px solid black;
  padding: 1.5rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  font-family: 'Roboto Mono', monospace;


  &:focus {
    border-color: #252b3e;
  }
  &::placeholder {
    color: white;
  }

  @media (max-width: 450px) {
    padding: 1rem;
    font-size: 0.875rem;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  height: 50vh;


  @media (max-width: 768px) {
display: none;
  }
`;
export const Icons = styled.img`
  width: 64px;
  height: 64px;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #f7f8fa;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;

`;

export const InfoMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: .5rem;
`;
export const Description = styled.p`
  color: #f7f8fa;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
`;

export const Button = styled.button`
  padding: 0.875rem 2rem;
  color: #f7f8fa;
  font-weight: 300;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 20px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  font-family: 'Roboto Mono', monospace;


  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &.bn20 {
    background-image: linear-gradient(
      to right,
      #3788b6,
      #c364fa,
      #3788b6,
      #c364fa
    );
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  }

`;
export const SubTitle = styled.h2`
  color: #f7f8fa;
  font-size: 2rem;
  background-image: linear-gradient(120deg, #3788b6, #c364fa);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

`;