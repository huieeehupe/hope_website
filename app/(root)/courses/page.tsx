import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import CourseCard from "@/components/courseCard";
import courses from "@/constants/courses";

const Page = async () => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session?.user) {
    // If not authenticated, redirect to the sign-in page
    redirect("/sign-in");
  }
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
