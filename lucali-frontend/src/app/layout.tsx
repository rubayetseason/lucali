import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucali",
  description: "A fine dining experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <section>
            <Navbar></Navbar>
          </section>
          {children}
          <section>
            <Footer></Footer>
          </section>
        </body>
      </html>
    </Providers>
  );
}
