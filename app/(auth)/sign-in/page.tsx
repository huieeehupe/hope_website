import React from "react";
import SignInButton from "@/components/signInButton";

import Link from "next/link";
import SignInForm from "@/components/signInForm";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="center-section bg-[#27262b]">
      <div className="auth-container">
        {/* <div className="flex flex-col pt-10 gap-2">
          <h1 className="text-4xl font-semibold">Log In,</h1>
          <div className="flex gap-2 justify-between">
            <p>
              New here, no account? &nbsp;
              <span>
                <Link
                  href="/sign-up"
                  className="text-primary underline decoration-dotted"
                >
                  sign up
                </Link>
              </span>
            </p>
            <Link
              href="/sign-in"
              className="text-primary underline decoration-dotted"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="pt-8">
          <SignInForm />
        </div>
        <div className="flex items-center pt-10 w-full">
          <hr className="flex-grow border" />
          <p className="px-2">OR</p>
          <hr className="flex-grow border" />
        </div> */}

        <div className="flex justify-center pt-10 gap-10">
          <SignInButton auth_provider="google" />
          <SignInButton auth_provider="github" />
        </div>
      </div>
    </div>
  );
};
export default Page;
