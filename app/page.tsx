import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex  items-center w-full h-full bg-cover bg-center bg-opacity-60 pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" style={{ backgroundImage: "url(/GrandCanyon.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-teal-100 font-semibold">
            Your Guided Path to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-900 to-yellow-700">
              {" "}
              Trained and Certified Geologists
            </span>
          </h1>
          <p className="text-gray-100 hidden md:block font-semibold">
            Welcome to GeoK, your premier destination for connecting with qualified Kenyan Geologists. Our platform brings together a diverse community of geology experts, ready to assist you in navigating the complexities of the Earth&apos;s terrain. Whether you are exploring for resources, researching geological phenomena, or seeking professional guidance, our network offers the expertise you need. Join us in unlocking the secrets of the Earth&apos;s past, present, and future with our dedicated team of skilled geologists

          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/learn-more"
              className="rounded-[20px] group relative bg-neutral-900  opacity-40  hover:bg-blue-300 px-5 py-3 text-lg text-white max-w-[200px]">
              Start Here
            </Link>

          </div>
          <SearchBox />
        </div>

      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/learn-more"
          className="rounded-[20px] group relative bg-neutral-900  opacity-40 px-5 py-3s text-lg text-white max-w-[200px]">
          Start Here
        </Link>
        <Link href="/my-projects"
          className="rounded-[20px] group relative bg-blue-300 px-5 py-3 text-lg text-white max-w-[200px]">
          My projects
        </Link>
        <Link href="/contact-me"
          className="rounded-[20px] group relative bg-blue-300 px-5 py-3 text-lg text-white max-w-[200px]">
          Contact me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]"></div>



    </main>
  );
}
