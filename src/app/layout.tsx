import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivin KV",
  description:
    "Passionate about creating robust and scalable web applications. Experienced in both front-end and back-end technologies, with a knack for problem-solving and delivering high-quality code.",
  keywords: [
    'vivinkv',
     'vivin',
    "Sri C Achuthamenon Govt College Thrissur",
    "Front-end development",
    "MERN stack",
    "Mobile app development",
    "React Native",
    "Trebuchet Systems Kochi",
    "Front-end developer",
    "Tech Lead",
    "Tinkerhub GCT campus team",
    "Teaching technical content",
    "Tech industry preparation",
    "Tech Fests",
    "Thrissur region",
    "JavaScript",
    "TypeScript",
    "Robust type safety",
    "React library",
    "Innovative projects",
    "Technological advancements",
    "Collaboration opportunities",
  ],
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
