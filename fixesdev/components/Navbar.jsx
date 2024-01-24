import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="border-b border-[#ededed]  px-4 lg:px-8 py-4 flex justify-between items-center">
      <p className="text-[#333333] font-bold">Fixesdev</p>
      <div>
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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
            <DropdownMenuItem>Resume</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
