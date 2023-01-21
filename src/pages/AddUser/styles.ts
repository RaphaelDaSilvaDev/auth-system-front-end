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

  overflow-y: auto;

  padding: 4.5rem 15rem;

  @media screen and (max-width: 768px) {
    padding: 4.5rem 4rem;
  }

  @media screen and (max-width: 560px) {
    padding: 4.5rem 2rem;
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
    padding: 18px 40px;
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

export const CheckBoxContent = styled.div`
  width: 100%;
  margin-top: 14px;

  & > label {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-500"]};
    user-select: none;
    cursor: pointer;

    display: block;
    position: relative;
    padding-left: 86px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: -16px;
      left: 0;
      height: 65px;
      width: 65px;
      border-radius: 20px;
      background-color: #eee;
    }

    :hover input ~ .checkmark {
      background-color: #ccc;
    }

    & > input:checked ~ .checkmark {
      background-color: ${(props) => props.theme["yellow-100"]};
    }

    :hover input:checked ~ .checkmark {
      background-color: ${(props) => props.theme["yellow-300"]};
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    & > input:checked ~ .checkmark:after {
      display: block;
    }

    .checkmark:after {
      left: 22px;
      top: 8px;
      width: 18px;
      height: 34px;
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const Error = styled.span`
  color: red;
  align-self: center;
`;
