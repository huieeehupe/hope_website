import UserCarousel from "@/components/UserCarousel";
import mentors from "@/constants/mentors";

export default function Home() {

  return (
    <>
      <section className="flex items-center justify-center align-center bg-[url('/IEEE_students.jpg')] bg-cover bg-center h-screen" id="home">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative flex flex-col gap-5 px-20 items-center justify-center w-4/5">
          <h1 className="text-[#0076bbe6] text-[40px]">Hands-On Printed Circuit Board Engineering [HOPE]</h1>
          <h2 className="text-[50px] text-white text-center">Bridging Theory and Practice</h2>
          <p className="text-white text-center">
            IEEE HOPE is an engineering design class for PCB-related design
            problems requiring PCB-related design solutions. Gaining practical
            experience with soldering, bringup, and testing.
          </p>

          <button className="bg-[#0076bbe6] w-max px-5 py-3 rounded-md text-white mt-10">Read more about HOPE</button>
        </div>
      </section>

      <section className="flex flex-col gap-5 items-center p-5" id="about">
        <h1 className="text-black text-[50px] font-bold">About HOPE</h1>
        <div className="text-black flex-grow w-2/3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi ullam necessitatibus illo accusantium maiores, corrupti molestiae laboriosam ab facere a dolore et, odio impedit minima! Veniam pariatur corporis ullam?
        </div>

        <h1 className="text-black text-[30px] pt-5">Meet Your Mentors</h1>
        <div className="flex-grow">
          <UserCarousel users={mentors}/>
        </div>
      </section>
    </>
  );
}
