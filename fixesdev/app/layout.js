import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Sidebarmobile from "@/components/Sidebarmobile";
const inter = Inter({ subsets: ["latin"] });

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
        <div className="grid grid-cols-12 bg-[#fafafa] h-screen">
          <Sidebar />
          <Sidebarmobile />
          {children}
        </div>
      </body>
    </html>
  );
}
