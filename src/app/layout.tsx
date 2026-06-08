import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "Mercabroma",
  description: ""
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${roboto.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
