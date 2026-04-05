// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  icons: {
    icon: "/assets/images/logo.png",  // atau "/favicon.ico"
  },
  title: "Majestic Of Java",
  description: "Tour & Travel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <Analytics />
        {children}
      </body>
    </html>
  );
}