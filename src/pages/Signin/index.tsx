import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";
import { SideComponentLayout } from "../../layout/SideComponentLayout";

import { api } from "../../services/axios";
import { AuthToken } from "../../services/authToken";
import { SigninSchema, SigninSchemaType } from "./schema";

import * as S from "./styles";

export function Signin() {
  const navigation = useNavigate();

  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(SigninSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const [cookies, setCookies] = useCookies(["user"]);

  async function handleOnSignin() {
    setLoadingButton(true);
    const name = watch("name");
    const email = watch("email");
    const password = watch("password");

    const body = {
      name,
      email,
      password,
    };

    try {
      const response = await api.post("/user", body);
      if (response.status === 201) {
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
        <S.Content onSubmit={handleSubmit(handleOnSignin)}>
          <h1>Create your free account</h1>

          <S.InputContent hasError={errors.name?.message ? true : false}>
            <label htmlFor="fullname">Full name</label>
            <input id="fullname" placeholder="Enter your full name" {...register("name")} />
          </S.InputContent>

          <S.InputContent hasError={errors.email?.message ? true : false}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter your email" {...register("email")} />
          </S.InputContent>

          <S.InputContent hasError={errors.password?.message ? true : false}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </S.InputContent>

          <Button loading={loadingButton} text="Create Account" />

          <S.CreateAccount>
            <span>
              Already have an account? <Link to="/login">Log in</Link>
            </span>
          </S.CreateAccount>
        </S.Content>
      </S.Container>
    </S.Main>
  );
}
