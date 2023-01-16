import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
