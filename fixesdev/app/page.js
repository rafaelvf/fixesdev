"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/projects"); // Use 'replace' to navigate without adding a new URL to the history stack
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
