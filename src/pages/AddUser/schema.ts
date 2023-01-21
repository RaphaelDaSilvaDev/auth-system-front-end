import * as z from "zod";

export const CreateAccountSchema = z.object({
  name: z.string().nonempty({ message: "The name field is required!" }),
  email: z
    .string()
    .email({ message: "Enter a valid email!" })
    .nonempty({ message: "The email field is required!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long!" })
    .nonempty({ message: "The password field is required!" }),
  isAdmin: z.boolean().optional(),
});

export type CreateAccountSchemaType = z.infer<typeof CreateAccountSchema>;
