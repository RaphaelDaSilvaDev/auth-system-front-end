import { Link } from "react-router-dom";

import * as S from "./styles";

export function Signin() {
  return (
    <S.Container id="content">
      <S.Content>
        <h1>Create your free account</h1>

        <S.InputContent>
          <label htmlFor="fullname">Full name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" />
        </S.InputContent>

        <S.InputContent>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </S.InputContent>

        <S.InputContent>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your email" />
        </S.InputContent>

        <S.Button>Create Account</S.Button>

        <S.CreateAccount>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </S.CreateAccount>
      </S.Content>
    </S.Container>
  );
}
