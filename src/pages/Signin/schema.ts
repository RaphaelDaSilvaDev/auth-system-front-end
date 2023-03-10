import * as z from "zod";

export const SigninSchema = z.object({
  name: z.string().nonempty({ message: "The name field is required!" }),
  email: z
    .string()
    .email({ message: "Enter a valid email!" })
    .nonempty({ message: "The email field is required!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long!" })
    .nonempty({ message: "The password field is required!" }),
});

export type SigninSchemaType = z.infer<typeof SigninSchema>;
