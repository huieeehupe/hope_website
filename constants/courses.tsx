const courses: {
  title: string;
  code: string;
  image: string;
  description: string;
  semester: string;
}[] = [
  {
    title: "Hands-On Printed Circuit Board Engineering",
    code: "HOPE 101",
    image: "/static/images/audio_amplifier.png",
    description:
      "HOPE is an engineering design class for PCB-related design problems requiring PCB-related design solutions. Gaining practical experience with soldering, bringup, and testing.",
    semester: "Spring 2024",
  },
  {
    title: "Field Programmable Gate Array Design",
    code: "FPGA 101",
    image: "/static/images/fpga.jpeg",
    description:
      "FPGA is an engineering design class for FPGA-related design problems requiring FPGA-related design solutions. Gaining practical experience with soldering, bringup, and testing.",
    semester: "Spring 2024",
  },
  {
    title: "Advanced FPGA/ASIC Design and Verification",
    code: "VLSI 101",
    image: "/static/images/rv32i_processor.png",
    description:
      "VIP 101 is an 8-week intensive course guiding students through the end-to-end VLSI design flow, covering RISC-V architecture, processor implementation in Verilog, and modern verification methodologies using SystemVerilog and UVM.",
    semester: "Spring 2025",
  },
];

export default courses;
