import React from "react";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import updates from "@/constants/updates";
import UpdatesCard from "@/components/updateCard";

const DashboardPage = async () => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session?.user) {
    // If not authenticated, redirect to the sign-in page
    redirect("/sign-in");
  }
  const user = await prisma.user.findUnique({
      where: { email: session.user.email || "" },
    });
    if (!user) {
      redirect("/sign-up");
    }
  const userProfile = await prisma.userProfile.findUnique({
    where: { userId: user.id },
  });
  if (!userProfile) {
    redirect("/create-profile");
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-[40px] pt-10">Class/Campus Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-5">
        {updates.map((update, index) => (
          <div key={index}>
            <UpdatesCard update={update} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
