"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFeilds = RegisterSchema.safeParse(values);

  if (!validatedFeilds.success) return { error: "Invalid Feilds" };

  const { email, password, name } = validatedFeilds.data;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already in use" };

  await db.user.create({ data: { email, name, password: hashedPassword } });

  // TODO: Sent varification token

  return { success: "User created" };
};
