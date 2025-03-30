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
                <CardContent className="flex flex-row justify-around py-6 w-max gap-10 align-middle">
                  <img
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={250}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-[40px] font-bold text-white ">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{project.about}</p>
                    <a
                      href={project.url_to_docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline mt-4 inline-block"
                    >
                      View Documentation
                    </a>
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
