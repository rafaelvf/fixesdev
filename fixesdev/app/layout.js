import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Sidebarmobile from "@/components/Sidebarmobile";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Rafael Viteri",
  description: "Rafael Viteri (fixesdev) portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar />
        <div className="relative grid grid-cols-12 bg-[#fafafa] h-full">
          <Sidebar />
          <Sidebarmobile />
          <Link
            href="https://wa.me/593994257528"
            target="_blank"
            rel="noopener noreferrerz"
            className="fixed hidden md:flex md:bottom-4 md:right-4 hover:scale-110 transform z-10"
          >
            <Image src="/icons/was.svg" alt="contact" width={42} height={42} />
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
