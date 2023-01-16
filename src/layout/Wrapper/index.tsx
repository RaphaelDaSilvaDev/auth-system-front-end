import React from "react";
import * as S from "./styles";

export function Wrapper(children: React.ReactElement) {
  return <S.WrapperContainer>{children}</S.WrapperContainer>;
}
