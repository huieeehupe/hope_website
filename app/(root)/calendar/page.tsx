import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Page = async () => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session?.user) {
    // If not authenticated, redirect to the sign-in page
    redirect("/sign-in");
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] pt-10">Our Calendar</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=40f4ce2ea11ab07fc8d6bd68706124cecc135aedeb5148016a273fdf942d9e71%40group.calendar.google.com&ctz=America%2FNew_York"
        className="border: 0 w-4/5 h-[90vh]"
      ></iframe>
    </div>
  );
};

export default Page;
