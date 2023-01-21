import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import * as S from "./styles";

export function HeaderLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
