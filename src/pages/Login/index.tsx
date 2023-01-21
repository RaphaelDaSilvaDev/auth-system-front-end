import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";
import { SideComponentLayout } from "../../layout/SideComponentLayout";

import { AuthToken } from "../../services/authToken";
import { api } from "../../services/axios";
import { loginSchema, loginSchemaType } from "./schema";

import * as S from "./styles";

export function Login() {
  const navigation = useNavigate();

  const [loadingButton, setLoadingButton] = useState<boolean>(false);

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
    setLoadingButton(true);
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
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadingButton(false);
    }
  }

  useEffect(() => {
    const values = Object.values(errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [errors]);

  return (
    <S.Main>
      <SideComponentLayout />
      <S.Container id="content">
        <S.Content onSubmit={handleSubmit(handleLogin)}>
          <h1>Login with your Account</h1>
          <S.InputContent hasError={errors.email?.message ? true : false}>
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" placeholder="Enter your email" />
          </S.InputContent>

          <S.InputContent hasError={errors.password?.message ? true : false}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </S.InputContent>

          <Button text="Login" loading={loadingButton} />

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
