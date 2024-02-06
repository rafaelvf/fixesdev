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
    <div className="col-span-12 md:col-span-10 flex p-4 bg-[#ffffff] h-full">
      <Toaster />
      <Tabs defaultValue={"about"} className="w-fit">
        <TabsList className="grid w-full grid-cols-4 w-[350px] mx-auto md:mx-0">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social links</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="flex gap-10 lg:gap-20 flex-wrap">
          <div className="lg:max-w-[500px]">
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
            <p className="font-bold">My roadmap</p>
            <div className="flex mt-4 gap-2">
              <div className="h-[585px] w-[3px] bg-[#333333]"></div>
              <div className="flex flex-col gap-4 max-w-[340px] text-[14px]">
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2020</p>
                  <p className="font-light">
                    Started to learn programming online using Odin Project and
                    Udemy.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2021</p>
                  <p className="font-light">
                    Took the plunge and assited a bootcamp that gave me
                    esseantials to keep learning on my own.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2022</p>
                  <p className="font-light">
                    -Built Saeta Coffee website as a freelancer
                    <br />
                    -Landed my first job as a front-end developer at ParagonsNFT{" "}
                    <br />
                    -Moved to Long Lost Friends as a front-end too.
                    <br />I participated on 15+ different projects. Focused
                    heavily on beautiful desings, incredible animations and
                    overall rich and different experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border border-[#83c5be] p-1 px-2 rounded">
                  <p className="font-semibold">2023</p>
                  <p className="font-light">
                    -Cofounded Cuquipay which is my software business.
                    <br />
                    -Built Hazmeunaoferta e-commerce platform for Almacenes
                    Marriott
                    <br />
                    -Built Hallados e-commerce platform.
                    <br />
                    -Built a photography and a sailing event websites as a
                    freelancer.
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
