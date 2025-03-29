import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Uves Shaikh | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and other technologies. Check out my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
