import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthToken } from "../../services/authToken";
import { api } from "../../services/axios";

import { SideComponentLayout } from "../../layout/SideComponentLayout";

import * as S from "./styles";
import { loginSchema, loginSchemaType } from "./schema";

export function Login() {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [cookies, setCookies] = useCookies(["user"]);

  async function handleLogin() {
    const email = watch("email");
    const password = watch("password");
    const body = {
      email,
      password,
    };

    try {
      const response = await api.post("/user/session", body);
      if (response.status === 200) {
        const { data } = response;
        setCookies("user", data, { path: "/" });
        AuthToken(data.token);
        navigation("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const disabledButton = !isDirty || !isValid;

  return (
    <S.Main>
      <SideComponentLayout />
      <S.Container id="content">
        <S.Content onSubmit={handleSubmit(handleLogin)}>
          <h1>Login with your Account</h1>
          <S.InputContent>
            <label htmlFor="email">Email</label>
            <input {...register("email")} placeholder="Enter your email" />
            {errors.email?.message && <S.Error>{errors.email.message}</S.Error>}
          </S.InputContent>

          <S.InputContent>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" placeholder="Enter your password" />
          </S.InputContent>

          <S.Button disabled={disabledButton}>Login</S.Button>

          <S.CreateAccount>
            <span>
              Don't have an account? <Link to="/signin">Signin in</Link>
            </span>
          </S.CreateAccount>
        </S.Content>
      </S.Container>
    </S.Main>
  );
}
