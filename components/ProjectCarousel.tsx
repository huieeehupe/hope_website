"use client";
// import React, { useState, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// const ProjectCarousel = ({
//   projects,
// }: {
//   projects: {
//     name: string;
//     about: string;
//     image: string;
//     url_to_docs: string;
//   }[];
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const startX = useRef(0);
//   const isDragging = useRef(false);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//     isDragging.current = true;
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging.current) return;
//     const moveX = e.touches[0].clientX - startX.current;

//     if (moveX > 50) {
//       // Swipe Right (Previous)
//       handlePrev();
//       isDragging.current = false;
//     } else if (moveX < -50) {
//       // Swipe Left (Next)
//       handleNext();
//       isDragging.current = false;
//     }
//   };

//   const handleTouchEnd = () => {
//     isDragging.current = false;
//   };

//   return (
//     <div
//       className="mx-auto overflow-hidden flex flex-row items-center flex-beween gap-30"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <button
//         className="left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
//         onClick={handlePrev}
//       >
//         &larr;
//       </button>
//       <div className="flex transition-transform duration-500">
//         <div
//           key={currentIndex}
//           className="text-center transition-opacity duration-500 flex flex-row items-center justify-around gap-20"
//         >
//           <img
//             src={projects[currentIndex].image}
//             alt={projects[currentIndex].name}
//             width={250}
//             height={250}
//             className="max-w-full h-auto mx-auto object-cove"
//           />
//           <div className="">
//             <h2 className="text-xl font-bold mt-4">
//               {projects[currentIndex].name}
//             </h2>
//             <p className="text-gray-600 mt-2">{projects[currentIndex].about}</p>
//             <a
//               href={projects[currentIndex].url_to_docs}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline mt-4 inline-block"
//             >
//               View Documentation
//             </a>
//           </div>
//         </div>
//       </div>

//       <button
//         className="left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
//         onClick={handleNext}
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default ProjectCarousel;

export default function CarouselProj ({
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
    <Carousel className="w-4/5 mx-auto">
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
                    <p className="text-gray-600 mt-2">
                      {project.about}
                    </p>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
