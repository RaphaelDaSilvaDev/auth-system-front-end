import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.8rem;
  position: relative;

  height: 73.3rem;

  background-color: #fcfeff;
  border-radius: 25px;

  padding: 6.3rem 6.5rem;

  @media screen and (max-width: 768px) {
    padding: 6.3rem 6rem;
  }

  @media screen and (max-width: 560px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.8rem;
  overflow-y: auto;

  padding-left: 1rem;
  padding-right: 2.4rem;
  padding-bottom: 2.4rem;
`;
