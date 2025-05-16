import { createAuthClient } from "better-auth/react";

export const { signIn, signUp, signOut, getSession } = createAuthClient({
  baseURL: "http://localhost:5173",
});

export async function getSessionUser() {
  const session = await getSession();

  if (session.data && session.data.user) {
    return session.data.user;
  }

  return null;
}
