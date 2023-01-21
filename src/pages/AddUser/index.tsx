import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Wrapper } from "../../layout/Wrapper";
import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";

import { api } from "../../services/axios";
import { CreateAccountSchemaType, CreateAccountSchema } from "./schema";

import * as S from "./styles";

export function AddUser() {
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateAccountSchemaType>({
    resolver: zodResolver(CreateAccountSchema),
    mode: "onSubmit",
  });

  async function handleOnCreateUser() {
    setLoadingButton(true);
    const name = watch("name");
    const email = watch("email");
    const password = watch("password");
    const isAdmin = watch("isAdmin");

    const payload = {
      name,
      email,
      password,
      isAdmin,
    };

    try {
      const { status, data } = await api.post("/user/admin", payload);
      if (status === 400) {
        ToastStyle({ message: data.message, styleToast: "error" });
      }
      ToastStyle({ message: "Successfully created User!", styleToast: "success" });
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
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
    <S.Container>
      <Wrapper>
        <S.Content onSubmit={handleSubmit(handleOnCreateUser)}>
          <h1>Create a new account</h1>

          <S.InputContent hasError={errors.name?.message ? true : false}>
            <label htmlFor="fullname">Full name</label>
            <input
              id="fullname"
              placeholder="Enter your full name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
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

          <S.CheckBoxContent>
            <label htmlFor="isAdmin">
              User Admin
              <input type="checkbox" id="isAdmin" {...register("isAdmin")} />
              <span className="checkmark"></span>
            </label>
          </S.CheckBoxContent>

          <Button text="Create Account" loading={loadingButton} />
        </S.Content>
      </Wrapper>
    </S.Container>
  );
}
