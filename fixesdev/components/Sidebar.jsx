"use client";
import React from "react";
import { sidebar } from "../data/sidebar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(sidebar, "sidebar");
  return (
    <div className="col-span-2 border-r border-[#ededed] p-6 flex flex-col gap-6 bg-[#ffffff]">
      {sidebar.map((i, index) => (
        <p
          key={index}
          className="cursor-pointer hover:bg-[#f5f5f5] p-2 rounded"
          onClick={() => {
            if (i.ruta.startsWith("http://") || i.ruta.startsWith("https://")) {
              window.open(i.ruta, "_blank");
            } else {
              router.push(i.ruta);
            }
          }}
        >
          {i.nombre}
        </p>
      ))}
    </div>
  );
}
