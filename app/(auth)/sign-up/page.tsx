import React from "react";
import SignUpButton from "@/components/signUpButton";

// import Link from "next/link";
// import SignUpForm from "@/components/signUpForm";

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
          <h1 className="text-4xl font-semibold">Sign Up,</h1>
          <div className="flex gap-2 justify-between">
            <p>
              Already have an account? &nbsp;
              <span>
                <Link
                  href="/sign-up"
                  className="underline decoration-dotted decoration-green-400 text-green-400 hover:decoration-green-600 hover:text-green-600"
                >
                  sign in
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="pt-8">
          <SignUpForm />
        </div> */}

        <div className="flex justify-center pt-10 gap-10">
          <SignUpButton auth_provider="google" />
          <SignUpButton auth_provider="github" />
        </div>
      </div>
    </div>
  );
};
export default Page;
