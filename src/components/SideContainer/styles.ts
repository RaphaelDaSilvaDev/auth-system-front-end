import styled from "styled-components";

export const Base = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 80vh;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 60vh;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 2rem;
  display: none;

  & > a > svg {
    color: ${(props) => props.theme["gray-500"]};
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
