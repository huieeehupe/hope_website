"use client";

import Form from "next/form";

const SignInForm = () => {
  function handleSubmit(e: FormData) {
    const email = e.get("email");
    const password = e.get("password");
    console.log(email, password);
  }
  return (
    <Form action={(e) => handleSubmit(e)} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Email Address / Phone number / ID"
        required
        className="input-style"
      />
      <input
        type="text"
        placeholder="Password"
        required
        className="input-style"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md"
        >
          Log In
        </button>
      </div>
    </Form>
  );
};
export default SignInForm;
