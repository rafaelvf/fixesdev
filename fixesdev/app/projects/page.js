import React from "react";
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
export default function Projects() {
  return (
    <div className="col-span-10 flex p-4">
      <Sheet>
        <Card className=" h-fit max-w-[350px] relative pb-4">
          <CardHeader>
            <CardTitle>Hazmeunaoferta</CardTitle>
          </CardHeader>
          <Image
            alt="Hazmeunaoferta"
            width={200}
            height={200}
            src="/images/marriott1.webp"
            className="mx-auto "
          />
          <p className="text-[14px] font-medium max-w-[320px] mx-auto p-6">
            Is an e-commerce platform for AlmacenesMarriott, a prominent
            retailer specializing in lighting and furniture. This development
            introduces a unique twist where clients have the opportunity to
            negotiate the prices of products.
          </p>
          <div className="flex justify-evenly px-6">
            <Button>Website</Button>
            <SheetTrigger asChild>
              <Button variant="outline">See more</Button>
            </SheetTrigger>
          </div>
        </Card>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Hazmeunaoferta</SheetTitle>
            <SheetDescription>
              HazmeUnaOferta is an e-commerce platform for AlmacenesMarriott, a
              prominent retailer specializing in lighting and furniture. This
              development introduces a unique twist where clients have the
              opportunity to negotiate the prices of products.
            </SheetDescription>
            <SheetDescription>
              The platform is built using advanced technologies such as Next.js,
              React, TypeScript, SCSS, Sanity, and integrates with the Paymetez
              payment processor, as well as MongoDB for database management.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold ">Key points</p>
            <ul className="list-disc text-[14px] text-[#647488] pl-4">
              <li>Is integrated with their SAP system</li>
              <li>Integrates Paymetez which is a payment processor</li>
              <li>
                Uses Sanity as a CMS to upload the images for their products
              </li>
              <li>
                Uses Sanity as a CMS to upload the images for their products
              </li>
            </ul>
          </div>

          <SheetFooter className="mt-4">
            <SheetClose className="flex gap-4">
              <Button>Website</Button>
              <Button variant="outline">Video</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
