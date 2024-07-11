import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivin KV",
  description:
    "Passionate about creating robust and scalable web applications. Experienced in both front-end and back-end technologies, with a knack for problem-solving and delivering high-quality code.",
  keywords: ["vivin-kv", "mern", "next", "react-native"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
