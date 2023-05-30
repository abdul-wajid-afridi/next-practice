import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "akonto",
  description: "Generated by create next app",
  link: "/ju.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="/ju.png" sizes="any" />
        </Head>
        <Navbar />
        <Image src={"/ju.png"} height={200} width={200} alt="img" />
        {children}
        <p>{"footer and create it later"}</p>
      </body>
    </html>
  );
}
