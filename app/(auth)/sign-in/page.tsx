'use client';
import { login } from "@/lib/actions/auth";
import React from "react";

import { useState } from "react";
import Link from "next/link";
import Form from "next/form";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("User email: ", email);
    console.log("User password: ", password);

  }

  return (
    <div className="center-section bg-[#27262b]">
      <div className="auth-container">
        <div className="flex flex-col pt-10 gap-2">
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
          <Form
            action={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* TODO: Add auth function here*/}
            <input
              type="text"
              placeholder="Email Address / Phone number / ID"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input-style"
            />
            <input
              type="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="input-style"
            />
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md">
                Log In
              </button>
            </div>
          </Form>
        </div>
        <div className="flex items-center pt-10 w-full">
          <hr className="flex-grow border" />
          <p className="px-2">OR</p>
          <hr className="flex-grow border" />
        </div>

        <div className="flex justify-center pt-10 gap-10">
          <button
            onClick={() => login("google")}
            className="bg-white text-black w-full py-2 rounded-md flex items-center justify-center gap-2"
          >
            {" "}
            {/* TODO: Add auth function here*/}
            Login with Google
          </button>
          <button
            onClick={() => login("github")}
            className="bg-white text-black w-full py-2 rounded-md flex items-center justify-center gap-2"
          >
            {" "}
            {/* TODO: Add auth function here*/}
            Login with Github
          </button>

        </div>
      </div>
    </div>
  );
};
export default Page;
