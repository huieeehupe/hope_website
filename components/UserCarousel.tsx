"use client";
import React, { useState } from "react";
import Image from "next/image";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex items-center justify-center gap-50 w-[100vw] h-max relative">
        {/* Carousel Images */}
        <div className="flex flex-row items-center justify-center gap-10 w-full">
          {/* Previous User (slightly out of focus) */}
          <button
            onClick={handlePrev}
            className="flex flex-col items-center justify-center"
          >
            <div
              className={`${
                currentIndex === 0 ? "opacity-50" : "opacity-60"
              } transition-opacity duration-500`}
              style={{ transform: "scale(0.8)" }}
            >
              <Image
                src={
                  users[(currentIndex - 1 + users.length) % users.length].image
                }
                alt={
                  users[(currentIndex - 1 + users.length) % users.length].name
                }
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </button>

          {/* Current User */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              transform: "scale(1)",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <Image
              src={users[currentIndex].image}
              alt={users[currentIndex].name}
              width={200}
              height={200}
              layout="fixed"
              objectFit="contain"
              className="rounded-lg mb-4"
            />
          </div>

          {/* Next User (slightly out of focus) */}
          <button
            onClick={handleNext}
            className="flex flex-col items-center justify-center"
          >
            <div
              className={`${
                currentIndex === users.length - 1 ? "opacity-50" : "opacity-60"
              } transition-opacity duration-500`}
              style={{ transform: "scale(0.8)" }}
            >
              <Image
                src={users[(currentIndex + 1) % users.length].image}
                alt={users[(currentIndex + 1) % users.length].name}
                width={200}
                height={200}
                layout="fixed"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </button>
        </div>
      </div>

      {/* User Info */}
      <p className="text-black text-3xl">{users[currentIndex].name}</p>
      <p className="text-black">{users[currentIndex].major} Major</p>
      <p className="text-black">HOPE {users[currentIndex].title}</p>
      <p className="text-black">{users[currentIndex].about}</p>

      {/* Carousel Indicators */}
      <div>
        <div className="flex justify-center space-x-2 mt-3">
          {users.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCarousel;
