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
    <div className="col-span-12 md:col-span-10 flex p-4 bg-[#ffffff]">
      <Toaster />
      <Tabs defaultValue={"about"} className="w-fit">
        <TabsList className="grid w-full grid-cols-4 w-[350px] mx-auto md:mx-0">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social links</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <p className="mt-4">
            I am curious person who got cought into exploring how the internet
            and computers work. Around 2020 when pandemic hit I realized my
            current job wasn&apos;t making me happy and I started exploring new
            options. I have always liked my programming classes in high school
            and university but didn&apos;t think it was the &quot;thing&quot;
            for me. So I started with learning to code online, until on 2021 I
            decided to take a big step and get into a full-stack bootcamp and
            change careers definetely. Since then I have been non stop working
            and learning every day. It has been a sacrifice but awesome
            experience which I like more and more.
            <br /> What makes me continue is that I really enjoy it and my
            curiosity. I am always learning why things work they way they do.
          </p>
          <p className="mt-4">
            Besides of programming I am a big fan of sports and photography. The
            sport I practice the most is surfing. I try to do it whenever I have
            the chance. Here is a gallery of my favorite photos I have taken.
          </p>

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
