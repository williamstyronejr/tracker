import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const { signIn, signUp, signOut } = createAuthClient({
  baseURL: process.env.BETTER_AUTH_BASE_URL as string,
});
