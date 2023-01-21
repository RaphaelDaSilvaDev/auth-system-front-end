import { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FloppyDiskBack, Trash } from "phosphor-react";
import { ToastStyle } from "../../../../components/Toast";

import { zodResolver } from "@hookform/resolvers/zod";

import { AuthUserContext } from "../../../../services/authUserContext";

import { api } from "../../../../services/axios";
import { UsersSchema, UsersSchemaType } from "./schema";

import * as S from "./styles";
import { PayloadProps, RowProps } from "./interfaces";

export function Row({ userList, reload, index }: RowProps) {
  const { info } = useContext(AuthUserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UsersSchemaType>({
    resolver: zodResolver(UsersSchema),
    mode: "onSubmit",
    defaultValues: {
      isAdmin: userList.isAdmin,
    },
  });

  async function handleUpdateProfile() {
    const name = watch("name");
    const email = watch("email");
    const isAdmin = watch("isAdmin");

    const payload: PayloadProps = { isAdmin };

    if (name) payload.name = name;
    if (email) payload.email = email;

    if (JSON.stringify(payload) !== "{}") {
      try {
        await api.post(`/user/admin/update/${userList.id}`, payload);
        ToastStyle({
          message: "Successfully updated user",
          styleToast: "success",
        });
        reload();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      }
    } else {
      ToastStyle({
        message: "You need set a name or a password for update",
        styleToast: "warning",
      });
    }
  }

  async function handleDeleteUser() {
    try {
      await api.delete(`/user/admin/delete/${userList.id}`);
      ToastStyle({ message: "Successfully deleted user", styleToast: "success" });
      reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Content onSubmit={handleSubmit(handleUpdateProfile)}>
        <S.InputContent>
          <label htmlFor={userList.name + index.toString()}>Name</label>
          <input
            {...register("name")}
            id={userList.name + index.toString()}
            placeholder={userList.name}
          />
          {errors.name?.message && <S.Error>{errors.name.message}</S.Error>}
        </S.InputContent>

        <S.InputContent>
          <label htmlFor={userList.email + index.toString()}>Email</label>
          <input
            {...register("email")}
            id={userList.email + index.toString()}
            placeholder={userList.email}
          />
          {errors.email?.message && <S.Error>{errors.email.message}</S.Error>}
        </S.InputContent>

        <S.Buttons>
          <S.CheckBoxContent>
            <label htmlFor={userList.id}>
              Admin
              <input
                type="checkbox"
                id={userList.id}
                {...register("isAdmin")}
                disabled={userList.email === info.user?.email}
              />
              <span className="checkmark"></span>
            </label>
          </S.CheckBoxContent>

          <S.SaveButton>
            <FloppyDiskBack size={32} color="#fff" />
          </S.SaveButton>

          <S.DeleteButton onClick={handleDeleteUser} disabled={userList.email === info.user?.email}>
            <Trash size={32} color="#fff" />
          </S.DeleteButton>
        </S.Buttons>
      </S.Content>
    </S.Container>
  );
}
