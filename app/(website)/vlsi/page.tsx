import UserCarousel from "@/components/UserCarousel";
import {vlsi_mentors} from "@/constants/mentors";
import ProjectCarousel from "@/components/ProjectCarousel";
import {vlsi_projects} from "@/constants/projects";
import {vlsi_curriculum} from "@/constants/curriculum";

export default function Page() {
  return (
    <>
      <section
        className="flex items-center justify-center align-center bg-[url('/static/images/hope_group.png')] bg-cover bg-center h-screen"
        id="home"
      >
        <div className="absolute inset-0 bg-black/65 "></div>
        <div className="relative flex flex-col gap-5 px-20 items-center justify-center w-4/5">
          <h1 className="text-[#0076bbe6] text-[40px]">Howard University</h1>
          <h1 className="text-[#0076bbe6] text-[40px]">
            IEEE Advanced FPGA/ASIC Design and Verification
          </h1>
          <h2 className="text-[50px] text-white text-center pt-5">
            Mastering the VLSI Design and Verification Flow
          </h2>
          <p className="text-white text-center">
            IEEE VLSI 101 is an 8-week intensive course guiding students through the end-to-end VLSI design flow, covering RISC-V architecture, Verilog-based processor implementation, and modern verification methodologies using SystemVerilog and UVM.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5 items-center p-5" id="about">
        <h1 className="text-black text-[50px] font-bold">About VLSI 101</h1>
        <div className="text-black flex-grow w-2/3 text-center">
          IEEE VLSI 101 offers a structured eight-week journey through VLSI fundamentals, digital design, and verification techniques. Students will engage with processor datapath design, control logic implementation, and learn to verify hardware using industry-standard tools.
        </div>

        <h1 className="text-black text-[30px] pt-5">Meet Your Mentors</h1>
        <div className="flex-grow">
          <UserCarousel users={vlsi_mentors} />
        </div>
      </section>

      <section
        className="flex flex-col gap-5 items-center p-5 bg-black pb-20"
        id="projects"
      >
        <h1 className="text-[50px] font-bold">VLSI 101 Course Projects</h1>
        <ProjectCarousel projects={vlsi_projects} />
      </section>

      <section id="curriculum" className="flex flex-col gap-5 items-center p-5">
        <h1 className="text-black text-[50px] font-bold">The Curriculum</h1>
        <div className="overflow-x-auto w-4/5">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead className="bg-[#0076bbe6] text-white">
              <tr>
                <th className="py-3 px-6 border-b">Week</th>
                <th className="py-3 px-6 border-b">Content/Topics covered</th>
                <th className="py-3 px-6 border-b">Labs</th>
                <th className="py-3 px-6 border-b">Resources</th>
                <th className="py-3 px-6 border-b">Deliverables/Homeworks</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {vlsi_curriculum.map((week, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="py-3 px-6 border-b">{week.week}</td>
                  <td className="py-3 px-6 border-b">
                    {week.content.map((item, idx) => (
                      <div key={idx}>- {item}</div>
                    ))}
                  </td>
                  <td className="py-3 px-6 border-b">
                    {week.labs.map((lab, idx) => (
                      <div key={idx}>- {lab}</div>
                    ))}
                  </td>
                  <td className="py-3 px-6 border-b">
                    {week.resourses.map((resource, idx) => (
                      <div key={idx}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline decoration-dotted"
                        >
                          {resource.name}
                        </a>
                      </div>
                    ))}
                  </td>
                  <td className="py-3 px-6 border-b">
                    {week.deliverables.map((deliverable, idx) => (
                      <div key={idx}>- {deliverable}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="calendar" className="flex flex-col gap-5 items-center p-5">
        <h1 className="text-black text-[50px] font-bold">Our Calendar</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=40f4ce2ea11ab07fc8d6bd68706124cecc135aedeb5148016a273fdf942d9e71%40group.calendar.google.com&ctz=America%2FNew_York"
          className="border: 0 w-4/5 h-screen"
        ></iframe>
      </section>

      <section
        className="flex flex-col gap-5 items-center pt-10 pb-5 bg-black text-white"
        id="contact"
      >
        <h1 className="text-[50px] font-bold">Get in Touch</h1>
        <p className="text-center text-lg max-w-2xl">
          Connect with us through our communication channels and join our VLSI 101 GroupMe to stay up to date with course announcements!
        </p>
        <div className="flex gap-5">
          <a
            href="https://groupme.com/join_group/96131081/uo3DOddE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0076bbe6] px-6 py-3 rounded-md text-white text-lg hover:bg-[#005999]">
              Join VLSI 101 GroupMe
            </button>
          </a>
        </div>

        <div className="flex gap-10 text-xl pt-5">
          <p className="text-center text-lg max-w-2xl">
            <a
              href="mailto:hu.ieee.hope@gmail.com"
              className="hover:text-[#0076bbe6]"
            >
              Email
            </a>
          </p>
          <a
            href="https://linktr.ee/ieee_hu?utm_source=linktree_admin_share&fbclid=PAY2xjawJU4RpleHRuA2FlbQIxMQABpuDBT3zgCJ9PjzsPtcOFnxu0ND03pk1GFiNNttDaSJYmNCv1hyjagfnAOg_aem_Li9IoM4bba6ul4MPMEjYIQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0076bbe6]"
          >
            Linktree
          </a>
          <a
            href="https://www.instagram.com/ieee_hu?igsh=MWFoMnBzazdrNWxhcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0076bbe6]"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/howard-university-ieee-student-branch/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0076bbe6]"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center text-white pb-5 bg-black">
        <p>
          &copy; {new Date().getFullYear()} HU IEEE VLSI 101. All rights reserved.
        </p>
      </footer>
    </>
  );
}
