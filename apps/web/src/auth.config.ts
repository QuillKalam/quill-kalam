import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LogInSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFeilds = LogInSchema.safeParse(credentials);

        if (validatedFeilds.success) {
          const { email, password } = validatedFeilds.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (isPasswordMatched) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
