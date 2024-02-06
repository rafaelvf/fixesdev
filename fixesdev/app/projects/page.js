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
import Filters from "@/components/Filters";
export default function Projects() {
  const [filtro, setFiltro] = useState("All");
  const [dataFiltrada, setDataFiltrada] = useState([]);

  useEffect(() => {
    const data = projectsData.filter((i) => {
      if (filtro === "All") {
        return projectsData;
      } else {
        return i.tag === filtro;
      }
    });
    setDataFiltrada(data);
  }, [filtro]);

  return (
    <div className="col-span-12 md:col-span-10 flex gap-4 flex-wrap p-4 justify-center md:justify-start ">
      <Filters filtro={filtro} setFiltro={setFiltro} />
      {dataFiltrada.map((project, index) => (
        <Sheet key={index}>
          <Card className="flex flex-col max-w-[350px] w-full h-auto bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-[101%] transition">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <div className="h-[200px] flex items-center justify-center">
              <Image
                alt={project.title}
                width={200}
                height={200}
                src={project.image}
                className="object-cover"
              />
            </div>
            <p className="text-[14px] font-medium mx-auto p-6">
              {project.shortDescription}
            </p>
            <div className="mt-auto p-6 flex justify-evenly">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Button>Website</Button>
              </a>
              <SheetTrigger asChild>
                <Button variant="outline">See more</Button>
              </SheetTrigger>
            </div>
          </Card>

          <SheetContent className="overflow-scroll">
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
