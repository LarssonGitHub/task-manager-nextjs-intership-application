import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { GlobalContextProvider } from "@/context/GlobalContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task management application.",
  description: "A project given by Clever Compliance for internship as a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
