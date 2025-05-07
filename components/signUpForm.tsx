"use client";

import Form from "next/form";

const SignUpForm = () => {
  function handleSubmit(e: FormData) {
    const fullName = e.get("fullName");
    const email = e.get("email");
    const major = e.get("major");
    const password = e.get("password");
    const confirmPassword = e.get("confirmPassword");
    console.log({ fullName, email, major, password, confirmPassword });
  }

  return (
    <Form action={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        className="input-style"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="input-style"
      />
      <input
        type="text"
        name="major"
        placeholder="Major"
        required
        className="input-style"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="input-style"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        className="input-style"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-500 text-white w-full py-2 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </Form>
  );
};

export default SignUpForm;
