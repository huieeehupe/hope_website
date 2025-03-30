'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const CourseCard = ({
  course,
}: {
  course: {
    title: string;
    code: string;
    image: string;
    description: string;
    semester: string;
  };
}) => {
    const router = useRouter();
  return (
    <Card className="hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={() => router.push("/courses/" + course.code)}>
      <CardHeader className="flex flex-col items-center">
        <CardTitle>
          <img
            src={course.image}
            alt={`Image of ${course.title}`}
            width={250}
          />
        </CardTitle>
        <CardDescription className="text-[30px]">
          <h1>{course.code}</h1>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl">{course.title}</h2>
        <p>{course.description}</p>
      </CardContent>
      <CardFooter>
        <p className="mt-2 text-sm text-gray-500">
          Semester: {course.semester}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
