import { zodResolver } from "@hookform/resolvers/zod";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SideComponentLayout } from "../../layout/SideComponentLayout";
import { AuthToken } from "../../services/authToken";
import { api } from "../../services/axios";
import { SigninSchema, SigninSchemaType } from "./schema";

import * as S from "./styles";

export function Signin() {
  const navigation = useNavigate();

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
    } catch (error) {}
  }

  const disabledButton = !isDirty || !isValid;

  return (
    <S.Main>
      <SideComponentLayout />
      <S.Container id="content">
        <S.Content onSubmit={handleSubmit(handleOnSignin)}>
          <h1>Create your free account</h1>

          <S.InputContent>
            <label htmlFor="fullname">Full name</label>
            <input id="fullname" placeholder="Enter your full name" {...register("name")} />
            {errors.name?.message && <S.Error>{errors.name.message}</S.Error>}
          </S.InputContent>

          <S.InputContent>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter your email" {...register("email")} />
            {errors.email?.message && <S.Error>{errors.email.message}</S.Error>}
          </S.InputContent>

          <S.InputContent>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your email"
              {...register("password")}
            />
            {errors.password?.message && <S.Error>{errors.password.message}</S.Error>}
          </S.InputContent>

          <S.Button disabled={disabledButton}>Create Account</S.Button>

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
