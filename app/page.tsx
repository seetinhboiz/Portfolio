"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const handleDownload = (e: any) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "Truong-Trong-Nghia-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full pl-4">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent">Truong Trong Nghia</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              I am a highly motivated and results-oriented full-stack developer
              with a passion for building innovative and user-friendly web
              applications.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={(e) => handleDownload(e)}
                className="uppercase flex items-center gap-2 hover:cursor-pointer"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
