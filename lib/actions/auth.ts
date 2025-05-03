'use server';
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const login = async (auth_provider: string) => {
  await signIn(auth_provider, {
    redirectTo: "/dashboard",
  });
};

export const logout = async () => {
    await signOut({
        redirectTo: "/",
    });
    redirect("/");
};
