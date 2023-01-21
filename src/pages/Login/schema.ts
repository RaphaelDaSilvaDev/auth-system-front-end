import * as z from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Enter a valid email!" })
      .nonempty({ message: "The email field is required!" }),
    password: z.string().nonempty({ message: "The password field is required!" }),
  })
  .required({
    email: true,
    password: true,
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
