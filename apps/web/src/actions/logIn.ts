"use server";
import * as z from "zod";
import { LogInSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LogInSchema>) => {
  const validatedFeilds = LogInSchema.safeParse(values);

  if (!validatedFeilds.success) return { error: "Invalid Fields" };

  try {
  } catch (error) {
    throw error;
  }
  return { success: "Email Sent" };
};
