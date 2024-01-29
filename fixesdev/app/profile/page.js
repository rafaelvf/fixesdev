import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Profile() {
  return (
    <div className="col-span-10 flex p-4 bg-[#ffffff]">
      <Tabs defaultValue="account" className="w-fit">
        <TabsList className="grid w-full grid-cols-4 w-[360px]">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social links</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <p className="mt-4">
            I am curious person who got cought into exploring how the internet
            and computers work. Around 2020 when pandemic hit I realized my
            current job wasn't making me happy and I started exploring new
            options. I have always liked my programming classes in high school
            and university but didn't think it was the "thing" for me. So I
            started with learning to code online, until on 2021 I decided to
            take a big step and get into a full-stack bootcamp and change
            careers definetely. Since then I have been non stop working and
            learning every day. It has been a sacrifice but awesome experience
            which I like more and more.
            <br /> What makes me continue is that I really enjoy it and my
            curiosity. I am always learning why things work they way they do.
          </p>
        </TabsContent>
        <TabsContent value="password">chao</TabsContent>
      </Tabs>
    </div>
  );
}
