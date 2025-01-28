import type { Metadata } from "next";
// import { Roboto } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/navigation/providers";


// const roboto = Roboto({
//   subsets: ["cyrillic"],
//   weight: ["300", "400", "900"],
// });


export const metadata: Metadata = {
  title: "Cake Studio Sweet bakery",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/public/favicon.svg" type="image/svg" sizes="any" />
      </head>
      <body >
        <Providers>
        {children}
        </Providers>
        </body>
        
    </html>
  );
}
