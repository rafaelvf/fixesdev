"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
export default function Navbar() {
  const { toast } = useToast();
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("reviterif@gmail.com");
    toast({
      title: "Email copied successfully!",
    });
  };
  const handleViewPortfolio = () => {
    const url = "/CVRafael24.pdf";
    window.open(url, "_blank");
  };
  return (
    <div className="border-b border-[#ededed]  px-4 lg:px-8 py-4 flex justify-between items-center">
      <p className="text-[#333333] font-bold">Fixesdev</p>
      <div className="flex items-center gap-4">
        <div className="md:flex items-center gap-1 hidden">
          <Link
            href="https://www.linkedin.com/in/rafael-viteri/"
            target="_blank"
            rel="noopener noreferrerz"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width="22"
              height="22"
              className="transform hover:scale-[110%] transition cursor-pointer"
            />
          </Link>
          <Link
            href="https://github.com/rafaelvf"
            target="_blank"
            rel="noopener noreferrerz"
          >
            <Image
              src="/icons/github.svg"
              alt="linkedin"
              width="22"
              height="22"
              className="transform hover:scale-[110%] transition cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Toaster />
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Avatar>
                <AvatarImage src="/images/pp.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Rafael Viteri</DropdownMenuLabel>
              <p className="text-[11px] pl-2 pb-[8px]">Software developer</p>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={copyEmailToClipboard}
                className="cursor-pointer"
              >
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleViewPortfolio}
              >
                Resume
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
