import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "TEDx Kigali High School Youth - Dare to Dream",
  description:
    "TEDx Kigali High School Youth is a local gathering where live TED-like talks and performances are shared with the community.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<<<<<<< HEAD
      <head>
        <link rel="Tedx icon" href="/images/tedxicon.png" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-white`}>
=======
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white`}
      >
>>>>>>> c0d636954f715bce4e3f87860fbbfe02429fe8a3
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
