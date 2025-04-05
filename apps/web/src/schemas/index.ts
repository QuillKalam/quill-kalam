import * as z from "zod";

// Do not add any validation on password
// REASON : password format can change, we do not want to block old users after that change
export const LogInSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password should be minimum lenght of eight" }),
  name: z.string().min(1, { message: "Name is required" }),
});
