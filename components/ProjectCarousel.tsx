"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectCarousel({
  projects,
}: {
  projects: {
    name: string;
    about: string;
    image: string;
    url_to_docs: string;
    team_members: {
      name: string;
      linkedIn: string;
    }[];
    semester: string;
  }[];
}) {
  return (
    <Carousel
      className="w-4/5 mx-auto"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1 bg-transparent w-full">
              <Card className="bg-transparent">
                <CardContent className="flex flex-row justify-around py-6 w-full gap-10 items-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={250}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[32px] font-bold text-white w-full break-words">
                      {project.name} [{project.semester}]
                    </h2>
                    <p className="text-gray-600 mt-2 break-words">{project.about}</p>
                    <a
                      href={project.url_to_docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline mt-4 inline-block"
                    >
                      View Documentation
                    </a>

                    <h3 className="text-lg font-semibold mt-4 text-white">
                      Team Members:
                    </h3>
                    <ul className="list-disc list-inside">
                      {project.team_members.map((member, idx) => (
                        <li key={idx} className="text-gray-600 underline decoration-dotted">
                          <a href={member.linkedIn}>{member.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
}
