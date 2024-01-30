"use client";
import React, { useState } from "react";
import { sidebar } from "../data/sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Sidebarmobile() {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="fixed bg-[#71797E] border rounded bottom-2 right-2 md:hidden z-10 p-2 flex flex-col ">
      <img
        src="/icons/ham.svg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      {mobileMenuOpen && (
        <div className="bg-[#ffffff] border rounded absolute bottom-[110%] right-0 p-3">
          {sidebar.map((i, index) => (
            <p
              key={index}
              className={`cursor-pointer hover:bg-[#f5f5f5] p-2 rounded ${
                i.coincidencia === lastPart ? "bg-[#f5f5f5]" : "null"
              }`}
              onClick={() => {
                if (
                  i.ruta.startsWith("http://") ||
                  i.ruta.startsWith("https://")
                ) {
                  window.open(i.ruta, "_blank");
                  setMobileMenuOpen(false);
                } else {
                  router.push(i.ruta);
                  setMobileMenuOpen(false);
                }
              }}
            >
              {i.nombre}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
