import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  // Authenticate the user
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect("/sign-in");
  }
  // Ensure we have a valid user ID and email
  const { id: userId, email } = session.user;
  if (!userId || !email) {
    return NextResponse.redirect("/sign-in");
  }

  // Parse request body
  const { name, major } = await request.json();

  // Ensure we don't double-create
  const existing = await prisma.userProfile.findUnique({
    where: { userId },
  });
  if (existing) {
    return NextResponse.json(existing);
  }

  // Create a new profile
  const profile = await prisma.userProfile.create({
    data: {
      userId,
      email,
      name,
      major,
    },
  });

  return NextResponse.json(profile);
}