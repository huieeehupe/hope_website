import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-row">
        <div className="w-9/20 flex flex-col justify-center align-center gap-5 px-20">
          <p className="text-[#0076bbe6]">Hands-On Printed Circuit Board Engineering [HOPE]</p>
          <h2 className="text-[50px]">Bridging Theory and Practice</h2>
          <p>
            IEEE HOPE is an engineering design class for PCB-related design
            problems requiring PCB-related design solutions. Gaining practical
            experience with soldering, bringup, and testing.
          </p>

          <button className="bg-[#0076bbe6] w-max px-5 py-3 rounded-md text-white">Read more about HOPE</button>
        </div>
        <div className="w-11/20 h-screen">
          <img
            src="/IEEE_students.jpg"
            alt="IEEE students soldering"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
