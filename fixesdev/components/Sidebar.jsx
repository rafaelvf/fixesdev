"use client";
import React from "react";
import { sidebar } from "../data/sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <div className="hidden md:flex  col-span-2 border-r border-[#ededed] p-6  flex-col gap-6 bg-[#ffffff]">
      {sidebar.map((i, index) => (
        <p
          key={index}
          className={`cursor-pointer hover:bg-[#83c5be] p-2 rounded ${
            i.coincidencia === lastPart ? "bg-[#83c5be]" : "null"
          }`}
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
