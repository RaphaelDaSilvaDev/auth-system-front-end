import * as S from "./styles";

interface WrapperProps {
  children: JSX.Element;
}

export function Wrapper({ children }: WrapperProps) {
  return <S.WrapperContainer>{children}</S.WrapperContainer>;
}
