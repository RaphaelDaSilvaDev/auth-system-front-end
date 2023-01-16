import { Link } from "react-router-dom";

import * as S from "./styles";

export function Login() {
  return (
    <S.Container id="content">
      <S.Content>
        <h1>Login with your Account</h1>
        <S.InputContent>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />
        </S.InputContent>

        <S.InputContent>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </S.InputContent>

        <S.Button>Login</S.Button>

        <S.CreateAccount>
          <span>
            Don't have an account? <Link to="/signin">Signin in</Link>
          </span>
        </S.CreateAccount>
      </S.Content>
    </S.Container>
  );
}
