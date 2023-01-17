import * as z from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Digite um email válido!" })
      .nonempty({ message: "Este campo é obrigatório" }),
    password: z.string().nonempty({ message: "Este campo é obrigatório" }),
  })
  .required({
    email: true,
    password: true,
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
