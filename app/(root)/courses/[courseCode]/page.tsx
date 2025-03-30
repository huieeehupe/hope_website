'use client';
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ courseCode: string }> }) => {
  const [courseCode, setCourseCode] = useState("");
  useEffect(() => {
    const fetchCourse = async () => {
      const { courseCode } = await params;
      setCourseCode(decodeURIComponent(courseCode));
    };
    fetchCourse();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] pt-10">{courseCode}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-5">
        {/* Course cards will be rendered here */}
      </div>
    </div>
  );
};
export default Page;
