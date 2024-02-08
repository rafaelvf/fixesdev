"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skillsData from "@/data/skill";
import Image from "next/image";
import Link from "next/link";
import socialData from "@/data/social";
import contactData from "@/data/contact";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import galleryData from "@/data/gallery";

export default function Profile() {
  const [abierto, setAbierto] = useState(false);
  const [abierto23, setAbierto23] = useState(false);
  const { toast } = useToast();
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("reviterif@gmail.com");
    toast({
      title: "Email copied successfully!",
    });
  };

  const handleViewPortfolio = () => {
    const url = "/CVRafael24.pdf"; // URL of your PDF file
    window.open(url, "_blank");
  };

  return (
    <div
      style={{ maxHeight: "calc(100vh - 87px)", overflow: "auto" }}
      className="col-span-12 md:col-span-10 flex p-4 bg-[#fafafa] h-full"
    >
      <Toaster />
      <Tabs defaultValue={"about"} className="w-fit">
        <TabsList className="grid w-full grid-cols-4 w-[350px] mx-auto md:mx-0">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social links</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent
          value="about"
          className="flex flex-col xl:flex-row gap-10 lg:gap-20 flex-wrap"
        >
          <div className="xl:max-w-[600px]">
            <p className="mt-4">
              I am a curious person who got into programming when I discovered I
              could automate my work, specifically with macros in Excel. It blew
              my mind and sparked my curiosity around programming. Then, in 2020
              when the pandemic hit, I realized my current job wasn&apos;t
              making me happy, and I started exploring more into programming,
              even though I didn&apos;t think I was capable of being a
              programmer. After doing some online courses, I decided to take a
              big step in 2021 and get into a full-stack bootcamp to change
              careers definitively. Since then, I have been nonstop working and
              learning every day. It has been a huge sacrifice but an awesome
              and rewarding experience which I like more and more.
            </p>
            <p className="mt-4">
              {` Now I am a developer who loves to build products. I am currently
  building `}
              <a
                href="https://www.cuquipay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                cuquipay
              </a>
              {` on top of many other projects. The
  language I use to build my products is JavaScript, but my curiosity
  has also guided me to learn C and Python. For me, it's really
  important to know how things work, and C has given me an overall
  notion of low-level programming. Over the course of the years, I
  have been involved in many different projects which you can check
  out `}
              <Link href={"/projects"} className="font-bold">
                here.
              </Link>
            </p>

            <p className="mt-4">
              Besides of programming I am a big fan of sports and photography.
              The sport I practice the most is surfing. I try to do it whenever
              I have the chance. Here is a gallery of my favorite photos I have
              taken.
            </p>
          </div>
          <div className="mx-auto mt-4">
            <div className="flex mt-4 gap-2">
              <div className="h-auto w-[3px] bg-[#333333]"></div>
              <div className="flex flex-col gap-4 max-w-[340px] text-[14px] bg-[#ffffff]">
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2020</p>
                  <p className="font-light">
                    Started learning programming online using The Odin Project
                    and Udemy.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2021</p>
                  <p className="font-light">
                    Took the plunge and assisted a bootcamp that gave me
                    essentials to keep learning on my own.
                  </p>
                </div>
                <div
                  onClick={() => setAbierto(!abierto)}
                  className={`relative flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded cursor-pointer overflow-hidden transition-all duration-500 ${
                    abierto ? "max-h-96" : "max-h-20"
                  }`}
                >
                  <img
                    src={abierto ? "/icons/expanless.svg" : "/icons/expand.svg"}
                    className=" w-6 h-6 absolute right-0"
                  />
                  <p className="font-semibold">2022</p>
                  <p className="font-light">
                    -Landed my first job as a front-end developer at{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://paragonsnft.com/"}
                      className="font-semibold"
                    >
                      ParagonsNFT
                    </Link>
                    .
                    <br />
                    -Moved to Long Lost Friends as a front-end developer as
                    well. Where I participated in 15+ different{" "}
                    <Link href={"/projects"} className="font-semibold">
                      projects
                    </Link>
                    , focusing heavily on beautiful designs, incredible
                    animations, and overall rich and unique experiences.
                    <br />
                    -Built the{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://saetacoffee.com/"}
                      className="font-semibold"
                    >
                      Saeta Coffee
                    </Link>{" "}
                    website as a freelancer.
                  </p>
                </div>
                <div
                  onClick={() => setAbierto23(!abierto23)}
                  className={`relative flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded cursor-pointer overflow-hidden transition-all duration-500 ${
                    abierto23 ? "max-h-96" : "max-h-20"
                  }`}
                >
                  <img
                    src={
                      abierto23 ? "/icons/expanless.svg" : "/icons/expand.svg"
                    }
                    className=" w-6 h-6 absolute right-0"
                  />
                  <p className="font-semibold">2023</p>
                  <p className="font-light">
                    -Cofounded{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://www.cuquipay.com/"}
                      className="font-semibold"
                    >
                      Cuquipay
                    </Link>
                    , my software business.
                    <br />
                    -Built the{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://hazmeunaoferta.almacenesmarriott.com/"}
                      className="font-semibold"
                    >
                      Hazmeunaoferta
                    </Link>{" "}
                    e-commerce platform for Almacenes Marriott
                    <br />
                    -Built the{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://hallados.com.ec/"}
                      className="font-semibold"
                    >
                      Hallados
                    </Link>{" "}
                    e-commerce platform.
                    <br />
                    -Built a photography website for{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://www.marciafernandez.com/"}
                      className="font-semibold"
                    >
                      Marcia Fernández
                    </Link>{" "}
                    .
                    <br />
                    -Built a sailing event website for{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrerz"
                      href={"https://salinassailingweek.com/"}
                      className="font-semibold"
                    >
                      Salinas Yacht Club
                    </Link>{" "}
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Carousel className="w-full max-w-[16rem] sm:max-w-[25rem] md:max-w-[30rem] mx-auto mt-6">
            <CarouselContent>
              {galleryData.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image.url}
                    width={500}
                    height={300}
                    alt={image.name}
                    className="rounded"
                  />
                  <p className="flex justify-center md:justify-end mr-2 mt-3 font-extralight">
                    {image.name}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="skills">
          <div className="flex gap-8 justify-center md:justify-start flex-wrap mt-10">
            {skillsData.map((skill, index) => (
              <Image
                src={skill.logoUrl}
                width="80"
                height="80"
                alt={skill.name}
                key={index}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="social">
          <p className="font-semibold mt-10">You can find me in:</p>
          <div className="flex gap-6 flex-wrap mt-5">
            {socialData.map((skill, index) => (
              <Link
                href={skill.link}
                target="_blank"
                rel="noopener noreferrerz"
                key={index}
              >
                <Image
                  src={skill.logoUrl}
                  width="50"
                  height="50"
                  alt={skill.name}
                  className="transform hover:scale-[110%] transition"
                />
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="contact">
          <p className="font-semibold mt-10">Please contact me through:</p>

          <div className="flex gap-3 flex-wrap mt-5">
            <div className="flex gap-3 items-center text-[14px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p
                      value="Hello World"
                      id="myInput"
                      onClick={copyEmailToClipboard}
                      className="hover:bg-gray-200 hover:rounded p-1 transition"
                    >
                      reviterif@gmail.com
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Link
                href="mailto:reviterif@gmail.com"
                target="_blank"
                rel="noopener noreferrerz"
              >
                <Image
                  src={"/contact/gmail.svg"}
                  width="40"
                  height="40"
                  alt={"gmail"}
                  className="transform hover:scale-[110%] transition"
                />
              </Link>

              <Separator orientation="vertical" />
            </div>
            <Link
              href="https://wa.me/593994257528"
              target="_blank"
              rel="noopener noreferrerz"
              className="flex gap-3"
            >
              <Image
                src={"/contact/whatsapp.svg"}
                width="40"
                height="40"
                alt={"whatsapp"}
                className="transform hover:scale-[110%] transition"
              />
              <Separator orientation="vertical" />
            </Link>
            {contactData.map((skill, index) => (
              <Link
                href={skill.link}
                target="_blank"
                rel="noopener noreferrerz"
                className="flex gap-3"
                key={index}
              >
                <Image
                  src={skill.logoUrl}
                  width="40"
                  height="40"
                  alt={skill.name}
                  className="transform hover:scale-[110%] transition"
                />
                <Separator orientation="vertical" />
              </Link>
            ))}
          </div>
          <p className="font-semibold mt-10">My CV:</p>
          <div className="flex gap-3  mt-5 text-[14px] ">
            <div className="flex gap-3 items-center ">
              <a
                href="/CVRafael24.pdf"
                download="Rafael Viteri CV"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-gray-200 hover:rounded p-1 cursor-pointer transition"
              >
                Download
              </a>

              <Separator orientation="vertical" />
            </div>

            <p
              onClick={handleViewPortfolio}
              className="hover:bg-gray-200 hover:rounded p-1 transition cursor-pointer"
            >
              See online
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
