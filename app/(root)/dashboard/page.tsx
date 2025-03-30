import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/components/signOutButton";

const DashboardPage = async () => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session?.user) {
    // If not authenticated, redirect to the sign-in page
    redirect("/sign-in");
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-black">Dashboard</h1>
      <p className="text-black">Welcome to your dashboard {session.user.name}!</p>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
