import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignOut, UserGear, UserPlus } from "phosphor-react";

import { Wrapper } from "../../layout/Wrapper";

import { AuthToken } from "../../services/authToken";
import { AuthUserContext } from "../../services/authUserContext";

import UserSVG from "../../assets/user.svg";
import * as S from "./styles";

export function Header() {
  const navigation = useNavigate();
  const { info, handleSignOut } = useContext(AuthUserContext);

  useEffect(() => {
    if (!info) {
      return navigation("/login");
    }

    AuthToken(info.token);
  }, []);

  console.log(info);

  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.UserInfo onClick={() => navigation("/")}>
            <img src={UserSVG} />
            <span>{info?.user?.name}</span>
          </S.UserInfo>

          <S.ButtonsContainer>
            {info?.user?.isAdmin && (
              <>
                <S.Button onClick={() => navigation("create-user")}>
                  <UserPlus weight="fill" size={32} />
                </S.Button>
                <S.Button onClick={() => navigation("users")}>
                  <UserGear weight="fill" size={32} />
                </S.Button>
              </>
            )}

            <S.Button onClick={handleSignOut}>
              <SignOut weight="fill" size={32} />
            </S.Button>
          </S.ButtonsContainer>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
}
