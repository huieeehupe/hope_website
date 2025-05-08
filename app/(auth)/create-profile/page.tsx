import CreateProfileForm from "@/components/createProfileForm";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { auth } from "@/auth";


export default async function CreateProfilePage() {
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

  return (
    <div className="center-section bg-[#27262b]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-black">Create Your Profile</h1>
        <CreateProfileForm userId={user.id} email={user.email || ""}/>
      </div>
    </div>
  );
}
