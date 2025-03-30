import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/components/signOutButton";

const Page = async () => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session?.user) {
    // If not authenticated, redirect to the sign-in page
    redirect("/sign-in");
  }
  return (
    <div>
      <h1>Courses</h1>
      <p>Welcome to your courses page {session.user.name}!</p>
    </div>
  );
};

export default Page;
