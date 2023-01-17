import * as z from "zod";

export const SigninSchema = z.object({
  name: z.string().nonempty({ message: "Este campo é obrigatório" }),
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .nonempty({ message: "Este campo é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
    .nonempty({ message: "Este campo é obrigatório" }),
});

export type SigninSchemaType = z.infer<typeof SigninSchema>;
