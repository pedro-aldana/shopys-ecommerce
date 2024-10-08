import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Shared/ThemeProvider/ThemeProvider";

import { Toaster } from "@/components/ui/toaster";

const roboto = Urbanist({
  weight: ['400','500','700','900'],
  style: ['normal','italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Shopy's",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
        >
         
          {children}
          <Toaster/>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
