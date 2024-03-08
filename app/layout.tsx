import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "@/components/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopee - Belanja Online",
  description: "Yuk kita belanja di Shopee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Navbar></Navbar>
        <div className="min-h-screen"> {children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
