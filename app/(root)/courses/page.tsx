import React from "react";
import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import CourseCard from "@/components/courseCard";
import courses from "@/constants/courses";

const Page = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email || "" },
  });
  if (!user) {
    redirect("/sign-up");
  }

  const my_courses = await prisma.course.findMany();
  console.log(my_courses);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] pt-10">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-5">
        {courses.map((course, index) => (
          <div key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
