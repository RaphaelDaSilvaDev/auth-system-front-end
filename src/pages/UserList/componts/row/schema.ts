import * as z from "zod";

export const UsersSchema = z.object({
  name: z.string().optional(),
  email: z.union([z.string(), z.string().email({ message: "Insira um email valido" })]).optional(),
  isAdmin: z.boolean(),
});

export type UsersSchemaType = z.infer<typeof UsersSchema>;
