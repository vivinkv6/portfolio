import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <Nav />
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
