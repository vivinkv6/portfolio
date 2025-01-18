import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${inter.className} bg-gray-950`}>
        <Nav />
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
