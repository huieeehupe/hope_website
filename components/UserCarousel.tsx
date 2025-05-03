"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const UserCarousel = ({
  users,
}: {
  users: {
    name: string;
    image: string;
    major: string;
    about: string;
    title: string;
  }[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel
        className="w-full max-w-2xl"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {users.map((user, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={user.image}
                alt={user.name}
                width={200}
                height={200}
                className="rounded-lg mb-4"
              />
              <p className="text-black text-3xl">{user.name}</p>
              <p className="text-black">{user.major} Major</p>
              <p className="text-black">{user.title}</p>
              <p className="text-black">{user.about}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
};

export default UserCarousel;
