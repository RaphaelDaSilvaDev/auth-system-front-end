import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";

import { Row } from "./componts/row";
import { Wrapper } from "../../layout/Wrapper";

import { api } from "../../services/axios";

import * as S from "./styles";
import { userListProps } from "./interfaces";

export function UserList() {
  const firstRender = useRef(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [userList, setUserList] = useState<userListProps[]>([]);

  async function getUsers() {
    setLoading(true);
    try {
      const { data } = await api.get("user");
      setUserList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!firstRender.current) {
      getUsers();
    } else {
      firstRender.current = false;
    }
  }, []);

  function reload() {
    getUsers();
  }

  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <h1>Users Account</h1>
          {loading ? (
            <S.LoadingContainer>
              <ReactLoading type="spin" color="#F9ED32" />
            </S.LoadingContainer>
          ) : (
            <S.ListContainer>
              {userList.map((user, index) => (
                <Row key={user.email} userList={user} reload={reload} index={index} />
              ))}
            </S.ListContainer>
          )}
        </S.Content>
      </Wrapper>
    </S.Container>
  );
}
