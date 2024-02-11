import { z } from "zod";

export const formSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email()
      .max(50, "Email must not exceed 50 characters"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(5, "Password must exceed 5 characters"),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not the same",
    path: ["confirmPassword"],
  });

export type FormSchemaType = z.infer<typeof formSchema>;
