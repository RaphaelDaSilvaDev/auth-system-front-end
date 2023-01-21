import styled from "styled-components";

export const Button = styled.button`
  align-self: center;
  width: 100%;
  max-width: 34rem;
  height: 6rem;
  background-color: ${(props) => props.theme["yellow-300"]};
  font-size: 2.6rem;

  border-radius: 20px;
  border: none;
  outline: none;

  & > div {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    & > svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-500"]};

    transition: background-color 125ms;
  }

  :disabled {
    background-color: ${(props) => props.theme["yellow-100"]};
    cursor: not-allowed;
  }
`;
