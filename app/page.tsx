import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0076bbe6] mb-8">
        IEEE Student Hub
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Link href="/hope">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transform hover:-translate-y-1 transition">
            HOPE Course
          </button>
        </Link>
        <Link href="/vlsi">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transform hover:-translate-y-1 transition">
            VLSI Course
          </button>
        </Link>
      </div>
    </div>
  );
}
