"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import projectsData from "@/data/projects";
export default function Projects() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation(); // Call getLocation when component mounts
  }, []);
  console.log(latitude, longitude, "lati");
  return (
    <div className="col-span-12 md:col-span-10 flex gap-4 flex-wrap p-4 justify-center md:justify-start ">
      {projectsData.map((project, index) => (
        <Sheet key={index}>
          <Card className=" h-fit flex flex-col  max-w-[350px] relative pb-4 ">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <div className="h-[200px] flex items-center">
              <Image
                alt="Hazmeunaoferta"
                width={200}
                height={200}
                src={project.image}
                className="m-auto "
              />
            </div>
            <p className="text-[14px] font-medium max-w-[320px] mx-auto p-6">
              {project.shortDescription}
            </p>
            <div className="flex justify-evenly px-6">
              <a href={project.url} target="_blank" rel="noopener noreferrerz">
                <Button>Website</Button>
              </a>
              <SheetTrigger asChild>
                <Button variant="outline">See more</Button>
              </SheetTrigger>
            </div>
          </Card>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>{project.title}</SheetTitle>
              <SheetDescription>{project.shortDescription}</SheetDescription>
              <SheetDescription>{project.longDescription}</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 mt-2">
              {project.keyPoints.length > 0 && (
                <p className="font-semibold ">Key points</p>
              )}
              <ul className="list-disc text-[14px] text-[#647488] pl-4">
                {project.keyPoints.map((point, innerIndex) => (
                  <li key={innerIndex}>{point}</li>
                ))}
              </ul>
            </div>

            <SheetFooter className="mt-4">
              <SheetClose className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrerz"
                >
                  <Button>Website</Button>
                </a>
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrerz"
                  >
                    <Button variant="outline">Video</Button>
                  </a>
                )}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
