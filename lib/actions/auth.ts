'use server';
import { signIn, signOut } from "@/auth";

export const login = async (auth_provider: string) => {
  await signIn(auth_provider, {
    redirectTo: "/hope",
  });
};

export const logout = async () => {
    await signOut({
        redirectTo: "/",
    });
};
