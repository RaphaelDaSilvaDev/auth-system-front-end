import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.8rem;

  background-color: #fcfeff;
  border-radius: 25px;

  padding: 15.9rem 15.9rem;

  @media screen and (max-width: 768px) {
    padding: 8rem 8rem;
  }

  @media screen and (max-width: 560px) {
    padding: 2rem 2rem;
  }
`;

interface hasError {
  hasError: boolean;
}

export const InputContent = styled.div<hasError>`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-500"]};
  }

  & > input {
    background-color: ${(props) => props.theme["gray-300"]};
    padding: 1.8rem 4rem;
    border-radius: 20px;
    border: none;

    ${(props) =>
      props.hasError &&
      css`
        box-shadow: 0 0 0 2px ${(props) => props.theme["red-300"]};
      `}

    ::placeholder {
      color: ${(props) => props.theme["black-half"]};
    }
  }
`;

export const Error = styled.span`
  color: red;
  align-self: center;
`;
