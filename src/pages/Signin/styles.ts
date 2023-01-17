import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 25px 0 0 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    border-radius: 0;
    padding-block: 12rem;
  }
`;

export const Content = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  padding-inline: 12rem;

  & > h1 {
    font-size: 2.6rem;
    align-self: center;
  }

  @media screen and (max-width: 1140px) {
    padding-inline: 8rem;
  }

  @media screen and (max-width: 954px) {
    padding-inline: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-inline: 8rem;
  }

  @media screen and (max-width: 560px) {
    padding-inline: 2rem;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-500"]};
  }

  & > input {
    background-color: ${(props) => props.theme["gray-300"]};
    padding: 18px 40px;
    border-radius: 20px;
    border: none;

    ::placeholder {
      color: ${(props) => props.theme["black-half"]};
    }
  }
`;

export const Button = styled.button`
  align-self: center;
  width: 100%;
  max-width: 34rem;
  height: 6rem;
  background-color: ${(props) => props.theme["yellow-100"]};
  font-size: 2.6rem;

  border-radius: 20px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-300"]};

    transition: background-color 125ms;
  }

  transition: opacity 125ms;

  :disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const CreateAccount = styled.div`
  width: 100%;

  & > span {
    color: ${(props) => props.theme["gray-500"]};

    & > a {
      color: ${(props) => props.theme["yellow-100"]};
      text-decoration: none;
    }
  }
`;

export const Error = styled.span`
  color: red;
  align-self: center;
`;
