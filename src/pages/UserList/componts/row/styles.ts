import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const Content = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const InputContent = styled.div`
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

  @media screen and (max-width: 1150px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 2.4rem;

  @media screen and (max-width: 1150px) {
    margin-top: 2rem;
  }
`;

export const SaveButton = styled.button`
  height: 6.8rem;
  background-color: ${(props) => props.theme["yellow-300"]};
  align-self: flex-end;

  padding: 18px;

  border-radius: 10px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-500"]};

    transition: background-color 125ms;
  }

  transition: opacity 125ms;

  :disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  height: 6.8rem;
  background-color: ${(props) => props.theme["red-300"]};
  align-self: flex-end;

  padding: 18px;

  border-radius: 10px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["red-500"]};

    transition: background-color 125ms;
  }

  transition: opacity 125ms;

  :disabled {
    opacity: 0;
    cursor: default;
  }
`;

export const CheckBoxContent = styled.div`
  width: 100%;

  & > label {
    font-size: 2rem;
    top: -2.7rem;
    color: ${(props) => props.theme["gray-500"]};

    display: block;
    position: relative;
    cursor: pointer;
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
      top: 30px;
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

    & > input:disabled ~ .checkmark {
      background-color: ${(props) => props.theme["yellow-300"]};
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
