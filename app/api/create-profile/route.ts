import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  // Parse request body
  const { userId, email, name, major } = await request.json();

  // Ensure we don't double-create/
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